import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-register",
  imports: [ReactiveFormsModule],
  templateUrl: "./register.html",
  styleUrl: "./register.css",
})
export class Register {
  addForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get username() {
    return this.addForm.get("username");
  }

  get email() {
    return this.addForm.get("email");
  }

  get password() {
    return this.addForm.get("password");
  }

  submitForm() {
    console.log(this.addForm.value);
    this.submitted = true;
  }
}