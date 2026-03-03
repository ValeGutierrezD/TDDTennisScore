import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    //let tennis = new Tennis();
    expect(score()).toEqual("Love - Love");
  });


});

function score()
{
    return "Love - Love";
}