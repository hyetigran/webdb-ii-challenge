exports.up = function(knex) {
  return knex.schema.createTable("sales", table => {
    table.increments();
    table.integer("car_id").notNullable();
    table.foreign("car_id").references("car.id");
    table.text("salesPerson", 128).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
