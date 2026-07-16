import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-add-product",
  imports: [ReactiveFormsModule],
  templateUrl: "./add-product.html",
  styleUrl: "./add-product.css",
})
export class AddProduct {
  addForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", [Validators.required, Validators.min(1)]],
      category: ["", Validators.required],
    });
  }

  get name() {
    return this.addForm.get("name");
  }

  get price() {
    return this.addForm.get("price");
  }

  get category() {
    return this.addForm.get("category");
  }

  submitForm() {
    console.log(this.addForm.value);
    this.submitted = true;
  }
}