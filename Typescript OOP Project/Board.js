// this class contains the game array - arr, and a function to print the board - printboard()
var Board = /** @class */ (function () {
    function Board() {
    }
    Object.defineProperty(Board.prototype, "arr", {
        get: function () {
            return this._arr;
        },
        set: function (v) {
            this._arr = v;
        },
        enumerable: false,
        configurable: true
    });
    //printing the board Depending on the values ​​entered
    Board.prototype.printboard = function () {
        var print = "";
        for (var i = 0; i < this.arr.length; i++) {
            for (var j = 0; j < this.arr.length; j++) {
                if (typeof this.arr[i][j].mark == "undefined") {
                    print += "| " + this.arr[i][j].num + " | ";
                }
                else {
                    print += "| " + this.arr[i][j].mark + " | ";
                }
            }
            print += "\n";
        }
        alert(print);
    };
    //restart the board to the initial values
    Board.prototype.resetboard = function () {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                arr[i][j].used = false;
                arr[i][j].mark = undefined;
            }
        }
    };
    return Board;
}());
//# sourceMappingURL=Board.js.map