import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
  })
  export class LoginComponent implements OnInit {

  userName: any;
  password:any;

    constructor(
      private router : Router,
      private crudservice :CrudService,
      private authService :AuthService
     ) {}


    ngOnInit(): void {}

    //user login
    login(){
      if(this.userName==null){
        Swal.fire("Enter User Name")
      }
      else if(this.password==null){
        Swal.fire("Please Enter An Password")
      }else{
        this.crudservice.loginUser(this.userName,this.password)
        .subscribe((res) => {
            console.log('login details successfully parse to the back end')
            const result=res.error;
            if(result==false){
              this.authService.setUserInfo({'user' : res.message2});
              this.router.navigate(['home'])
              .then(() => {
                window.location.reload();
              });
            }else{
              Swal.fire("Please enter correct username and password !")
            }
          }, (err) => {
            console.log(err);
        });
      }
    }
  }
