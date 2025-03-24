# 📝 TarefasApp

Aplicação web de gerenciamento de tarefas com backend em **Spring Boot + AWS DynamoDB** e frontend em **Angular + Tailwind CSS**.

## 🔧 Tecnologias Utilizadas

### Backend
- Spring Boot 3
- AWS SDK v2 (DynamoDB Enhanced Client)
- Swagger OpenAPI
- Java 17

### Frontend
- Angular 18+
- Tailwind CSS
- Font Awesome
- Componentes customizados (Navbar, Toasts)
- Deploy-ready como SPA

---

## 📁 Funcionalidades

- ✅ Criar, listar, editar e remover tarefas
- ✅ Status de tarefa (pendente ou concluída)
- ✅ Feedback visual com toasts
- ✅ Interface moderna com cores suaves
- ✅ Ícones com FontAwesome

---

## 🌐 API Endpoints (Swagger)
Acesse: `http://localhost:8080/swagger-ui.html`

| Método | Endpoint           | Descrição               |
|--------|--------------------|-------------------------|
| GET    | /api/tarefas       | Lista todas as tarefas |
| GET    | /api/tarefas/{id}  | Busca tarefa por ID    |
| POST   | /api/tarefas       | Cria nova tarefa       |
| PUT    | /api/tarefas/{id}  | Atualiza uma tarefa    |
| DELETE | /api/tarefas/{id}  | Remove uma tarefa      |

---

## ⚙️ Configuração DynamoDB (Credenciais AWS)

Configure suas credenciais AWS localmente com:

```
aws configure
```

Ou use variáveis de ambiente:

```
AWS_ACCESS_KEY_ID=SUACHAVE
AWS_SECRET_ACCESS_KEY=SUASECRETA
AWS_REGION=us-east-1
```

---

## 📦 Como rodar o projeto

### Backend

```bash
./mvnw spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
ng serve
```

## 🚀 Deploys (em breve)

Atualmente, o projeto está pronto para deploy. Em breve serão adicionadas as instruções completas para:

- ✅ Deploy do Backend com Spring Boot na AWS EC2
- ✅ Deploy do Frontend Angular no S3 + CloudFront como SPA

Essas etapas permitirão que o sistema fique 100% acessível em nuvem.