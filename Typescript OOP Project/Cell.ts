// This class contains number,X,Y,mark,used and no functions
class cell {
    constructor(x: number, y: number, num: number) {
        this._X = x;
        this._Y = y;
        this._num = num;
    }
    private _X: number;
    set x(v: number) {
        if (v >= 0 && v <= 2) {
            this._X = v;
        }
    }
    get x(): number {
        return this._X;
    }

    private _Y: number;
    set y(v: number) {
        if (v >= 0 && v <= 2) {
            this._Y = v;
        }
    }
    get y(): number {
        return this._Y;
    }

    private _mark: string;
    set mark(v: string) {
        this._mark = v;
    }
    get mark(): string {
        return this._mark;
    }

    private _used: boolean = false;
    set used(v: boolean) {
        this._used = v;
    }
    get used(): boolean {
        return this._used;
    }

    private _num: number;
    set num(v: number) {
        if (v >= 1 && v <= 9) {
            this._num = v;
        }
    }

    get num(): number {
        return this._num;
    }

}