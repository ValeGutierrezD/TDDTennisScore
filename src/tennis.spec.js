import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love");
  });
  
  //Jugador 1 anota 1 vez jugador 2 en 0=> "15 - Love"
  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("15 - Love"); //Vericar    ->ASSERT
  });

  //Jugador 1 anota 2 veces jugador 2 en 0=> "30 - Love"
  it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("30 - Love"); //Vericar    ->ASSERT
  });

  //Jugador 1 anota 3 veces jugador 2 en 0=> "40 - Love"
  it("jugador 1 anota 3 veces jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    tennis.player1Scores();      //inicializar
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("40 - Love"); //Vericar    ->ASSERT
  });

  //Jugador 1 anota 4 veces jugador 2 en 0=> "Game for player 1"
  it("jugador 1 anota 4 veces jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    tennis.player1Scores();      //inicializar
    tennis.player1Scores();      //inicializar
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("Game for player 1"); //Vericar    ->ASSERT
  });

  //Jugador 2 anota 1 vez jugador 1 en 0 => "Love - 15"
  it("jugador 2 anota jugador uno en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player2Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("Love - 15"); //Vericar    ->ASSERT
  });

  //Jugador 2 anota 2 veces jugador 1 en 0 => "Love - 30"
  it("jugador 2 anota 2 veces jugador uno en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player2Scores();      //inicializar
    tennis.player2Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("Love - 30"); //Vericar    ->ASSERT
  });

  //Jugador 2 anota 3 veces jugador 1 en 0 => "Love - 40"
  it("jugador 2 anota 3 veces jugador uno en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player2Scores();      //inicializar
    tennis.player2Scores();      //inicializar
    tennis.player2Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("Love - 40"); //Vericar    ->ASSERT
  });

  //Jugador 2 anota 4 veces jugador 1 en 0 => "Game for player 2"
  it("jugador 2 anota 4 veces jugador uno en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player2Scores();      //inicializar
    tennis.player2Scores();      //inicializar
    tennis.player2Scores();      //inicializar
    tennis.player2Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("Game for player 2"); //Vericar    ->ASSERT
  });

  //Jugador 1 anota 3 veces jugador 2 anota 3 veces=> "Deuce"
  it("jugador 1 anota 3 veces jugador 2 anota 3 veces", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    tennis.player1Scores();      //inicializar
    tennis.player1Scores();      //inicializar
    tennis.player2Scores();      //inicializar
    tennis.player2Scores();      //inicializar
    tennis.player2Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("Deuce"); //Vericar    ->ASSERT
  });



});
