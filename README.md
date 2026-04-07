# 📅 Sistema de Agendamento

Aplicação web para gerenciamento de agendamentos de clientes, desenvolvida com **Next.js (frontend)** e **Java Spring Boot (backend)**.  
O sistema permite cadastrar horários, validar conflitos e simular um fluxo real de agendamento.

---

## 🚀 Tecnologias utilizadas

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS  
- **Backend:** Java, Spring Boot, JPA / Hibernate  

---

## ⚙️ Funcionalidades

- ✔ Criar agendamentos  
- ✔ Validação de conflito de horário  
- ✔ Integração com API REST  
- 🔜 Listagem de agendamentos (em desenvolvimento)  
- 🔜 Exclusão de agendamentos (em desenvolvimento)  

---

## 💻 Como rodar o projeto

### Backend (Spring Boot)
Rodar a aplicação Java:

```bash
./mvnw spring-boot:run

```
---

ou pela IDE.

A API estará disponível em:
http://localhost:8080

Frontend (Next.js)
```bash
npm install
npm run dev
````
---

Acesse no navegador:
http://localhost:3000

O frontend consome a API:
http://localhost:8080/agendamentos

---

📌 Objetivo do projeto

Este projeto foi desenvolvido com foco em:

Prática de integração entre frontend e backend
Consumo de API REST
Manipulação de estados com React
Construção de interfaces modernas com Tailwind CSS
Simulação de um sistema real de agendamento

---

🧠 Aprendizados
Comunicação entre aplicações (HTTP / REST)
Estruturação de projetos frontend e backend separados
Uso de boas práticas de versionamento com Git
Organização de código e componentes
