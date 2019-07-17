exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table
      .text("VIN", 128)
      .unique()
      .notNullable();
    table.text("make", 128).notNullable();
    table.text("model", 128).notNullable();
    table.integer("mileage").notNullable();
    table.text("transmission", 128);
    table.text("title", 128);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
