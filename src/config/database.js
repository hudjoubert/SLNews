const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
module.exports = mongoose.connect(
  'mongodb://localhost/slnews',
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log('Conectado no banco com sucesso.');
    } else {
      console.log('Erro ao conectar: ' + err);
      console.log('Erro ao conectar: ' + err.code);
      console.log('Erro ao conectar: ' + err.errmsg);
      console.log('Erro ao conectar: ' + err.name);
      console.log('Erro ao conectar: ' + err.stack);
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
