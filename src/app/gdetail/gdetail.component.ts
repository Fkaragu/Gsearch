import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from '../search-class/search';
import { SearchRequestService } from '../search-http/search-request.service'


@Component({
  selector: 'app-gdetail',
  templateUrl: './gdetail.component.html',
  providers: [SearchRequestService],
  styleUrls: ['./gdetail.component.css']
})
export class GdetailComponent implements OnInit {
  user: Search;
  constructor(private searchService: SearchRequestService) {

  }

  ngOnInit() {
    this.searchService.searchRequest()
    this.user = this.searchService.user
  }

}
