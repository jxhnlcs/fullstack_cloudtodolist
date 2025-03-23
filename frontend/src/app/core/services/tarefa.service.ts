import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../models/tarefa.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = `${environment.apiUrl}/tarefas`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  criar(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  atualizar(id: string, tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${id}`, tarefa);
  }

  deletar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  buscarPorId(id: string): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }
}