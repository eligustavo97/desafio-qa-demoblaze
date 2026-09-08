# language: pt
Funcionalidade: Gerenciamento do Carrinho

  Cenário: Adicionar itens, remover o monitor e validar a persistência
    Dado que estou na página inicial da loja
    Quando adiciono um celular, um monitor e um computador ao carrinho
    E navego até a tela do carrinho
    E removo o produto "Apple monitor 24"
    E atualizo a página
    Então o produto "Apple monitor 24" não deve ser exibido na lista
    E devem permanecer apenas os outros dois produtos selecionados