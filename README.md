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
- Criar conta
- Recuperar senha
- Criar nova senha
- Home (Apenas com o usuario logado)
- Not Found

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

**Observação: A api está publicada no microsoft azure, e o mesmo não libera envio de smtp.**
**Por isso a criação de conta e recupearação de senha não estão disparando email. Local funciona normalmente.**

[Link para o projeto na Vercel](https://auth-front-ten.vercel.app/login)
