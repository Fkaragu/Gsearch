import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Search } from '../search-class/search'

@Injectable({
  providedIn: 'root'
})

export class SearchRequestService {
  quote: Search;

  private username ='Fkaragu';
  private client_id ='da54c87abfcbda77caed';
  private client_secret ='197f9a95f3e0ab104ef8553fac027fec98d2b626';


  constructor(private http: HttpClient) {
    this.quote = new Search("", "", "", "","","","","");
  }
  searchRequest() {

    interface ApiResponse {
      quote: string;
      author: string

      login:string
      followers:string
      avatar_url:string
      public_repos:string
      public_gists:string
      following:string
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl+this.username).toPromise().then(response => {

        this.quote.login = response.login
        this.quote.followers = response.followers
        this.quote.avatar_url = response.avatar_url
        this.quote.public_repos = response.public_repos
        this.quote.public_gists = response.public_gists
        this.quote.following = response.following

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
