import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hu-user',
  templateUrl: './hu-user.component.html',
  styleUrls: ['./hu-user.component.css']
})
export class HUUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(){
    window.scroll(0,0);
  }

}
