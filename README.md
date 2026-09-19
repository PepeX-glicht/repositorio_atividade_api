# Atividade API - GET e POST

Projeto desenvolvido para a atividade de criação e publicação de uma API.

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

## Variáveis de ambiente

A aplicação utiliza as seguintes variáveis:

```env
SUPABASE_URL=
SUPABASE_KEY=
```

Por segurança, os valores reais não estão armazenados no GitHub.

Para executar o projeto conectado ao banco de dados, essas variáveis precisam estar configuradas no ambiente.

---

## Executando o projeto

No terminal, execute:

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

---

## API publicada

A API também está publicada na Vercel.

### GET

```text
https://repositorio-atividade-api.vercel.app/api/alunos
```

O endpoint acima pode ser aberto diretamente no navegador para testar o método GET.

Para testar o POST publicado, utilize o mesmo caminho no Postman ou Thunder Client, alterando o método para `POST`.

---

## Estrutura do projeto

```text
repositorio_atividade_api/
│
├── api/
│   └── alunos.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Observação

Os arquivos `.env` e `.env.local` não são enviados ao GitHub, pois podem conter credenciais de acesso ao banco de dados.