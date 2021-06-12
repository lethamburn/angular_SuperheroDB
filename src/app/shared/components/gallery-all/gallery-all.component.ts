import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-all',
  templateUrl: './gallery-all.component.html',
  styleUrls: ['./gallery-all.component.scss']
})
export class GalleryAllComponent implements OnInit {



  constructor() { }
  @Input() characters: any[] = [];
  @Input() itemList: any[] = [];

  ngOnInit(): void {

  }

}
