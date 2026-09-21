# Atividade API - GET e POST

Projeto desenvolvido por Pedro Henrique e Daniel Silva Marques para a atividade de criação e publicação de uma API.

A API foi desenvolvida utilizando **Node.js**, **Supabase** como banco de dados e **Vercel** para execução e publicação.

## Funcionalidades

A API possui dois métodos principais:

- **GET** - consulta os alunos cadastrados no banco de dados.
- **POST** - cadastra um novo aluno no banco de dados.

Os dois métodos utilizam a mesma tabela `alunos` no Supabase.

---

## Tecnologias utilizadas

- Node.js
- JavaScript
- Supabase
- Vercel
- Git/GitHub

---

## Instalação

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Depois, entrar na pasta do projeto:

```bash
cd repositorio_atividade_api
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Instalar a Vercel CLI

Caso ainda não esteja instalada:

```bash
npm install -g vercel
```

---

## Configuração das variáveis de ambiente

Para que o projeto consiga se conectar ao banco de dados do Supabase, é necessário configurar as variáveis de ambiente.

Por segurança, as credenciais do banco de dados não estão armazenadas neste repositório.

**As credenciais necessárias serão fornecidas separadamente para o instrutor.**

### 1. Criar o arquivo `.env.local`

Na pasta principal do projeto, crie um arquivo chamado:

```text
.env.local
```

O arquivo deve ficar no mesmo local do `package.json`, conforme o exemplo:

```text
repositorio_atividade_api/
│
├── api/
│   └── alunos.js
│
├── .env.local
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### 2. Configurar as credenciais

Dentro do arquivo `.env.local`, adicione:

```env
SUPABASE_URL=COLE_AQUI_A_URL
SUPABASE_KEY=COLE_AQUI_A_CHAVE
```

Substitua `COLE_AQUI_A_URL` e `COLE_AQUI_A_CHAVE` pelas credenciais fornecidas separadamente.

Exemplo da estrutura:

```env
SUPABASE_URL=https://xxxxxxxx.supabase.co
SUPABASE_KEY=xxxxxxxxxxxxxxxx
```

> **Importante:** não é necessário criar um arquivo `.env`. Para executar este projeto localmente, utilize o `.env.local`.

---

## Executando o projeto

Após instalar as dependências e configurar o `.env.local`, execute no terminal:

```bash
vercel dev
```

Caso seja solicitado, faça login na Vercel e vincule o projeto.

Após iniciar, a API normalmente estará disponível em:

```text
http://localhost:3000
```

---

## Testando o GET

Acesse:

```text
http://localhost:3000/api/alunos
```

O GET retorna os alunos cadastrados na tabela `alunos`.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "João",
    "email": "joao@email.com",
    "curso": "Desenvolvimento de Sistemas"
  }
]
```

---

## Testando o POST

O POST pode ser testado utilizando Postman, Thunder Client ou outro cliente HTTP.

### Método

```text
POST
```

### Endpoint

```text
http://localhost:3000/api/alunos
```

### Body (JSON)

```json
{
  "nome": "Aluno Teste",
  "email": "aluno@teste.com",
  "curso": "Desenvolvimento de Sistemas"
}
```

O registro será inserido na mesma tabela `alunos` utilizada pelo GET.

Após realizar o POST, é possível acessar novamente o endpoint GET para verificar se o novo registro foi cadastrado.

---

## API publicada

A API também está publicada na Vercel.

### GET

```text
https://repositorio-atividade-api.vercel.app/api/alunos
```

O endpoint acima pode ser aberto diretamente no navegador para testar o método GET.

Para testar o POST publicado, utilize o mesmo endereço no Postman ou Thunder Client, alterando o método para `POST` e enviando um JSON no corpo da requisição.

---

## Estrutura do projeto

```text
repositorio_atividade_api/
│
├── api/
│   └── alunos.js
│
├── .env.local
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

> O arquivo `.env.local` deve ser criado manualmente após clonar o projeto e não estará disponível no GitHub.

---

## Observação

Os arquivos `.env` e `.env.local` estão incluídos no `.gitignore` e, portanto, não são enviados ao GitHub, pois podem conter credenciais de acesso ao banco de dados.

As credenciais necessárias para preencher o `.env.local` serão fornecidas ao professor separadamente.
