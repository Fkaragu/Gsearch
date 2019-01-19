import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Search } from '../search-class/search'

@Injectable({
  providedIn: 'root'
})

export class SearchRequestService {
  quote:Search;

  constructor(private http:HttpClient) {
    this.quote=new Search("","");
  }
  searchRequest(){

    interface ApiResponse{
        quote:string;
        author:string

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{

            this.quote.quote=response.quote
            this.quote.author=response.author

            resolve()
        },
        error=>{
                this.quote.quote="Never, never, never give up."
                this.quote.author="winston churchill"
                reject(error)
            }
        )
    })

    return promise
  }
}
