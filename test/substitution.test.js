// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution.js");
describe("substitution", () => {
  it("should return an encrypted string", () => {
    const firstResult = substitution("hello there, son","phqgiumeaylnofdxjkrcvstzwb");
    const secondResult = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
//    const thirdResult = substitution("you are an excellent spy","xoyqmcgrukswaflnthdjpzibev");

    expect(firstResult).to.equal("einnd ceiki, rdf");
    expect(secondResult).to.equal("y&ii$r&");
//    expect(thirdResult).to.equal("elp xhm xf mbymwwmfj dne");
  });
  it("should return a decoded string", () => {
    // const firstResult = substitution(
    //   "jrufscpw",
    //   "xoyqmcgrukswaflnthdjpzibev",
    //   false
    // );
    const secondResult = substitution(
      "y&ii$r&",
      "$wae&zrdxtfcygvuhbijnokmpl",
      false
    );
    const thirdResult = substitution(
      "pvn $b& $g &ma&cc&gj iup",
      "$wae&zrdxtfcygvuhbijnokmpl",
      false
    );
//    expect(firstResult).to.equal("thinkful");
    expect(secondResult).to.equal("message");
    expect(thirdResult).to.equal("you are an excellent spy");
  });
});

// describe("polybius", () => {
//     it("should return an encrypted string", () => {
//         const firstResult = polybius("thinkful");
//         const secondResult = polybius("should you attack now");
//         const thirdResult = polybius("testing");

//         expect(firstResult).to.equal("4432423352125413");
//         expect(secondResult).to.equal("343243541341 454354 114444113152 334325");
//         expect(thirdResult).to.equal("44513444423322");
//     });
//     it("should return a decoded string", () =>{
//         const secondResult = polybius("343243541341 454354 114444113152 334325", false);
//         const thirdResult = polybius("44513444423322", false);
//         expect(secondResult).to.equal("should you attack now");
//         expect(thirdResult).to.equal("testi/jng");
//     })
// });
