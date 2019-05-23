const db = require("../data/dbConfig");
const Books = require("./booksModel");


describe("books model", () => {
  describe("remove()", () => {
    beforeEach(async () => {
      await db("books").truncate();
    });

    it("should remove the record", async () => {
      // first insert a record
      await Books.insert({ name: "Into the Wild" });
      const books = await db("books");
      expect(books).toHaveLength(1);

      const id = books[0].id;

      await Books.remove(id);
      const deletedbooks = await db("books");
      expect(deletedbooks).not.toHaveLength(1);
    });
  });
  describe("insert()", () => {
    beforeEach(async () => {
      await db("books").truncate();
    });

    it("should insert the provided books into the db", async () => {
      await Books.insert({ name: "The Haunting of Hill House" });
      await Books.insert({ name: "Exit West" });

      const books = await db("books"); // returns array of names
      expect(books).toHaveLength(2);
    });

    it("should insert the provided book into the db", async () => {
      let book = await Books.insert({ name: "Walden" });
      expect(book.name).toBe("Walden");

      book = await Books.insert({ name: "1000 Splendid Suns" });
      expect(book.name).toBe("1000 Splendid Suns");
    });
  });
});
