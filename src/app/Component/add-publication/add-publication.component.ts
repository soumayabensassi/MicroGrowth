import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pubication } from 'src/app/Models/pubication';
import { PublicationService } from 'src/app/service/publication.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  publication:Pubication=new Pubication();
  constructor(private pubservice:PublicationService,private route:Router) { }

  ngOnInit(): void {
  }
  sendPublication() 
  {
    this.pubservice.addPublication(this.publication).subscribe(
      ()=>this.route.navigateByUrl("/homepage")
    )
 
  }
}
