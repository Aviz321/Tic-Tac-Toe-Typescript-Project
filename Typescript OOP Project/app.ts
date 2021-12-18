alert("Enjoy the Game !"); //start game message

let board: Board = new Board();
let player: Player = new Player();
let rival: Computer = new Computer();


let arr: Array<Array<cell>> = new Array<Array<cell>>(3);

let block = 0;
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array<cell>(3);
    for (let j = 0; j < arr[i].length; j++) {
        block++;
        let a: cell = new cell(i, j, block);
        arr[i][j] = a;
    }
}
board.arr = arr;

function check() {
    let compare: cell;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j].used == true) {
                let rows: number = 0;
                let column: number = 0;
                let diagonal1: number = 0;
                let diagonal2: number = 0;
                compare = arr[i][j];

                for (let t = 0; t < arr.length; t++) {
                    for (let r = 0; r < arr[t].length; r++) {
                        if (compare.x == arr[t][r].x) {
                            if (arr[t][r].mark == compare.mark) {
                                rows++;
                            }
                            if (rows == 3) {
                                if (compare.mark == "X") {
                                    throw new Error("Congrats! you won the match"); //win message
                                }
                                if (compare.mark == "O") {
                                    throw new Error("Sorry you have lost the match, better luck next time!"); //loss message
                                    
                                }
                            }
                        }

                        if (compare.y == arr[t][r].y) {
                            if (arr[t][r].mark == compare.mark) {
                                column++;
                            }
                            if (column == 3) {
                                if (compare.mark == "X") {
                                    throw new Error("Congrats! you won the match"); //win message

                                }
                                if (compare.mark == "O") {
                                    throw new Error("Sorry you have lost the match, better luck next time!"); //loss message

                                    

                                }
                            }
                        }

                        if (compare.x == compare.y && arr[t][r].x == arr[t][r].y) {
                            if (arr[t][r].mark == compare.mark) {
                                diagonal1++;
                            }
                            if (diagonal1 == 3) {
                                if (compare.mark == "X") {

                                    throw new Error("Congrats! you won the match"); //win message

                                }
                                if (compare.mark == "O") {
                                    throw new Error("Sorry you have lost the match, better luck next time!"); //loss message

                                    

                                }
                            }
                        }

                        if (compare.x + compare.y == 2 && arr[t][r].x + arr[t][r].y == 2) {
                            if (arr[t][r].mark == compare.mark) {
                                diagonal2++;
                            }
                            if (diagonal2 == 3) {
                                if (compare.mark == "X") {
                                    throw new Error("Congrats! you won the match"); //win message

                                }
                                if (compare.mark == "O") {
                                    throw new Error("Sorry you have lost the match, better luck next time!"); //loss message

                                    

                                }
                            }
                        }

                    }
                }
            }
        }
    }
    let tie: boolean = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].used == false) {
                tie = false;
            }
        }
    }
    if (tie == true) {

        throw new Error(" it's a Tie !"); //tie message
        

    }
}

do {
    board.resetboard();
    try {
        while (1) {
            player.mark(player.play());
            board.printboard();
            check();
            rival.mark();
            board.printboard();
            check();
        }
    }
    catch (check) {
        alert(check.message);
    }
}
while (confirm("Want to try again ?")); //message for the user if he wants to play again