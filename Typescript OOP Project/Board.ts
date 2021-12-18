// this class contains the game array - arr, and a function to print the board - printboard()
class Board {
    private _arr: Array<Array<cell>>;
    set arr(v: cell[][]) {
        this._arr = v;
    }
    get arr(): cell[][] {
        return this._arr;
    }

    //printing the board Depending on the values ​​entered
    printboard() {
        let print: string = "";
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr.length; j++) {
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
    }

    //restart the board to the initial values
    resetboard() {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                arr[i][j].used = false;
                arr[i][j].mark = undefined;
            }
        }
    }
}