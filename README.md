# Lanches & Doces App 🍔🍰

Um aplicativo mobile de cardápio digital inspirado na interface do iFood, desenvolvido para facilitar pedidos de lanches e sobremesas. O foco do projeto é proporcionar uma experiência de compra fluida, culminando no fechamento do pedido via WhatsApp.

---

## 📱 Sobre o Projeto

O aplicativo funciona como um catálogo interativo onde o usuário pode navegar por diferentes categorias de produtos, verificar promoções e configurar seu carrinho de compras de forma intuitiva.

### Principais Funcionalidades:
* **Interface Inspirada no iFood:** Layout focado em usabilidade e conversão visual.
* **Categorização de Itens:** Separação clara entre lanches salgados e doces.
* **Gestão de Pedido:** Seleção de quantidade e definição do método de pagamento diretamente no app.
* **Integração com WhatsApp:** Utilização da API do WhatsApp para redirecionar o resumo do pedido automaticamente para o estabelecimento, facilitando o atendimento.
* **Navegação Fluida:** Uso de Drawer e Stack Navigation para uma transição suave entre telas.

---

## 🛠️ Tecnologias Utilizadas

* **React Native & Expo:** Framework principal para desenvolvimento mobile híbrido.
* **Styled Components:** Utilizado para a estilização via CSS-in-JS, garantindo componentes limpos e reutilizáveis.
* **React Navigation (@react-navigation):** Implementação de navegação por gaveta (Drawer) e pilhas (Stack).
* **Expo Router:** Gerenciamento de rotas moderno e baseado em arquivos.
* **Vector Icons:** Ícones interativos para uma interface mais rica.

---

## 🏗️ Arquitetura de Navegação

O projeto utiliza uma combinação estratégica de navegadores para otimizar a experiência do usuário:



1. **Drawer Navigation:** Para acesso rápido às categorias principais e configurações.
2. **Stack Navigation:** Para o fluxo de compra, garantindo que o usuário possa avançar e retornar entre o produto e a finalização do pedido sem perder o contexto.

---

## 📦 Como rodar o aplicativo

### 1. Pré-requisitos
* Node.js instalado.
* Aplicativo **Expo Go** instalado no seu celular (Android ou iOS) ou um emulador configurado.

### 2. Instalação e Execução
```bash
# Clone o repositório
git clone [https://github.com/SeuUsuario/lanches-doces-app](https://github.com/SeuUsuario/lanches-doces-app)

# Entre na pasta do projeto
cd lanches-doces-app

# Instale as dependências
npm install

# Inicie o servidor do Expo
npm start
