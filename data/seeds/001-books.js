exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        { name: "Wild" },
        { name: "Fight Club" },
        { name: "Atomic Habits" }
      ]);
    });
};
