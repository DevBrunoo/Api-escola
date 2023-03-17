const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rotas
app.use('/api', routes);

// Conexão com o banco de dados
// ...

// Configuração do servidor HTTP
app.listen(port, () => {
  logger.info(`Servidor iniciado na porta ${port}`);
});
