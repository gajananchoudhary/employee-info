import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})
export class EditEmpComponent implements OnInit {

  validation_messages : any = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Name must be at least 4 characters long' },
      { type: 'maxlength', message: 'Name cannot be more than 25 characters long' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'minlength', message: 'Phone must be 10 characters long' },
      { type: 'maxlength', message: 'Phone must be 10 characters long' }
    ]
    }

  employeeForm = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(25)])),
    phone: new FormControl('',Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
    city: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    postalCode: new FormControl(''),
  });

  data : any;

  constructor(private toastr: ToastrService,private activateRouter: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
     this.activateRouter
      .queryParams
      .subscribe(params => {this.data = params});
      this.setFormData(this.data);
  }

  setFormData(value) {
    this.employeeForm.get('name').setValue(value.name);
    this.employeeForm.get('phone').setValue(value.phone);
    this.employeeForm.get('city').setValue(value.city);
    this.employeeForm.get('address1').setValue(value.address1);
    this.employeeForm.get('address2').setValue(value.address2);
    this.employeeForm.get('postalCode').setValue(value.postalCode);
  }


  onSubmitUserDetails(value) {
    if (value.name && value.phone) {
      this.toastr.success("Employee Updated Successfully");
      this.employeeForm.reset();
      this.router.navigate(['/employees']);
    } else {
      this.toastr.error("Employee Not Added");
    }
  }

}
