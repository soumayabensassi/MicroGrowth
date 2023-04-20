import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ImageProfile } from 'src/app/Models/image-profile';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { error } from 'console';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userInfo: User = new User();
  u:User=new User();
  constructor(private sanitizer: DomSanitizer, private userservice: UserService, private route: Router) { }
  ngOnInit(): void {
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  logout() {
    // code to log the user out
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token'); // remove the user token from local storage
    this.route.navigate(['/signin']); // navigate the user to the login page
  }
  prepareData(u: User): FormData {
    const formData = new FormData()
    formData.append(
      'User', new Blob([JSON.stringify(u)], { type: 'application/json' })
    )
    formData.append('image', u.image.file, u.image.file.name)
    return formData;
  }

  onFileSelected(event: any) {

    if (event.target.files) {
      const file = event.target.files[0]
      const fileHandle: ImageProfile = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      }
      this.u=this.userInfo
      this.u.image = fileHandle

      console.log(this.u.image)
      const data = this.prepareData(this.u)
      console.log(data)
      this.userservice.uploadimage(data).subscribe()
    }
  }

  update()
  { console.log(this.userInfo)
  
    this.userservice.updateUser(this.userInfo.email,this.userInfo).subscribe(()=>this.route.navigateByUrl("/user/profil"))
  }
}
