import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

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

  constructor(private toastr: ToastrService, private router : Router) { }

  ngOnInit(): void {
  }


  onSubmitUserDetails(value) {
    if (value.name && value.phone) {
      this.toastr.success("Employee Added Successfully");
      this.employeeForm.reset();
      this.router.navigate(['/employees']);
    } else {
      this.toastr.error("Employee Not Added");
    }
  }

}
