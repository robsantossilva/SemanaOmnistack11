## Iniciando o Backend
```bash
cd backend
npm install
npm start
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