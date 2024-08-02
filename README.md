# Desafio: Sistema de Gerenciamento de Tarefas

## Objetivo

Criar uma aplicação web para gerenciar tarefas. A aplicação deve permitir ao usuário adicionar, visualizar, editar e excluir tarefas. As tarefas devem ser armazenadas no LocalStorage para que persistam entre as sessões.

## Funcionalidades Requeridas

### 1. Formulário de Adição de Tarefa

- **Campos:**
  - Tarefa
  - Data de conclusão

- **Botão:** 
  - Adicionar a tarefa à lista

- **Mensagem Temporária:**
  - Informar que a tarefa foi adicionada na lista de tarefas

### 2. Tabela de Tarefas

- **Exibição:**
  - Todas as tarefas adicionadas em uma tabela

- **Colunas:**
  - Tarefa
  - Data de conclusão
  - Ações (editar e excluir)

- **Contador de Tarefas:**
  - Visualizar a quantidade de tarefas adicionadas em algum lugar da tela

### 3. Ações na Tabela

- **Editar:**
  - Permitir a edição dos detalhes da tarefa ao clicar na mesma
  - A tarefa deve ser carregada no formulário para edição

- **Excluir:**
  - Permitir a exclusão de uma tarefa ao clicar no botão de deletar
  - O botão excluir deve ser visualizado somente quando a tarefa for clicada ou quando o mouse estiver em cima da tarefa

- **Selecionar Vários Itens:**
  - Permitir a exclusão de múltiplas tarefas ao mesmo tempo

### 4. LocalStorage

- **Armazenamento:**
  - Armazenar todas as tarefas no LocalStorage

- **Carregamento:**
  - Carregar as tarefas do LocalStorage ao inicializar a aplicação

## Requisitos Técnicos

- **HTML/CSS/JavaScript:** Para a implementação da interface e funcionalidades.
- **LocalStorage:** Para persistência de dados entre sessões.

## Instruções de Uso

1. **Clonar o Repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
