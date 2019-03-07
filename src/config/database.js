const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(
  'mongodb+srv://admin:hj123456@slnews-4eufq.mongodb.net/SLNews?retryWrites=true',
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log('Conectado no banco com sucesso.');
    } else {
      console.log('Erro ao conectar: ' + err);
    }
  }
);

// mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório. ";
// mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
// mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'. ";

// const MongoClient = require('mongodb').MongoClient;
// const uri =
//   'mongodb+srv://hudson:<password>@slnews-4eufq.mongodb.net/test?retryWrites=true';
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });
