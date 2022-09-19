import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isLogged :boolean | undefined;

  constructor(private authService : AuthService ,
    private crudService: CrudService,
    private router: Router) { }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();

  }
  onlogout() {
    this.crudService.Logout().subscribe(
      (res) => {
        const result = Object.values(res);
        const result1 = result[0];
        if (result1 == false) {
          localStorage.removeItem('userInfo');
          Swal.fire("Successfully Log Out");
          setTimeout(() => {  this.router.navigate(['home'])
          .then(() => {
            window.location.reload();
          }); }, 1000);

        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
