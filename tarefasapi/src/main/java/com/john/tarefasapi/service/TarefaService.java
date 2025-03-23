package com.john.tarefasapi.service;

import com.john.tarefasapi.entity.Tarefa;
import com.john.tarefasapi.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository repository;

    public Tarefa criar(Tarefa tarefa) {
        tarefa.setId(UUID.randomUUID().toString());
        return repository.salvar(tarefa);
    }

    public List<Tarefa> listar() {
        return repository.listar();
    }

    public Optional<Tarefa> buscarPorId(String id) {
        return repository.buscarPorId(id);
    }

    public Optional<Tarefa> atualizar(String id, Tarefa novaTarefa) {
        Optional<Tarefa> existente = repository.buscarPorId(id);
        if (existente.isPresent()) {
            Tarefa tarefa = existente.get();
            tarefa.setTitulo(novaTarefa.getTitulo());
            tarefa.setDescricao(novaTarefa.getDescricao());
            tarefa.setStatus(novaTarefa.getStatus());
            repository.salvar(tarefa);
            return Optional.of(tarefa);
        }
        return Optional.empty();
    }

    public void deletar(String id) {
        repository.deletar(id);
    }
}