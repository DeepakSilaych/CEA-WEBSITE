import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  zoom: number = 14;
  lat: number = 19.132645;
  lng: number = 72.916484;

  ngOnInit(): void {
  }

}
