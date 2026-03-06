# Cypress SauceDemo - Automação de Testes E2E

Projeto de automação de testes end-to-end utilizando Cypress com arquitetura Page Objects, cobrindo os principais fluxos de um e-commerce.

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/) v14+
- Node.js v22+
- JavaScript (ES6+)

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                  # Arquivos de teste
│   ├── login.cy.js
│   ├── inventory.cy.js
│   └── checkout.cy.js
├── pages/                # Page Objects
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
└── support/
    ├── commands.js
    └── e2e.js
```

## ✅ Cobertura de Testes

### Login (4 testes)

- Login com credenciais válidas
- Erro com credenciais inválidas
- Erro com usuário em branco
- Erro com senha em branco

### Inventário (6 testes)

- Listagem de produtos
- Adicionar produto ao carrinho
- Adicionar e remover produto
- Adicionar múltiplos produtos
- Ordenação por nome Z-A
- Navegação para o carrinho

### Carrinho e Checkout (5 testes)

- Exibição de produto adicionado
- Remoção de produto pelo carrinho
- Retorno ao inventário
- Checkout completo com sucesso
- Erro ao prosseguir sem dados

## 🚀 Como Executar

### Pré-requisitos

- Node.js v18+
- npm v8+

### Instalação

```bash
git clone https://github.com/seu-usuario/cypress-saucedemo.git
cd cypress-saucedemo
npm install
```

### Variáveis de Ambiente

Copia o arquivo de exemplo e preenche com suas credenciais:

```bash
cp .env.example .env
```

Abre o `.env` e preenche:

```
CYPRESS_USERNAME=seu_usuario
CYPRESS_PASSWORD=sua_senha
```

> As credenciais para o SauceDemo estão disponíveis em [saucedemo.com](https://www.saucedemo.com)

### Executar todos os testes

```bash
npx cypress run
```

### Executar um fluxo específico

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
npx cypress run --spec "cypress/e2e/inventory.cy.js"
npx cypress run --spec "cypress/e2e/checkout.cy.js"
```

### Abrir interface visual do Cypress

```bash
npx cypress open
```

## 🏗️ Arquitetura

O projeto utiliza o padrão **Page Objects** para separar a lógica de interação com a UI dos arquivos de teste, tornando o código mais reutilizável e fácil de manter.

Cada Page Object encapsula:

- Seletores dos elementos da página
- Métodos de interação
- Abstrações de fluxos comuns
