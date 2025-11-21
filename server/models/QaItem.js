class QaItem {
  constructor(id, name, message, createdAt = new Date()) {
    this.id = id;
    this.name = name;
    this.message = message;
    this.createdAt = createdAt;
  }
}

module.exports = QaItem;
