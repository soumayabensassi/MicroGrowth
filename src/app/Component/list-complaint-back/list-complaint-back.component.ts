import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/Models/complaint';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-list-complaint-back',
  templateUrl: './list-complaint-back.component.html',
  styleUrls: ['./list-complaint-back.component.css']
})
export class ListComplaintBackComponent implements OnInit {
  list: Complaint[] = [];
  complaint:Complaint=new Complaint();
  constructor(private comservice:ComplaintService) { }

  ngOnInit(): void {
    this.comservice.getComplaint().subscribe(
      data => this.list = data
    );
  }
  getComplaints() {
    this.comservice.getComplaint().subscribe(complaint => this.list = complaint);
  }
  avis(){
    this.comservice.AvisUser().subscribe();
   }
}
