import { Component, OnInit } from '@angular/core';
import {ApiListService} from '../api-list.service';

import { DictionaryApiComponent } from '../dictionary-api/dictionary-api.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private apiListService: ApiListService) { }

  DictionaryApiComponent = DictionaryApiComponent;

  ngOnInit() {
  }

}
