import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectiveService {
  private HttpClient: HttpClient;

  private electiveUrl = 'http://localhost:8080/elective/';

  constructor(httpClient: HttpClient) {
    this.HttpClient = httpClient;
  }

  getElectiveList() {
    
  }
}
