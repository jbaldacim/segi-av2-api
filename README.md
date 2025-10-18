# Cifra de Vernam API

Este projeto é uma API RESTful construída com Node.js, Express e TypeScript que
implementa a Cifra de Vernam. A API fornece endpoints para cifrar e decifrar
texto.

A Cifra de Vernam é um método de criptografia inquebrável, desde que a chave
seja verdadeiramente aleatória, usada apenas uma vez, e mantida em segredo. O
processo de cifragem envolve a combinação do texto claro com a chave através de
uma operação XOR bit a bit.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript

## Pré-requisitos

- Node.js (versão 18 ou superior recomendada)
- pnpm (ou outro gerenciador de pacotes como npm ou yarn)

## Instalação

1.  Clone o repositório para a sua máquina local:

    ```sh
    git clone https://github.com/jbaldacim/segi-av2-api
    ```

2.  Navegue até o diretório do projeto:

    ```sh
    cd segi-av2-api
    ```

3.  Instale as dependências do projeto:
    ```sh
    pnpm install
    ```

## Como Executar

Para iniciar o servidor em modo de desenvolvimento, execute o seguinte comando.
O servidor irá reiniciar automaticamente a cada alteração nos arquivos.

```sh
pnpm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

A API expõe dois endpoints principais para cifragem e decifragem de texto.

### 1. Cifrar Texto

Este endpoint recebe um texto claro e uma chave, ambos como strings, e retorna o
texto cifrado em formato binário.

- **URL**: `/cifrar`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "textoClaro": "string",
    "chave": "string"
  }
  ```
- **Regras**:
  - `textoClaro` e `chave` são campos obrigatórios.
  - `textoClaro` e `chave` devem ter o mesmo tamanho.
  - O tamanho máximo para `textoClaro` e `chave` é de 255 caracteres.
- **Resposta de Sucesso (200 OK)**:
  ```json
  {
    "textoCifrado": "011010110110010101111001"
  }
  ```
- **Resposta de Erro (400 Bad Request)**:
  ```json
  {
    "error": "Requisição inválida: 'textoClaro' e 'chave' devem ter o mesmo tamanho."
  }
  ```

### 2. Decifrar Texto

Este endpoint recebe um texto cifrado (em formato binário) e uma chave, e retorna o texto claro original.

- **URL**: `/decifrar`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "textoCifrado": "string",
    "chave": "string"
  }
  ```
- **Regras**:
  - `textoCifrado` e `chave` são campos obrigatórios.
  - O tamanho de `textoCifrado` (em bits) deve ser 8 vezes o tamanho da `chave`
    (em caracteres).
  - O tamanho máximo para `textoCifrado` é de 2048 bits.
- **Resposta de Sucesso (200 OK)**:
  ```json
  {
    "textoClaro": "exemplo"
  }
  ```
- **Resposta de Erro (400 Bad Request)**:
  ```json
  {
    "error": "Requisição inválida: 'textoCifrado' deve ter o tamanho correto em bits correspondente ao tamanho da 'chave'."
  }
  ```

## Estrutura do Projeto

```
/
|-- src/
|   |-- controllers/
|   |   `-- vernam.controller.ts  // Controladores que lidam com a lógica da requisição/resposta.
|   |-- routes/
|   |   `-- vernam.routes.ts      // Definição das rotas da API.
|   |-- services/
|   |   `-- vernam.services.ts    // Lógica principal da Cifra de Vernam.
|   `-- server.ts                 // Ponto de entrada da aplicação Express.
|-- package.json
|-- pnpm-lock.yaml
`-- tsconfig.json
```
