class board{

    constructor(){
        this.grid = [
           [" "," "," "],
           [" "," "," "],
           [" "," "," "],
        ]
    }
    printBoard(){
            for(let i =0;i<3;i++){
                console.log(" "+ this.grid[i][0]+"|"+this.grid[i][1]+"|"+this.grid[i][2]);
                if(i<2){
                    console.log("---+---+---");
                }
            }
    }
}

class player{
    constructor(symbol){
        this.symbol = symbol
    }
}

class game {
    constructor(){
        this.board = new board();
        this.playerX = new player("X")
        this.playerO = new player("O")
        this.currplayer = this.playerX
    }
}