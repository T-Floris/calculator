
import { EventData, Frame, Label, NavigatedData, Page } from '@nativescript/core'
import { MyObservable } from './MyObservable'



var firstNumber: Label
var secondNumber: Label
var result: Label

var obs: MyObservable



export function navigatingTo(args: NavigatedData) {

  if(!args.isBackNavigation)
  {
    const page = <Page>args.object
    obs = new MyObservable()
    page.bindingContext = obs
  }
  else{
      obs.set("number1", obs.number1) 
      obs.set("number2", obs.number2) 
    }




}
