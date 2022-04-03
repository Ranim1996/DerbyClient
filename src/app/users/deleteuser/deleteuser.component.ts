import { UsersService } from './../../services/users/users.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(
    private userService: UsersService,
    public dialogRef: MatDialogRef<DeleteuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  ngOnInit(): void {
  }

  //delete user
  deleteUser(){
    this.userService.deleteUser(this.data.user.id).subscribe();
    console.log(this.data.user.id);

    // Close dialog
    this.dialogRef.close();

  }

  //close dialog 
  noClick(): void {
    this.dialogRef.close();
  }

}
