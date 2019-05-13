## CRUD com Express e MySQL

Com o MySQL pronto para uso você pode realizar testes da API "CRUD_Express_MySQL" no [Postman](https://www.getpostman.com/downloads/) fazendo requisições HTTP nos URLs com os seguintes métodos:

Start no server: ``$ Node server.js``
<br>

**URL** : localhost:3000/posts <br>

Método **GET** : Listar posts<br>
Método **POST** : Inserir post, use __body__ em  __x-www-form-urlencoded__ com os dados, ex:<br>

Key  | Value
------------- | -------------
id  | 1
title  | "Titulo do post" 
body  | "Corpo do post, insira..." 
<br>

**URL** : localhost:3000/posts/id

Método **GET** : Ler 1 post<br>
Método **DELETE** : Deletar 1 post, apenas troque /id para o número do id cadastrado<br>
Método **PUT** : Alterar 1 post, use __body__ em  __x-www-form-urlencoded__ com os dados, ex:

Key  | Value
------------- | -------------
id  | 1
title  | "Titulo do post" 
body  | "Corpo do post, insira..." 
