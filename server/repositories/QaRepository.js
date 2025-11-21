const QaItem = require("../models/QaItem");

class QaRepository {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }

  findAll() {
    return this.items;
  }

  create(name, message) {
    const item = new QaItem(this.nextId++, name, message);
    this.items.push(item);
    return item;
  }
}

module.exports = QaRepository;
