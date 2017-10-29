const JsonDB = require('node-json-db');

class Database {
  constructor() {
    this._db = new JsonDB('db', true, false);
  }

  get(path) {
    return this._db.getData(path);
  }

  push(path, data) {
    this._db.push(path, data);
  }

  del(path) {
    this._db.delete(path);
  }
}

module.exports = Database;