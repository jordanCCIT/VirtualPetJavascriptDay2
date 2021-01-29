/*
name*
hunger*
boredom

feed*
play

*/
let underTest;
beforeEach(() => {
  underTest = new VirtualPet("Freddy");
});

describe("Virtual Pets have a name", () => {
  describe("Constructing virtual pet name is successful", () => {
    it("Virtual pet name is Freddy", () => {
      // arrangement / action

      //assertion
      expect(underTest.name).toBe("Freddy");
    });
    it("Virtual pet name is Fido", () => {
      //arrangement / action
      underTest._name = "Fido";
      //assertion
      expect(underTest.name).toBe("Fido");
    });
  });
});

describe("Virtual pet has hunger", () => {
  describe("Virtual pet makes hunger", () => {
    it("Virtual pet hunger is 50", () => {
      //arrange / action
      //assertion
      expect(underTest.hunger).toBe(50);
    });
  });
  describe("Virtual pet can feed", () => {
    it("Virtual pet hunger is 40 after being fed", () => {
      //Arrangement
      //action
      underTest.feed();
      //assertion
      expect(underTest.hunger).toBe(40);
    });
  });
});
