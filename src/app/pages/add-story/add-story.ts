import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { StoryService } from "../../services/story";

@Component({
  selector: "app-add-story",
  imports: [ReactiveFormsModule],
  templateUrl: "./add-story.html",
  styleUrl: "./add-story.css",
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  success = "";
  error = "";

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService,
  ) {
    this.addForm = this.fb.group({
      title: ["", Validators.required],
      author: "",
      views: 0,
    });
  }

  get title() {
    return this.addForm.get("title");
  }

  submitForm() {
    this.error = "";
    this.success = "";
    this.loading = true;

    const data = this.addForm.value;

    this.storyService.create(data).subscribe({
      next: () => {
        this.success = "Thêm truyện thành công";
        this.addForm.reset();
        this.loading = false;
      },
      error: () => {
        this.error = "Có lỗi xảy ra";
        this.loading = false;
      },
    });
  }
}