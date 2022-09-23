import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrewService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJson().subscribe((data) => {
      return data;
    });
  }

  getJson(): Observable<any> {
    return this.http.get('../../assets/json/data.json');
  }
}
