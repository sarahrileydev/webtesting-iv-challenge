const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(book) {
  const [id] = await db("books").insert(book, "id");

  return db("books")
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('books')
    .where({ id })
    .del();
}

function getAll() {
  return db("books");
}

function findById(id) {
  return null;
}