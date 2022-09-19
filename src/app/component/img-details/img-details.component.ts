import { Component, NgZone, OnInit } from '@angular/core';
import { IServerResponse } from 'src/app/interfaces/server-response';
import { CrudService } from './../../service/crud.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-img-details',
  templateUrl: './img-details.component.html',
  styleUrls: ['./img-details.component.sass'],
})
export class ImgDetailsComponent implements OnInit {
  files: any = [];
  ngZone: any;

  constructor(
    private crudService: CrudService,
    private router: Router) {}
  ngOnInit(): void {

  }


  //delete image

  delete(file_id: any, i: any) {
    console.log(file_id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deletefILE(file_id).subscribe((res) => {
        this.files.splice(i, 1);
      });
    }
  }

  //image view

  loadData(){
    this.crudService.GetFiles().subscribe((res: IServerResponse) => {
      const data=res.data;
      if(data!=null){
        Swal.fire("All data loaded !")
      }else{
        Swal.fire("You are not logged in, Please login first !")
        this.router.navigateByUrl('login')
      }
      this.files = res.data || [];

    });
  }

}
