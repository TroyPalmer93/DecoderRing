const expect = require("chai").expect;
const caesar = require("../src/caesar.js");
describe("caesar", () => {
    it("should return an encrypted string", () => {
        const firstResult = caesar("Hello World!", 3);
        const secondResult = caesar("Should you attack now?", 5);
        const thirdResult = caesar("testing", 4);
        expect(firstResult).to.equal("khoor zruog!");
        expect(secondResult).to.equal("xmtzqi dtz fyyfhp stb?");
        expect(thirdResult).to.equal("xiwxmrk");
    });
    it("should return a decoded string", () =>{
        const firstResult = caesar("khoor zruog!", 3, false);
        const secondResult = caesar("xmtzqi dtz fyyfhp stb?", 5, false);
        const thirdResult = caesar("xiwxmrk", 4, false);
        expect(firstResult).to.equal("hello world!");
        expect(secondResult).to.equal("should you attack now?");
        expect(thirdResult).to.equal("testing");
    })
});