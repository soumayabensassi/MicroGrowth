import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/Project';
import { StartupService } from 'src/app/service/startup.service';

@Component({
  selector: 'app-bourse',
  templateUrl: './bourse.component.html',
  styleUrls: ['./bourse.component.css']
})
export class BourseComponent implements OnInit {
  list: Project[] = [];
  constructor(private startupService: StartupService,private Route :Router,) { }


  ngOnInit(): void {
    this.startupService.getProjects().subscribe(
      data => this.list = data
    );
  }
  navigate(){
    this.Route.navigateByUrl('/investor')
  }

}
