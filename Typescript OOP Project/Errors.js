var Errors = /** @class */ (function () {
    function Errors() {
    }
    Errors.prototype.NaN = function () {
        return alert("You Need To Insert Numbers Only !"); //error for not choosing number
    };
    Errors.prototype.Int = function () {
        return alert("You need to enter an integer number"); //error for entering a float number
    };
    Errors.prototype.Range = function () {
        return alert("You Need To Insert Numbers Between 1-9 Only !"); //error for entering number at wrong range
    };
    Errors.prototype.Cell = function () {
        return alert("This cell is occupied, Please select another number"); //error for picking an occupied cell
    };
    Errors.prototype.Empty = function () {
        return alert("You didnt chose a number, Try again"); //error for empty prompt
    };
    return Errors;
}());
//# sourceMappingURL=Errors.js.map