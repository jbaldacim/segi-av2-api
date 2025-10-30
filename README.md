Alunos: Eduardo Paulino de Souza e João Leonardo Fleury Baldacim

# 🧩 Cifra de Vernam API

API RESTful em **Node.js + Express + TypeScript** que implementa a **Cifra de Vernam (XOR)** para cifrar e decifrar textos com **Swagger UI** para testar direto no navegador.

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript  
- Swagger UI Express
- Swagger JSDoc  
- CORS

## 📦 Pré-requisitos

- Node.js 18+  
- npm

## ⚙️ Instalação

```bash
git clone https://github.com/jbaldacim/segi-av2-api
cd segi-av2-api
npm install
```

## ▶️ Execução

```bash
npm run dev
```

- API: `http://localhost:3000`  
- Swagger UI: `http://localhost:3000/docs`  
- OpenAPI JSON: `http://localhost:3000/docs.json`

---

## 📘 Endpoints

### 1) **Cifrar Texto**
Recebe o texto claro e a chave (mesmo tamanho) e retorna o texto cifrado em **binário**.

- **URL**: `POST /cifrar`  
- **Body (exemplo padrão do projeto)**:
  ```json
  {
    "textoClaro": "OLA",
    "chave": "CHT"
  }
  ```
- **200 OK**:
  ```json
  {
    "textoCifrado": "011010110110010101111001"
  }
  ```
  > Obs.: O valor acima é apenas um exemplo de formato; o binário real depende da sua implementação.

- **400 Bad Request**:
  ```json
  {
    "error": "Requisição inválida: 'textoClaro' e 'chave' devem ter o mesmo tamanho."
  }
  ```

---

### 2) **Decifrar Texto**
Recebe o texto cifrado (binário) e a chave, e retorna o texto claro.

- **URL**: `POST /decifrar`  
- **Body (exemplo padrão do projeto)**:
  ```json
  {
    "textoCifrado": "000011000000010000010101",
    "chave": "CHT"
  }
  ```
  > Dica: o tamanho em **bits** de `textoCifrado` deve ser **8 ×** o tamanho da `chave`.  
  > Ex.: `CHT` (3 caracteres) ⇒ 24 bits.

- **200 OK**:
  ```json
  {
    "textoClaro": "OLA"
  }
  ```

- **400 Bad Request**:
  ```json
  {
    "error": "Requisição inválida: 'textoCifrado' deve ter o tamanho correto em bits correspondente ao tamanho da 'chave'."
  }
  ```

---

## 🗂️ Estrutura do Projeto

```
/
|-- src/
|   |-- controllers/
|   |   └── vernam.controller.ts   # Regras de negócio (req/res)
|   |-- routes/
|   |   └── vernam.routes.ts       # Rotas + anotações Swagger
|   |-- services/
|   |   └── vernam.services.ts     # Lógica da Cifra de Vernam
|   |-- swagger.ts                 # Spec OpenAPI (schemas e config)
|   └── server.ts                  # Bootstrap do Express + Swagger UI
|-- package.json
|-- tsconfig.json
└-- README.md
```
