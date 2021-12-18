class Computer  {
    private sign: string = "O"; //the sign that simbols the computer

    win(): cell {
        let compare: cell;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j].used == false) {
                    let rows: number = 0;

                    let column: number = 0;

                    let diagonal1: number = 0;

                    let diaginal2: number = 0;

                    compare = arr[i][j];

                    for (let t = 0; t < arr.length; t++) {
                        for (let r = 0; r < arr.length; r++) {
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
    }

    block(): cell {
        let compare: cell;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {

                if (arr[i][j].used == false) {
                    let rows: number = 0;
                    let column: number = 0;
                    let diagonal1: number = 0;
                    let diaginal2: number = 0;
                    compare = arr[i][j];



                    for (let t = 0; t < arr.length; t++) {
                        for (let r = 0; r < arr.length; r++) {
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
    }

    random(): cell {
        let rand: number = Math.round(Math.random() * 8) + 1;
      
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j].num == rand && arr[i][j].used == false) {
                    return arr[i][j];
                }
            }
        }
        this.random();
    }

    mark() {

        let chosen: cell = this.win();
        if (chosen != undefined) {
            chosen.mark = this.sign;
            chosen.used = true;
        }
        else { this.mark() }

    }

}