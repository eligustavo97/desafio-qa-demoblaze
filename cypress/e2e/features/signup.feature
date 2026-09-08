# language: pt
Funcionalidade: Cadastro de Usuários

  Cenário: Realizar cadastro com dados válidos
    Dado que estou na página inicial da loja
    Quando informo dados válidos para um novo usuário
    Então o sistema deve exibir uma mensagem de confirmação de cadastro

  Cenário: Tentar cadastrar usuário já existente
    Dado que estou na página inicial da loja
    Quando tento cadastrar um usuário que já existe
    Então o sistema deve exibir um alerta informando que o usuário já existe