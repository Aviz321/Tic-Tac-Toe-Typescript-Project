class Errors {

    NaN(): any {

        return alert("You Need To Insert Numbers Only !"); //error for not choosing number

    }

    Int(): any {

        return alert("You need to enter an integer number"); //error for entering a float number

    }

    Range(): any {

        return alert("You Need To Insert Numbers Between 1-9 Only !"); //error for entering number at wrong range

    }

    Cell(): any {

        return alert("This cell is occupied, Please select another number"); //error for picking an occupied cell

    }

    Empty(): any {

        return alert("You didnt chose a number, Try again"); //error for empty prompt

    }


}