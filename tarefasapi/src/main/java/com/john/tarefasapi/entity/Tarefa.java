package com.john.tarefasapi.entity;

import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.*;
import lombok.*;

@DynamoDbBean
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Tarefa {

    private String id;
    private String titulo;
    private String descricao;
    private String status;

    @DynamoDbPartitionKey
    public String getId() {
        return id;
    }
}