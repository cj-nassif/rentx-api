# Notas sobre a aplicação

### Instalando express
- [x] yarn add express

---

### Instalando typescript no express
- [x] yarn add @types/express -D

---

### Instalando typescript
- [x] yarn add typescript -D 

---
 
### Inicializando o typescript
- [x] yarn tsc --init

---

### Editando tsconfig.json
Descomente e edite a linha "outDir": "./dis",

---

### Configurado ESlint e Prettier seguindo passo a passo da trilha NodeJS

https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779#eaf6e8bdcabc4d809cdae302e29750da

---

### Biblioteca para o node rodar arquivo ts sem precisar converter para javascript, somente usando durante desenvolvimento
- [x] yarn add ts-node-dev -D

### Criado script no package.json 
"scripts": {
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  },

### Utilizando Debug do VS Code
Editado lanch.json conforme abaixo e adicionado --inspect no script acima.

``` js 
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}
```

### Iniciando debug clicando na seta launch program

### Adicionado biblioteca uuid e tipos

- [x] yarn add uuid
- [x] yarn add @types/uuid -D 

### DTO => Data transfer Object

---

### SOLID 

- S => SRP - Single Responsability Principle ( Princípio da responsabilidade única)

- O => OCP - Open-Closed Principle (Princípio aberto / fechado)

- L => LSP - Liskov Substitution Principle (Princípio da substituição de Liskov)

- I => ISP - Interface Segregation Principle (Princípio da segregração de interface)

- D => DIP - Dependency Inversion Principle (Princípio da Inversão de Dependência)

---

### Dicas

- Implementando Interface
  
1. Duplo clique sobre o classe
2. Atalho Ctrl + . 
3. Implement Interface

Exemplo: 

```ts 
class UserRepository implements IUsersRepository {

}
```

No exemplo, o duplo clique é dado sobre UserRepository.

---

### Multer - Biblioteca de upload de arquivos

https://www.npmjs.com/package/multer

- [x] yarn add multer
- [x] yarn add @types/multer -D   

### CSV Parse - Biblioteca para leitura de arquivos csv

https://www.npmjs.com/package/csv-parse

- [x]  yarn add csv-parse   

---

### Swagger - Ferramenta para auxiliar na documentação da API

https://swagger.io/

#### Swagger-ui-express - Ferramenta para utilizar o swagger no express

https://www.npmjs.com/package/swagger-ui-express

- [x] yarn add swagger-ui-express
- [x] yarn add @types/swagger-ui-express -D


#### Acesso documentação
- http://localhost:3333/api-docs/

Para realizar testes direto pelo swagger clique em tryout e preecha os campos de acordo.
---

### Dica - Erro tipagem importação de json

Descomentado a seguinte linha no tsconfig.json:

```ts
"resolveJsonModule": true, 
```

---

### Docker - Configuração

https://www.notion.so/Docker-e-Docker-Compose-16771f2ceefe4a05a8c29df4ca49e97a

https://www.docker.com/get-started/

#### Instalada extensão Docker no VS Code. Criador da extensão é a Microsoft.

### Imagens oficiais disponíveis dentro do Docker

https://hub.docker.com/search

### Gerando o build do projeto no Docker

#### Criado Dockerfile na raiz do projeto

- [x] sudo docker build -t rentx-nassif .

#### Inicializado o projeto no Docker

- [x] sudo docker run -p 3333:3333 rentx-nassif

### Docker Compose

- rodando docker compose

- [x] sudo docker-compose up 

- rodando docker compose em back-ground

- [x] sudo docker-compose up -d

- Visualizando logs 
  
- [x] sudo docker logs rentx-nassif -f

### Comandos Docker

- Listando os containers "em pé"
  
- [x] sudo docker ps

- Listando todos os containers 

- [x] sudo docker ps -a

- Removendo um container

- [x] sudo docker rm fc38f4dd18de (fc38f4dd18de = ID do container, também pode ser usado o nome do container. O container precisa estar parado para conseguir ser removido)

- Iniciando um container

- [x] sudo docker start fc38f4dd18de (fc38f4dd18de = ID do container)

- Parando um container
  
- [x] sudo docker stop fc38f4dd18de (fc38f4dd18de = ID do container)

### Comandos Docker compose

- Comando para subir container

- [x] sudo docker-compose up -d

- Comando para parar container

- [x] sudo docker-compose stop

- Comando para remover um container

- [x] sudo docker-compose down

- Comando para acessar máquina

- [x] sudo docker exec -it rentx-nassif /bin/bash (rentx-nassif = nome do container, poderia ser utilizado o ID também)
- [x] Ctrl + D => Comando para sair para acessado pelo comando acima  
  
- Comando para ver logs passados
  
- [x] sudo docker logs rentx-nassif (rentx-nassif = nome do container)

- Comando para ficar observando logs
  
- [x] sudo docker logs -f rentx-nassif (rentx-nassif = nome do container)

---

### Banco de dados em aplicações Node

### TypeORM

https://typeorm.io/

- Instalação de dependências
- [x] yarn add typeorm reflect-metadata
  
- Instalando driver do banco de dados (nesse projeto utilizado o PostgreSQL)
- [x] yarn add pg 

- No tsconfig.json descomentar as seguintes linhas:
```ts
  "experimentalDecorators": true,                  
  "emitDecoratorMetadata": true,   
```

Comando para ver em qual Ip está rodando o nosso container:
- [x] sudo docker exec database_ignite cat /etc/hosts 
  
---

### Instruções de refatoração do docker com typeorm

https://www.notion.so/Refatora-o-Docker-com-TypeORM-4500fc0d075349ac9b97d670e734d41b

### Migrations - Versionamento na criação de tabelas

