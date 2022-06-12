import { RequestsService } from './../../services/Activity/Request/requests.service';
import { RequestModel } from './../../classes/RequestModel';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updaterequest',
  templateUrl: './updaterequest.component.html',
  styleUrls: ['./updaterequest.component.css']
})
export class UpdaterequestComponent implements OnInit {

  request: RequestModel | undefined;
  id: number | undefined;

  constructor(private requestService: RequestsService,  
    public dialogRef: MatDialogRef<UpdaterequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { }

  ngOnInit(): void {

    console.log(this.data.request.id);
    this.id = this.data.request.id;
    this.requestService.getRequestById(this.id)
    .subscribe((data)=>{
      this.request = <RequestModel>this.data;
      console.log(this.data);
    });

  }

  updateRequest(){
 
    this.requestService.updateRequest(this.data.request).subscribe(
      (res: any) => {
        console.log(this.data.request.id + "updated");
      });
      this.dialogRef.close(); 
    }

}
