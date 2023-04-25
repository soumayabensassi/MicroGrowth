import { StartupService } from './../../service/startup.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/Project';

@Component({
  selector: 'app-list-projets-back',
  templateUrl: './list-projets-back.component.html',
  styleUrls: ['./list-projets-back.component.css']
})
export class ListProjetsBackComponent implements OnInit {
  list: Project[] = [];
  constructor(private startupService: StartupService,) { }

  ngOnInit(): void {
    this.startupService.getProjects().subscribe(
      data => this.list = data
    );
  }
  deleteProject(id:number){
    this.startupService.deleteProject(id).subscribe()
  }

}
