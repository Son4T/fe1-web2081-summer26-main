import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Story {
  id: number;
  title: string;
  author: string;
  views: number;
  year: number;
  genre: string;
  image: string;
}

@Component({
  selector: "app-stories",
  imports: [],
  templateUrl: "./stories.html",
  styleUrl: "./stories.css",
})
export class Stories implements OnInit {
  stories: Story[] = [];
  loading = false;
  error = false;
  deletingId: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = false;

    this.http.get<Story[]>("http://localhost:3000/stories").subscribe({
      next: (data) => {
        this.stories = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  deleteStory(id: number) {
    const confirmDelete = confirm("Bạn có chắc muốn xóa không?");
    if (!confirmDelete) return;

    this.deletingId = id;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        this.deletingId = null;
        alert("Xóa thành công");
      },
      error: () => {
        this.deletingId = null;
        alert("Xóa thất bại");
      },
    });
  }
}