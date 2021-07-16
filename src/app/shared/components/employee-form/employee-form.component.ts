import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
employee: Employee;
  employeeForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor( private router: Router, private fb: FormBuilder ) {
    this.initForm();

    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {

    if (typeof this.employee === 'undefined') {
      //Redirect
      this.router.navigate(['new']);
    }else {
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSave(): void {
    console.log('Guardado', this.employeeForm.value);
  }

  private initForm():void {
    this.employeeForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      fecha: ['', [Validators.required]],
    })
  }

  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

}
