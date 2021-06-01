# CINEBR_BACK.js
Projeto de api em Node.js, com Framework Adonis.js

O AdonisJs vem pré-configurado com:

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Executando o Projeto

### 1 - Clone o reposotório 

```bash
git clone git clone https://github.com/CarolineBarbosaM/CINEBR_BACK.git

```

### 2 - Instale a Dependências: 

```bash
npm install
```

### 3 - Adicione as configurações de acesso ao DB no .env
```
############## DATABASE ################

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=11111111
DB_DATABASE=teste
```

### 4 -  Migrations

Para inicialização da migration, segue o seguinte comando:

```js
adonis migration:run
```

### 5 - Execute o projeto

```bash
adonis serve --dev
```

E acesse o endereço: [localhost:3333](http://localhost:3333/)


### Variáveis de Ambiente (arquivo: ROOT_FOLDER > /.env)

```
HOST=localhost
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=

############## DATABASE ################

DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=

############## HASH ################
HASH_DRIVER=

```

