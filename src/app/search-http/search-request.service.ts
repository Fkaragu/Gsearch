import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Search } from '../search-class/search'

@Injectable({
  providedIn: 'root'
})

export class SearchRequestService {
  quote: Search;

  private username ='madskillz254';
  private client_id ='xxxx';
  private client_secret ='xxxx';


  constructor(private http: HttpClient) {
    this.quote = new Search("", "", "", "");
  }
  searchRequest() {

    interface ApiResponse {
      quote: string;
      author: string

      login: string
      followers: string
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl+this.username).toPromise().then(response => {

        this.quote.login = response.login
        this.quote.followers = response.followers

        resolve()
      },
        error => {
          this.quote.login = "Francis."
          this.quote.followers = "0"
          reject(error)
        }
      )
    })

    return promise
  }
}
