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
        if(type == null){
            return;
        }
        switch(type){
            case "500":{
                this.requestService.sendGetRequest("https://localhost:7038/weatherforecast/test500").subscribe(response => response, error => {
                    this.Response = "oops 500 error :D";
                });
                break;
            }
            case "time":{
                console.log("time");
                this.requestService.sendGetRequest("https://localhost:7038/weatherforecast/time").subscribe(response => {
                    this.Response = "Berlin, but from agnular";
                }, error => {
                    this.Response = error;
                });
                break;
            }
                
            default:{
                console.log("Incorrect paramenter");
                break;
            }
        }
    }
}