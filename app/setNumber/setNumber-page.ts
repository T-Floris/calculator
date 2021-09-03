import { Button, EventData, Frame, Page } from "@nativescript/core"
import { MyObservable } from "~/MyObservable"


var title: string
var obs: MyObservable

export function navigatingTo(args: EventData) {

      const page = <Page>args.object
      obs = page.navigationContext.obs
      page.bindingContext = obs  

      title = page.navigationContext.title      

      obs.set("xTitle", title)
      

}  