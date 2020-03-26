<img src="./static/omnistack.png" align="center"></img>
<h1 align="center">Semana Omnistack 11</h1>
<p align="center">Projeto <strong>Be The Hero</strong> sendo desenvolvido durante a Omnistack da Rocketseat</p>

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.16.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.16.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.13.1-informational?logo=react"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
  <a aria-label="Completo" href="https://rocketseat.com.br/week/inscricao/11.0#4">
    <img src="https://img.shields.io/badge/OmniStack-done-green?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
</p>

## Iniciando o Backend
```bash
cd backend
npm install
npm run dev
```

### Métodos da API Rest

| Método      | Estrutura           | Ação                                  | Parâmetros          | Retorno       |
| ----------- | ------------------- | ------------------------------------- | ------------------- | ------------- |
| [GET]  | `/ongs`  | Lista todas as ONGs                     | **Nenhum**          | JSON |
| [POST]    | `/ongs`      | Cadastra uma nova ONG              | Body{ name, email, whatsapp, city, uf } | JSON |
| [GET]     | `/incidents`      | Lista todos os casos cadastrados   | **Nenhum**          | JSON |
| [POST]    | `/incidents`      | Cadastra um novo caso              | Body{ title, description, value }<br>Header{Authorization:ong_id} | JSON |
| [DELETE]  | `/incidents/:id`  | Deleta um caso                     | Params{incident_id}          | JSON |
| [POST]  | `/sessions`  | Login                     | Body{ id }          | JSON |
| [GET]  | `/profile`  | Lista Casos por ONG         | Header{Authorization:ong_id}         | JSON |

## Iniciando o Frontend
```bash
cd frontend
npm install
npm start
```
Vejá mais informações sobre o [frontend/README.md](./frontend)