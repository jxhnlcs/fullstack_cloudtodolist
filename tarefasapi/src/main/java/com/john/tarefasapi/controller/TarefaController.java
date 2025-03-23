package com.john.tarefasapi.controller;

import com.john.tarefasapi.entity.Tarefa;
import com.john.tarefasapi.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
@CrossOrigin(origins = "*")
public class TarefaController {

    @Autowired
    private TarefaService service;

    @PostMapping
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        return service.criar(tarefa);
    }

    @GetMapping
    public List<Tarefa> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public Tarefa buscarPorId(@PathVariable String id) {
        return service.buscarPorId(id).orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
    }

    @PutMapping("/{id}")
    public Tarefa atualizar(@PathVariable String id, @RequestBody Tarefa tarefa) {
        return service.atualizar(id, tarefa).orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable String id) {
        service.deletar(id);
    }
}