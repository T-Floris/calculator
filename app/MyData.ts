export class MyData
{
    notifyPropertyChange(arg0: string, v: number) {
        throw new Error("Method not implemented.");
    }
    
    private _number1 : number;
    public get number1() : number {
        return this._number1;
    }
    public set number1(v : number) {
        this._number1 = v;
        this.notifyPropertyChange("firstNumber", v)
    }
    
    
    private _number2 : number;
    public get number2() : number {
        return this._number2;
    }
    public set number2(v : number) {
        this._number2 = v;
        this.notifyPropertyChange("secondNumber", v)
    }

    
    private _result : number;
    public get result() : number {
        return this._result;
    }
    public set result(v : number) {
        this._result = v;
        this.notifyPropertyChange("result", v)
    }
    
}