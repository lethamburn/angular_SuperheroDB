import { Component, OnInit } from '@angular/core';
import { AllCharactersService } from 'src/app/shared/services/all-characters.service';

@Component({
  selector: 'app-all-characters-page',
  templateUrl: './all-characters-page.component.html',
  styleUrls: ['./all-characters-page.component.scss'],
})
export class AllCharactersPageComponent implements OnInit {
  characters: any[] = []

  constructor(private allCharactersService: AllCharactersService) {}

  ngOnInit(): void {
    this.allCharactersService
      .getAllCharacters()
      .subscribe((allCharactersData: any) => {
        console.log(allCharactersData)
        this.characters = allCharactersData;
       
      });
  }
}
