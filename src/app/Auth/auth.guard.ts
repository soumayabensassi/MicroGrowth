import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token!:any
  constructor(private authService: UserService, private router: Router) {

  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    this.token= localStorage.getItem('access_token');
    console.log(this.token)
    if (this.token != null) {
      const role = route.data["roles"] as Array<string>
      if (role) {
        const match = await this.authService.roleMatch(role);
        console.log("aaaaaaaaaaaaa")
        console.log(match)
  
        if (match) { 
          return true;
        } else {
          this.router.navigate(['/notfound']);
          return false;
        }
      }
    }
    this.router.navigate(['/signin'])
    return false
  }
  

}
