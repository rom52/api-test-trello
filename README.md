Projeto de automação de testes do Trello via APIs

Projeto de automação de testes que validam os seguintes cenários do Trello via APis do mesmo:

Criar novo quadro
Validar criação de quadro
Adicionar lista Done
Adicionar lista Testing
Adicionar lista In Progress
Adicionar lista ToDo
Adicionar lista Backlog
Validar criação de listas no quadro
Incluir novo card
Alterar nome do card
Mover card para ToDo
Mover card para In Progress
Mover card para Testing
Mover card para Done
Excluir card

Tecnologias utilizadas:
Node.js como linguagem de programação
Mocha
Chai
Request

Para execução, baixar o projeto, ter Node instalado na máquina e na pasta raiz do projeto executar o comando:
npm install
Este comando irá baixar as dependências do projeto.
Para execução dos testes, executar o comando: mocha test/spec.js --reporter mochawesome
O relatório será gerado na pasta ../mochawesome-report

Rômulo Negri Silva
