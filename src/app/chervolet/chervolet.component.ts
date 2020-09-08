import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chervolet',
  templateUrl: './chervolet.component.html',
  styleUrls: ['./chervolet.component.scss']
})
export class ChervoletComponent implements OnInit {

  public name = "Chervolet";
  constructor() { }

  ngOnInit(): void {
  }

}
