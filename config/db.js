//configuração do banco de dados
const DB_URI = "mongodb+srv://123:123@teste-anotaai.t97m9.mongodb.net/teste-anotaai?retryWrites=true&w=majority";

module.exports = {
  connect: () => {
    return mongoose.createConnection(DB_URI, {
      // parametros da conexão para evitar erros de deprecated
      useNewUrlParser: true,
      useCreateIndex: true, 
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  },
};