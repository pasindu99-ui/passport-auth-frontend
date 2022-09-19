import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  myForm!: any;
  userForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
  name: string = '';
  email: string = '';
  password1: string = '';
  password2: string = '';
  ngOnInit() {}

  fblogin(){
    this.crudService.fblog().subscribe(
      )
    }

  onSubmit() {
    if (this.name == '') {
      Swal.fire('enter user name !');
    } else if (this.email == '') {
      Swal.fire('please enter an email !');
    } else if (this.password1 == '') {
      Swal.fire('please enter password !');
    } else if (this.password1.length <= 7) {
      Swal.fire('Please enter more than seven charactors !');
    } else if (this.password1 !== this.password2) {
      Swal.fire("password didn't match !");
    } else if (this.password1 == this.password2) {
      this.crudService.AddUser(this.userForm.value).subscribe(
        (res) => {
          this.ngZone.run(() => this.router.navigateByUrl('/register'));
          const result = res.error;
          console.log(res)
          if (result == true) {
            Swal.fire('User Already Registered');
          } else if (result == false) {
            Swal.fire('User Registered Successfully !');
            this.router.navigateByUrl('login');
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
