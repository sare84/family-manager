import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public apiService: ApiService) {}

  title = 'FamilyManager';
  apiInfo = {};

  ngOnInit(): void {
    this.apiService.getApiInfo().subscribe((data) => {
      console.log(data);
      this.apiInfo = data;
    })
  }
}
