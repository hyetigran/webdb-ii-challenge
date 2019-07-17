const db = require("./database.db3");

module.exports = {
  get() {
    return db("cars");
  },

  async update(id, data) {
    const count = await db("cars")
      .where("id", id)
      .update(data);
    return count > 0 ? this.get(id) : null;
  },

  async remove(id) {
    const count = await db("cars")
      .where("id", id)
      .del();
    return count;
  }
};
