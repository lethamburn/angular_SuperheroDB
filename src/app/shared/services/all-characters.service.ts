import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AllCharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters = () => {
    return this.http.get(
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
    );
  };
}
