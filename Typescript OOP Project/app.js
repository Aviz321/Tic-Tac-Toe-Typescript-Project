alert("Enjoy the Game !"); //start game message
var board = new Board();
var player = new Player();
var rival = new Computer();
var arr = new Array(3);
var block = 0;
for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(3);
    for (var j = 0; j < arr[i].length; j++) {
        block++;
        var a = new cell(i, j, block);
        arr[i][j] = a;
    }
}
board.arr = arr;
function check() {
    var compare;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j].used == true) {
                var rows = 0;
                var column = 0;
                var diagonal1 = 0;
                var diagonal2 = 0;
                compare = arr[i][j];
                for (var t = 0; t < arr.length; t++) {
                    for (var r = 0; r < arr[t].length; r++) {
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
    var tie = true;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
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
} while (confirm("Want to try again ?")); //message for the user if he wants to play again
//# sourceMappingURL=app.js.map