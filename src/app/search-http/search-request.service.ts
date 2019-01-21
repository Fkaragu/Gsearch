import { Injectable, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Search } from '../search-class/search';
import { Repos } from '../repos-class/repos';


@Injectable({
  providedIn: 'root'
})

export class SearchRequestService {

  user: Search;
  repo: Repos;

  private repoooo = "/repos";
  private username = 'Fkaragu';
  private client_id = 'da54c87abfcbda77caed';
  private client_secret = '197f9a95f3e0ab104ef8553fac027fec98d2b626';
  private xlink ="https://github.com";
  private ylink ="?tab=repositories";
  private pipe ="/";

  constructor(private http: HttpClient) {
    this.user = new Search("", "", "", "", "", "", "", "", new Date(),"","");
    this.repo = new Repos("", "", "");
  }

  updateUserName (username:string){
    this.username = username;
  }

  searchRepos() {

    interface ApiResponse {
      name: string
      html_url: string
      description: string
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl + this.username + this.repoooo +'?client_id='+this.client_id +'&client_secret='+this.client_secret).toPromise().then(response => {

        this.repo.name = response.name
        this.repo.html_url = response.html_url
        this.repo.description = response.description

        resolve()
      },
        error => {
          this.repo.name = " "
          this.repo.html_url = " "
          this.repo.description = " "
          reject(error)
        }
      )
    })

    return promise
  }


  searchRequest() {

    interface ApiResponse {

      login: string
      followers: string
      avatar_url: string
      public_repos: string
      public_gists: string
      following: string
      name: string
      email: string
      created_at: Date
      repos_url: string
      zlink : string



    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl + this.username +'?client_id='+this.client_id +'&client_secret='+this.client_secret).toPromise().then(response => {

        this.user.login = response.login
        this.user.followers = response.followers
        this.user.avatar_url = response.avatar_url
        this.user.public_repos = response.public_repos
        this.user.public_gists = response.public_gists
        this.user.following = response.following
        this.user.name = response.name
        this.user.email = response.email
        this.user.created_at = response.created_at
        this.user.repos_url = response.repos_url
        this.user.zlink = this.xlink + this.pipe + this.username + this.ylink



        resolve()
      },
        error => {
          this.user.login = " "
          this.user.followers = " "
          this.user.avatar_url = " "
          this.user.public_repos = "0"
          this.user.public_gists = "0"
          this.user.following = "0"
          this.user.name = " "
          this.user.email = " "

          reject(error)
        }
      )
    })

    return promise
  }
}
