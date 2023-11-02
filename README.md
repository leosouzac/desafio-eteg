# desafio-eteg

## Para rodar o desafio utiliz:

docker compose up

## Crie o arquivo .env baseado no .env.example

# Entre no container da api e inicie a api

docker exec -it desafio-eteg-api-1 bash

entre na pasta do app: cd ../api

npm run dev

## Entre no container da app e inicie o app

docker exec -it desafio-eteg-app-1 bash

entre na pasta do app: cd ../app

npm run dev

## Para rodar os testes

npm run test

## Documentação

http://localhost:3333/documentation
