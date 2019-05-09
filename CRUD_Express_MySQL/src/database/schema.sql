CREATE DATABASE teste;

USE teste;

CREATE TABLE posts (
    id              INT(11)           NOT NULL PRIMARY KEY,
    title           TEXT              NOT NULL,
    body            LONGTEXT		  NOT NULL
)