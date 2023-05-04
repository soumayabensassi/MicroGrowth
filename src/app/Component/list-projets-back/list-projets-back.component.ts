import { StartupService } from './../../service/startup.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/Models/Project';

@Component({
  selector: 'app-list-projets-back',
  templateUrl: './list-projets-back.component.html',
  styleUrls: ['./list-projets-back.component.css']
})
export class ListProjetsBackComponent implements OnInit {
  list: Project[] = [];
  constructor(private startupService: StartupService,private _router:Router) { }

  ngOnInit(): void {
    this.startupService.getProjects().subscribe(
      data => this.list = data
    );
  }
  deleteProject(id:number){
    this.startupService.deleteProject(id).subscribe()
  }
  editInvestment(id: number, project: Project) {
    this._router.navigate(['/editP', id], { state: { project: project } });
    console.log(project)
  }

}
