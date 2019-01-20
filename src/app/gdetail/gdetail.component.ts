import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from '../search-class/search';
import { Repos } from '../repos-class/repos';
import { SearchRequestService } from '../search-http/search-request.service'


@Component({
  selector: 'app-gdetail',
  templateUrl: './gdetail.component.html',
  providers: [SearchRequestService],
  styleUrls: ['./gdetail.component.css']
})
export class GdetailComponent implements OnInit {
  user: Search;
  repo: Repos;
  username: string;
  constructor(private searchService: SearchRequestService) {

  }

  searchUser(){
    this.searchService.updateUserName(this.username);
      //console.log(this.username);

      this.searchService.searchRequest()
      this.user = this.searchService.user
  }

  searchRepos(){
    this.searchService.updateUserName(this.username);
      console.log(this.username);

      this.searchService.searchRepos()
      this.repo = this.searchService.repo
      console.log(this.repo);
  }



  ngOnInit() {
  }

}
