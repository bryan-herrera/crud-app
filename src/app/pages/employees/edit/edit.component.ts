import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  value =  null;
  employeeForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor( private router: Router, private fb: FormBuilder ) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
   }

  ngOnInit(): void {
    this.initForm();
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

}
