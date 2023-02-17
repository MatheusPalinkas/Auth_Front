# :closed_lock_with_key: Auth Front

Front-end para que consome a api de login do repo (Auth_API)[https://github.com/MatheusPalinkas/Auth_API].

---

## :memo: Pré-requisitos

- [Node](https://nodejs.org/pt-br/)
- [Npm](https://www.npmjs.com/)

---

## :hammer_and_wrench: Tecnologias utilizadas

- Vite
- TypeScript
- Formik
- Yup
- Styled components
- Axios

---

### :computer: Telas

- Login
![Captura de tela_20230217_080539](https://user-images.githubusercontent.com/53866869/219637017-04b8b625-39b9-43c9-861e-65e1dfbeea0d.png)

- Criar conta
![Captura de tela_20230217_080548](https://user-images.githubusercontent.com/53866869/219637068-2f7ebe70-4b81-4157-ad9e-1f4811b2f114.png)

- Recuperar senha
![Captura de tela_20230217_080555](https://user-images.githubusercontent.com/53866869/219637149-5a260648-795c-4605-89a5-f48a43b0771e.png)

- Criar nova senha
![Captura de tela_20230217_080607](https://user-images.githubusercontent.com/53866869/219637183-f1906dbb-b0c3-4cbb-98bb-80e41f308e97.png)

- Home (Apenas com o usuario logado)
![Captura de tela_20230217_080732](https://user-images.githubusercontent.com/53866869/219637250-757e4c65-de72-48ec-b290-75b4acd886d6.png)

- Not Found
![Captura de tela_20230217_080621](https://user-images.githubusercontent.com/53866869/219637234-92e80b02-00cc-457e-ad89-e27550eaeef4.png)

---

## :walking: Passo a passo para executar o projeto

#### 1. clonar o repositório

```
git clone https://github.com/MatheusPalinkas/Auth_Front
```

#### 2. Acessar pasta e baixar dependências

```
cd Auth_Front
npm i install
```

#### 3. Alterar base url da api

Dentro do arquivo .env. Alterar o valor da varivel VITE_API_BASE_URL.

```js
//Por default aponta para a API do projeto local
VITE_API_BASE_URL=http://localhost:5250
```

### 4. Iniciar aplicação

```
npm run dev
```

### 5. Abrir o navegador

Abrir o navegador no endereço http://localhost:5173

---

### :thumbsup: Projeto publicado

**Observação: A api ainda não foi publicada, logo as requisições não funcionam. Apenas as caracteristicas visuais.**

[Link para o projeto na Vercel](https://auth-front-ten.vercel.app/login)
