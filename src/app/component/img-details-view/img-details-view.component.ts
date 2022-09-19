import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-img-details-view',
  templateUrl: './img-details-view.component.html',
  styleUrls: ['./img-details-view.component.sass'],
})
export class ImgDetailsViewComponent implements OnInit {
  title = 'toolsets';
  

  constructor(private router: Router,private crudService: CrudService) {}


  // image uploade

  ngOnInit(): void {}
  async upload(event: any) {
    const file = event.target.files[0];
    const formdata = new FormData();
    formdata.append('file', file);
    this.crudService.addFile(formdata).subscribe(
      (res) => {
        const result = Object.values(res);
        const result1 = result[0];
        console.log(result)
        if (result1 == false) {
          Swal.fire("file added succefully");
          this.router.navigateByUrl('imgdetails')
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
