// This class contains number,X,Y,mark,used and no functions
var cell = /** @class */ (function () {
    function cell(x, y, num) {
        this._used = false;
        this._X = x;
        this._Y = y;
        this._num = num;
    }
    Object.defineProperty(cell.prototype, "x", {
        get: function () {
            return this._X;
        },
        set: function (v) {
            if (v >= 0 && v <= 2) {
                this._X = v;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(cell.prototype, "y", {
        get: function () {
            return this._Y;
        },
        set: function (v) {
            if (v >= 0 && v <= 2) {
                this._Y = v;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(cell.prototype, "mark", {
        get: function () {
            return this._mark;
        },
        set: function (v) {
            this._mark = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(cell.prototype, "used", {
        get: function () {
            return this._used;
        },
        set: function (v) {
            this._used = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(cell.prototype, "num", {
        get: function () {
            return this._num;
        },
        set: function (v) {
            if (v >= 1 && v <= 9) {
                this._num = v;
            }
        },
        enumerable: false,
        configurable: true
    });
    return cell;
}());
//# sourceMappingURL=Cell.js.map