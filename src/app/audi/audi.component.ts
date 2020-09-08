import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})
export class AudiComponent implements OnInit {

  public name = "Audi";
  constructor() { }

  ngOnInit(): void {
  }

}
