import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bentley',
  templateUrl: './bentley.component.html',
  styleUrls: ['./bentley.component.scss']
})
export class BentleyComponent implements OnInit {

  public name = "Bentley"
  constructor() { }

  ngOnInit(): void {
  }

}
