import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from '../search-class/search';
import { SearchRequestService } from '../search-http/search-request.service'

@Component({
  selector: 'app-gheader',
  templateUrl: './gheader.component.html',
  providers:[SearchRequestService],
  styleUrls: ['./gheader.component.css']
})
export class GheaderComponent implements OnInit {
  quote:Search;

  constructor(private searchService:SearchRequestService) {

  }
  ngOnInit() {
    this.searchService.searchRequest()
    this.quote=this.searchService.quote
  }
}
