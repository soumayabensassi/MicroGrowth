import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pubication } from 'src/app/Models/pubication';
import { PublicationService } from 'src/app/service/publication.service';

@Component({
  selector: 'app-list-publictaion-back',
  templateUrl: './list-publictaion-back.component.html',
  styleUrls: ['./list-publictaion-back.component.css']
})
export class ListPublictaionBACKComponent implements OnInit {
  list: Pubication[] = [];
  pub!:Pubication;
  constructor(private pubService:PublicationService,private route:Router){ }

  ngOnInit(): void {
    this.pubService.getPublication().subscribe(
      data => this.list = data
    );
  }
  aprouverpublication(i:number){
    this.pubService.getPublicationById(i).subscribe((data)=>this.pub=data)
    const index = this.list.indexOf(this.pub);
    console.log(index)
    this.pubService.aprouverPublication(i,this.pub).subscribe(
      ()=>this.list=this.list.filter((p)=>p.idPublication != i)
    )

  }
  searchTerm: string = '';
  filterList() {
    this.pubService.getPublication().subscribe(data => {
      this.list = data.filter(pub => pub.users.email.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });
  }
  delete(i:number)
  {
    this.pubService.delete(i).subscribe(
      ()=>this.list=this.list.filter((p)=>p.idPublication != i)
      )
  }
}
