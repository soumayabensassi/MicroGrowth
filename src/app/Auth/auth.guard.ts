import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserService, private router: Router) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getToken != null) {
      const role = route.data["roles"] as Array<string>
      if (role) {
       console.log(role)
       const match=this.authService.roleMatch(role);
       console.log("aaaaaaaaaaaaa")
       console.log(match)

        if(match)
        { 
          return true;
        }else{
          this.router.navigate(['/notfound']);
          return false
        }
      }
    }
    this.router.navigate(['/signin'])
    return false
  }

}
