import { Component } from "@angular/core";
import { RequestService } from "src/app/services/request.service";

@Component({
    selector: 'app-error-page',
    templateUrl: 'error.component.html',
    styleUrls: ['error.component.css']
})

export class ErrorComponent {
    constructor(private requestService: RequestService) {
      
    }

    protected Response: string = "";

    public sendRequest(type : string){
        console.log("type");
        if(type == null){
            return;
        }
        switch(type){
            case "500":{
                this.requestService.sendGetRequest("https://localhost:7038/weatherforecast/test500").subscribe(response => {
                    this.Response = response;
                })
                console.log("500 req");
                break;
            }
                
            default:{
                console.log("Incorrect paramenter");
                break;
            }
        }
    }
}