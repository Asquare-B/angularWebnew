import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-covidcard',
  templateUrl: './covidcard.component.html',
  styleUrls: ['./covidcard.component.css']
})
export class CovidcardComponent implements OnInit {

  @Input() title: any;
  @Input() img: any;
  @Input() desc:any;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
