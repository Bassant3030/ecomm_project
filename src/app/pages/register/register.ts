import { Component } from '@angular/core';
import{AbstractControl, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { inject } from '@angular/core';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {


  private readonly authService=inject(AuthService);

  RegisterForm : FormGroup= new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    rePassword: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

  }, //this.confirmPassword 
  {validators: this.confirmPassword}
  )

  confirmPassword(group:AbstractControl){
    const password = group.get('password')?.value
    const rePass = group.get('rePassword')?.value

    if(password === rePass){
      return null
    }else {
      return {mismatch:true}
    }
  }

  submitForm(){
    this.authService.signUp(this.RegisterForm.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.error(err);
      }
    })
    // console.log(this.RegisterForm);
  }
}
