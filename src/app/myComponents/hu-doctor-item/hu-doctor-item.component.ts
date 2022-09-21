import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HuDialogDeleteComponent } from '../hu-dialog-delete/hu-dialog-delete.component';
import { HUDoctorFormComponent } from '../hu-doctor-form/hu-doctor-form.component';

@Component({
  selector: 'app-hu-doctor-item',
  templateUrl: './hu-doctor-item.component.html',
  styleUrls: ['./hu-doctor-item.component.css']
})
export class HUDoctorItemComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  doceditform(){
    let dialogrf2 = this.dialog.open(HUDoctorFormComponent,{height:'95%',width:'80%'});
  }

  deletedialog(){
    let dialogref1 = this.dialog.open(HuDialogDeleteComponent);

    dialogref1.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
