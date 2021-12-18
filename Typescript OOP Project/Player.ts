class Player extends Errors {
    

    private sign: string = "X"; //the sign that simbols the player

    play(): number {
        let choice: number = +prompt("| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |");
   
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

            
        }
        while (choice < 0 || choice > 9 || isNaN(+choice) || choice % 1 != 0 || choice==0)   //this filters the correct values for choice
        return choice;
    }

    //this function filters the nummber the player selected and entering it in to the cells

    mark(choice: number) {
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
                    this.mark(this.play())
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
    }


}