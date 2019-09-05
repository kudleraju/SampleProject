import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ServerService{
    constructor(private http:HttpClient){}
        getServers(){
        this.http.get('https://restcountries.eu/rest/v2/all')
        
    }
}