Criando uma migration (o comando abaixo se trata da criação de uma migration de criação de categorias):
- yarn typeorm migration:create -n CreateCategories 
  
Após criado a migration surge um link no terminal que dá acesso ao arquivo que deve ser editado. Após editar esse arquivo, realizar o comando run, conforme abaixo:

Rodando migrations: 

- [x] yarn typeorm migration:run

Comando caso deseje reverter uma migration
- [x] yarn typeorm migration:revert

### TSyringe - Facilitador para injeção de dependências

https://github.com/microsoft/tsyringe
- [x] yarn add tsyringe

### Deletando specification direto do beekeeper studio

- clique na linha onde está a specification a ser deletada
- aperte o botão direito do mouse e selecione "delete row"
- no canto inferior direito clique em apply.

### Criando uma migration para deletar uma coluna da tabela

- [x] yarn typeorm migration:create -n AlterUserDeleteUsername

```ts
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeleteUsername1663756675162
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "username",
        type: "varchar",
      }),
    );
  }
}
```

Em seguida, de comando para rodar essa migration
- [x] yarn typeorm migration:run 

### Bcrypt - lidando com encriptação de senhas

- [x] yarn add bcrypt
- [x] yarn add @types/bcrypt -D

### JWT - Json Web Token : Autenticação de usuário

https://jwt.io/

- [x] yarn add jsonwebtoken
- [x] yarn add @types/jsonwebtoken -D

#### função sign() do jsonwebtoken
- Envia-se 3 parâmetros.
1. No primeiro, enviamos o payload;
2. No segundo, palavra secreta que irá auxiliar na criação do json web token. Utilizar o https://www.md5hashgenerator.com/ ou site similar para gerar um MD5 Hash que irá ser utilizado como esse segundo parâmetro.
3. O terceiro parâmetro recebe um objeto com "subject" que receberá o id do usuário e "expiresIn" que será o tempo no qual o token irá expirar. 

#### Função verify() do jsonwebtoken
- Envia-se dois parâmetros:
1. No primeiro, enviamos o token que recebemos do usúario;
2. No segundo, enviamos o MD5 hash que criamos e enviamos pela função sign(); 
---
### Deletando um usuário direto do beekeeper que não queria apagar pelo comando gráfico pelo mouse.

Criado um novo arquivo Query e colocado o seguinte comando:

```sql
delete from users where id = '7782e390-f28b-488e-bf15-79271f75bb3f'
```

---

### Express-async-error - Lib para o express lidar com erros

- [x] yarn add express-async-errors

### Função stat e unlink

```ts
try {
    await fs.promises.stat(filename); // stat verifica se o arquivo existe
  } catch {
    return;
  }
  await fs.promises.unlink(filename); // unlink remove o arquivo de acordo com o filename que for passado
  ```

### Desafios Chapter III

- Instruções Desafio 1
https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45

- Template Desafio 1
https://github.com/rocketseat-education/ignite-template-database-queries

- Como usar um template no github
https://www.notion.so/FAQ-Desafios-ddd8fcdf2339436a816a0d9e45767664

- Criando database do desafio: 
- [x] sudo docker run --name ignite-challenge-database-queries -e POSTGRES_DB=queries_challenge -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

Antes desse comando foi necessário parar o database do rentx pois estavam configurados para a mesma porta.

- Artigo para ajudar na resolução do desafio
https://www.webdevdrops.com/nodejs-banco-de-dados-orm-query-builder-driver-nativo/
https://stackoverflow.com/questions/64060713/how-to-join-a-table-in-typeorm-with-innerjoinandselect-service


## Chapter IV

### Testes unitários

- Testa as regras de negócios. Teste em pequenas partes da aplicação como o useCase de criação de usuário.

### Testes de integração

- Testa todo o fluxo da aplicação:

-> routes -> controllers -> useCases -> repository

<- repository <- useCases <- controllers <- routes

### TDD - Test Driven Development

- Metodologia utilizada para fazer testes em que o desenvolvimento é direcionado pelos testes. O teste vêm primeiro.

### Jest - Lib para testes

https://jestjs.io/docs/getting-started

- [x] yarn add jest @types/jest -D

- [x] yarn jest --init

- Perguntas de configuração do jest:

 Would you like to use Jest when running "test" script in "package.json"? … yes

✔ Would you like to use Typescript for the configuration file? … yes

✔ Choose the test environment that will be used for testing › node

✔ Do you want Jest to add coverage reports? … no

✔ Which provider should be used to instrument code for coverage? › v8

✔ Automatically clear mock calls, instances, contexts and results before every test? … yes

### Preset instalado junto com o jest

- [x] yarn add ts-jest -D

- editar descomentando as seguintes linha do jest.config.ts :
  
  ```ts
  preset: "ts-jest",
  ``` 

  ```ts
  testMatch: ["**/*.spec.ts"],
  ```

  ```ts
  bail: true,
  ```

### Exemplo de teste

```ts
describe("Criar categoria", () => {
  it("Espero que 2 + 2 seja 4", () => {
    const soma = 2 + 2;
    const resultado = 5;

    expect(soma).toBe(resultado);
  });
});
```

### Reload VS Code

1. Ctrl + shift + P
2. Pesquisar Reload windown

### Lidando com paths configurados no tsconfig
  
- [x] yarn add tsconfig-paths -D
1. Editado scripts do package.json

```ts
"scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts",
    "typeorm": "ts-node-dev -r tsconfig-paths/register ./node_modules/typeorm/cli",
    "test": "jest"
  },
```

### Tabelas de relacionamentos

Uma tabela que trás dados de duas tabelas que se relacionam.

Normalmente utilizamos o nome da tabela de relacionamento a junção do nome de duas tabelas. Ex: Nome da tabela em que as tabelas cars e specification se relacionam seria specification_cars.

