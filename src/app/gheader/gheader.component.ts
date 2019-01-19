import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Search } from '../search-class/search';

@Component({
  selector: 'app-gheader',
  templateUrl: './gheader.component.html',
  styleUrls: ['./gheader.component.css']
})
export class GheaderComponent implements OnInit {
  quote:Search;
  constructor(private http:HttpClient) {

  }

  ngOnInit() {
    interface ApiResponse{
        quote:string;
        author:string
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
            this.quote= new Search(data.quote,data.author)

        },err=>{
            this.quote= new Search("Never, never, never give up.","winston churchill")
            console.log("Error occured ")
        })
      }

    }
