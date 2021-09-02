import { EventData, Frame, Observable } from "@nativescript/core";

var activeTest : number

export class MyObservable extends Observable{
    
    constructor(){
        super()
    }
    
    private _number1 : number;
    public get number1() : number {
        return this._number1;
    }
    public set number1(v : number) {
        this._number1 = v;
        this.notifyPropertyChange("number1", v)
    }
    
    
    private _number2 : number;
    public get number2() : number {
        return this._number2;
    }
    public set number2(v : number) {
        this._number2 = v;
        this.notifyPropertyChange("number2", v)
    }

    
    private _result : number;
    public get result() : number {
        return this._result;
    }
    public set result(v : number) {
        this._result = v;
        this.notifyPropertyChange("result", v)
    }
    

    



    ///////////////////////////////////////////////////////////////////

    onSetNumber(args: EventData){

        var title: string

        switch (args.object.get("value")) {
            case "1": {
                title = "indsæt 1. tal"
                activeTest = args.object.get("value")
                break;
            }

            case "2" : {
                title = "indsæt 2. tal"
                activeTest = args.object.get("value")
                break;
            }           
        
            default:
                break;
        }
        
        var navigationOptions = {
            moduleName : "setNumber/setNumber-page",
            context: {    
                title: title,
                obs: this                   
            }
        }
        
        Frame.topmost().navigate(navigationOptions)        
    }

    onAdd(){
        this.result = this.number1 + this.number2
    }

    onMinus(){
        this.result = this.number1 - this.number2
    }

    onTimes(){
        this.result = this.number1 * this.number2
    }

    onDivide(){
        this.result = this.number1 / this.number2
    }

    onTap(args: EventData){
        var colector: number = this.get("txtFrom")
        switch (activeTest + "") {
            case "1": {
                this.number1 =+ colector
                break;
            }
            
            case "2": {
                this.number2 =+ colector
                break;
            }
            
            default: {
                break;
            }
        }
            
        this.set("txtFrom", "")

        Frame.goBack()
    }
}