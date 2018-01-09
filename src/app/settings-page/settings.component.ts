import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  maxResults: string;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.maxResults = this.listService.maxResults
  }

  onChange() {
    this.listService.setMaxResults(this.maxResults)
  }

}
