import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from 'src/app/Models/Project';
import { StartupService } from 'src/app/service/startup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-startup-add-user',
  templateUrl: './startup-add-user.component.html',
  styleUrls: ['./startup-add-user.component.css'],

})
export class StartupAddUserComponent implements OnInit {
  project: Project = new Project();
  constructor(private projectService: StartupService) { }

  ngOnInit() {
  }
  saveProject() {
    this.projectService.addProject(this.project).subscribe();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your investment has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
