import { EmployeesService } from './../../../pages/employees/employees.service';
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

  constructor( private router: Router, private fb: FormBuilder, private employeesSvc: EmployeesService ) {
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
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      const employeeId = this.employee?.id || null;
      this.employeesSvc.onSaveEmployee(employee, employeeId);
      this.employeeForm.reset();
    }
  }

  isValidField (field: string):string {
    const validateField = this.employeeForm.get(field);
    return ( !validateField.valid && validateField.touched)
      ? 'is-invalid': validateField.touched ? 'is-valid': '';
  };

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
