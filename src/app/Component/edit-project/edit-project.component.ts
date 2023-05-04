import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/Models/Project';
import { StartupService } from 'src/app/service/startup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projet: Project = new Project();
  constructor(private project:StartupService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.projet.idprojet=this.route.snapshot.params['id'];
    console.log( this.projet.idprojet);
    this.project.getProject(this.projet.idprojet).subscribe(
      (projet:Project)=>{this.projet=projet;
      }
    )
  }
  saveInvestment(){
    this.project.updateProject(this.projet.idprojet,this.projet).subscribe(

    );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your investment is update',
      showConfirmButton: false,
      timer: 1500
    })

  }

}
