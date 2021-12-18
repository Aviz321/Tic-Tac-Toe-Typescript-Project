var Computer = /** @class */ (function () {
    function Computer() {
        this.sign = "O"; //the sign that simbols the computer
    }
    Computer.prototype.win = function () {
        var compare;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j].used == false) {
                    var rows = 0;
                    var column = 0;
                    var diagonal1 = 0;
                    var diaginal2 = 0;
                    compare = arr[i][j];
                    for (var t = 0; t < arr.length; t++) {
                        for (var r = 0; r < arr.length; r++) {
                            if (arr[t][r].x == compare.x) {
                                if (arr[t][r].mark == this.sign) {
                                    rows++;
                                    if (rows > 1) {
                                        return compare;
                                    }
                                }
                            }
                            if (arr[t][r].y == compare.y) {
                                if (arr[t][r].mark == this.sign) {
                                    column++;
                                    if (column > 1) {
                                        return compare;
                                    }
                                }
                            }
                            if (compare.x == compare.y && arr[t][r].x == arr[t][r].y) {
                                if (arr[t][r].mark == this.sign) {
                                    diagonal1++;
                                    if (diagonal1 > 1) {
                                        return compare;
                                    }
                                }
                            }
                            if (compare.x + compare.y == 2 && arr[t][r].x + arr[t][r].y == 2) {
                                if (arr[t][r].mark == this.sign) {
                                    diaginal2++;
                                    if (diaginal2 > 1) {
                                        return compare;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        compare = this.block();
        return compare;
    };
    Computer.prototype.block = function () {
        var compare;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j].used == false) {
                    var rows = 0;
                    var column = 0;
                    var diagonal1 = 0;
                    var diaginal2 = 0;
                    compare = arr[i][j];
                    for (var t = 0; t < arr.length; t++) {
                        for (var r = 0; r < arr.length; r++) {
                            if (arr[t][r].x == compare.x) {
                                if (arr[t][r].used == true && arr[t][r].mark != this.sign) {
                                    rows++;
                                    if (rows > 1) {
                                        return compare;
                                    }
                                }
                            }
                            if (arr[t][r].y == compare.y) {
                                if (arr[t][r].used == true && arr[t][r].mark != this.sign) {
                                    column++;
                                    if (column > 1) {
                                        return compare;
                                    }
                                }
                            }
                            if (compare.x == compare.y && arr[t][r].x == arr[t][r].y) {
                                if (arr[t][r].used == true && arr[t][r].mark != this.sign) {
                                    diagonal1++;
                                    if (diagonal1 > 1) {
                                        return compare;
                                    }
                                }
                            }
                            if (compare.x + compare.y == 2 && arr[t][r].x + arr[t][r].y == 2) {
                                if (arr[t][r].used == true && arr[t][r].mark != this.sign) {
                                    diaginal2++;
                                    if (diaginal2 > 1) {
                                        return compare;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        compare = this.random();
        return compare;
    };
    Computer.prototype.random = function () {
        var rand = Math.round(Math.random() * 8) + 1;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j].num == rand && arr[i][j].used == false) {
                    return arr[i][j];
                }
            }
        }
        this.random();
    };
    Computer.prototype.mark = function () {
        var chosen = this.win();
        if (chosen != undefined) {
            chosen.mark = this.sign;
            chosen.used = true;
        }
        else {
            this.mark();
        }
    };
    return Computer;
}());
//# sourceMappingURL=Computer.js.map