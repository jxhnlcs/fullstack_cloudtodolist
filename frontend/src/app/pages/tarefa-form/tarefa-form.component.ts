import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../../core/services/tarefa.service';
import { Tarefa } from '../../core/models/tarefa.model';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html'
})
export class TarefaFormComponent implements OnInit {
  tarefa: Tarefa = { titulo: '', descricao: '', status: 'pendente' };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tarefaService: TarefaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.tarefaService.buscarPorId(id).subscribe({
        next: (res) => this.tarefa = res
      });
    }
  }

  salvar() {
    if (this.isEdit && this.tarefa.id) {
      this.tarefaService.atualizar(this.tarefa.id, this.tarefa).subscribe({
        next: () => this.router.navigate(['/'])
      });
    } else {
      this.tarefaService.criar(this.tarefa).subscribe({
        next: () => this.router.navigate(['/'])
      });
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}