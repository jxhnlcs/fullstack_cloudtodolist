package com.john.tarefasapi.repository;

import com.john.tarefasapi.entity.Tarefa;
import org.springframework.stereotype.Repository;
import software.amazon.awssdk.enhanced.dynamodb.*;
import software.amazon.awssdk.enhanced.dynamodb.model.*;

import java.util.*;

@Repository
public class TarefaRepository {

    private final DynamoDbTable<Tarefa> table;

    public TarefaRepository(DynamoDbEnhancedClient enhancedClient) {
        this.table = enhancedClient.table("tarefas", TableSchema.fromBean(Tarefa.class));
    }

    public Tarefa salvar(Tarefa tarefa) {
      table.putItem(tarefa);
      return tarefa;
  }

    public List<Tarefa> listar() {
        return table.scan().items().stream().toList();
    }

    public Optional<Tarefa> buscarPorId(String id) {
        return Optional.ofNullable(table.getItem(Key.builder().partitionValue(id).build()));
    }

    public void deletar(String id) {
        table.deleteItem(Key.builder().partitionValue(id).build());
    }
}