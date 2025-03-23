import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../core/services/tarefa.service';
import { Tarefa } from '../../core/models/tarefa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.tarefaService.listar().subscribe({
      next: (res) => this.tarefas = res
    });
  }

  excluir(id: string) {
    if (confirm('Deseja realmente excluir esta tarefa?')) {
      this.tarefaService.deletar(id).subscribe({
        next: () => this.listar()
      });
    }
  }

  editar(id: string) {
    this.router.navigate(['/editar', id]);
  }

  nova() {
    this.router.navigate(['/nova']);
  }
}