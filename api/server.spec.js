const request = require("supertest");

const server = require("./server");

describe("server", () => {
  // this test helps make sure you're working in the right testing environment
  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("endpoints", () => {
    describe("GET/ endpoint", () => {
      //test for res.status
      it("should return 200 ok using async/await THE SQUAD", async () => {
        const res = await request(server).get("/");
        expect(res.status).toBe(200);
      });

      //test for res.type JSON
      it("should return JSON", async () => {
        const res = await request(server).get("/");
        expect(res.type).toBe("application/json");
      });

        //test for res.body
      it('should return {api: "up"}', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({api: "up"});
      })

      
    });
  });
});