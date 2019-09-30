const pg = require('pg');

const UsersPostgresSchema = new pg.Schema({
  /*
    Elementos e propriedades do usuario Postgre
  */
  id_usuario: {
    type: BigInt,
    require: true,
  },
  nm_usuario: {
    type: String,
    require: true,
  },
  cs_situacao_usuario: {
    type: Boolean,
    require: true,
  },
  cs_usuario: {
    type: Smallint,
    require: true,
  },
  in_tercerizado: {
    type: Boolean,
    require: true,
  },
  nm_login: {
    type: String,
    require: true,
  },
  te_senha: {
    type: string,
    require: true,
  },
  nm_empresa: {
    type: String,
    require: true,
  },
  in_primeiro_acesso: {
    type: Smallint,
    require: true,
  },
 version_id: {
    type: BigInt,
    require: true,
  },
});

pg.model('UserPostgres', UsersPostgresSchema);
