class Tennis {
    constructor() {
        this.player1Points = 0;
    }
    score() {
        let player1Score = "Love";
        if (this.player1Points == 1) {
            player1Score = "15";
        }
        return player1Score + " - Love";
    }
}

export default Tennis;