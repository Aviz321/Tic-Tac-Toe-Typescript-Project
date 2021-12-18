var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sign = "X"; //the sign that simbols the player
        return _this;
    }
    Player.prototype.play = function () {
        var choice = +prompt("| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |");
        do {
            //the default number of "choice" is 0 Even if you don't enter a value
            if (choice == 0) {
                choice = null;
                Errors[this.Empty()]; //error for empty prompt
                choice = +prompt("| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |");
            }
            else if (isNaN(+choice)) {
                Errors[this.NaN()]; //error for not choosing number
                choice = +prompt("| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |");
            }
            else if (choice < 0 || choice > 9) {
                Errors[this.Range()]; //error for entering number at wrong range
                choice = +prompt("| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |");
            }
            else if (choice % 1 != 0) {
                Errors[this.Int()]; //error for entering a float number
                choice = +prompt("| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |");
            }
        } while (choice < 0 || choice > 9 || isNaN(+choice) || choice % 1 != 0 || choice == 0); //this filters the correct values for choice
        return choice;
    };
    //this function filters the nummber the player selected and entering it in to the cells
    Player.prototype.mark = function (choice) {
        switch (choice) {
            case 1:
                if (arr[0][0].used == true) {
                    Errors[this.Cell()]; //error for occupied cell
                    this.mark(this.play());
                }
                else {
                    arr[0][0].mark = this.sign;
                    arr[0][0].used = true;
                }
                break;
            case 2:
                if (arr[0][1].used == true) {
                    Errors[this.Cell()];
                    this.mark(this.play());
                }
                else {
                    arr[0][1].mark = this.sign;
                    arr[0][1].used = true;
                }
                break;
            case 3:
                if (arr[0][2].used == true) {
                    Errors[this.Cell()];
                    this.mark(this.play());
                }
                else {
                    arr[0][2].mark = this.sign;
                    arr[0][2].used = true;
                }
                break;
            case 4:
                if (arr[1][0].used == true) {
                    Errors[this.Cell()];
                    this.mark(this.play());
                }
                else {
                    arr[1][0].mark = this.sign;
                    arr[1][0].used = true;
                }
                break;
            case 5:
                if (arr[1][1].used == true) {
                    Errors[this.Cell()];
                    this.mark(this.play());
                }
                else {
                    arr[1][1].mark = this.sign;
                    arr[1][1].used = true;
                }
                break;
            case 6:
                if (arr[1][2].used == true) {
                    Errors[this.Cell()];
                    this.mark(this.play());
                }
                else {
                    arr[1][2].mark = this.sign;
                    arr[1][2].used = true;
                }
                break;
            case 7:
                if (arr[2][0].used == true) {
                    Errors[this.Cell()];
                    this.mark(this.play());
                }
                else {
                    arr[2][0].mark = this.sign;
                    arr[2][0].used = true;
                }
                break;
            case 8:
                if (arr[2][1].used == true) {
                    Errors[this.Cell()];
                    this.mark(this.play());
                }
                else {
                    arr[2][1].mark = this.sign;
                    arr[2][1].used = true;
                }
                break;
            case 9:
                if (arr[2][2].used == true) {
                    Errors[this.Cell()];
                    this.mark(this.play());
                }
                else {
                    arr[2][2].mark = this.sign;
                    arr[2][2].used = true;
                }
                break;
        }
    };
    return Player;
}(Errors));
//# sourceMappingURL=Player.js.map