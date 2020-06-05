const mysql = require("./database/mysql").pool;
const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

/**
 * Criando novo Requerimento
 */
routes.post("/create", multer(multerConfig).single("file"), (req, res) => {
  const { matricula, curso, dia_ausente, observacoes } = req.body;
  const file = req.file.path;
  mysql.getConnection((error, conn) => {
    conn.query(
      `INSERT INTO segundaChamada (matricula, curso, dia_ausente, observacoes, file)
      VALUES ('${matricula}', '${curso}', '${dia_ausente}', '${observacoes}', '${file}')`,
      (error, resultado, field) => {
        conn.release();
        if (error) {
          res.status(500).send({ error: error });
        }
        const response = {
          mensagem: "Requerimento encaminhado com sucesso!",
          RequerimentoCriado: {
            Matrícula: matricula,
            Cursando: curso,
            Comentários: observacoes,
            DataPerdida: dia_ausente,
            Comprovação: file,
          },
        };
        console.log(response);
        return res.status(201).send(response);
      }
    );
  });
});
/**
 * Listando todos os Requerimentos
 */
routes.get("/list", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query("SELECT * FROM segundaChamada;", (error, resultado, fields) => {
      conn.release();
      if (error) {
        return res.status(500).send({ error: error });
      }
      return res.status(200).send({ response: resultado });
    });
  });
});
/**
 * Deletar um requerimento
 */
routes.delete("/:matricula", (req, res, next) => {
  console.log(req.params.matricula);

  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      `DELETE FROM segundaChamada WHERE matricula = '${req.params.matricula}';`,
      (error, resultado, fields) => {
        conn.release();
        if (error) {
          return res.status(500).send({ error: error });
        }
        res.status(202).send({ mensagem: "Requerimento deletado com sucesso" });
      }
    );
  });
});
/**
 * Update de um Requerimento
 */
routes.put("/:id", multer(multerConfig).single("file"), (req, res, next) => {
  const { matricula, curso, dia_ausente, observacoes } = req.body;
  const file = req.file.filename;
  const id = req.params.id;
  console.log(id);
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({ error: error });
    }
    conn.query(
      `UPDATE segundaChamada SET matricula = '${matricula}', curso = '${curso}', dia_ausente = '${dia_ausente}', observacoes = '${observacoes}', file = '${file}' WHERE id = ${id};`,
      (error, resultado, fields) => {
        conn.release();
        if (error) {
          return res.status(500).send({ error: error });
        }
        res.status(202).send({ mensagem: "Requerimento alterado com sucesso" });
      }
    );
  });
});

module.exports = routes;
