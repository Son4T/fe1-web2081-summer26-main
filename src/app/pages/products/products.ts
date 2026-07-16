import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RouterLink } from "@angular/router";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  views: number;
}

@Component({
  selector: "app-products",
  imports: [RouterLink],
  templateUrl: "./products.html",
  styleUrl: "./products.css",
})
export class Products implements OnInit {
  products: Product[] = [];
  loading = false;
  error = false;
  deletingId: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.error = false;

    this.http.get<Product[]>("http://localhost:3000/products").subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  deleteProduct(id: number) {
    const confirmDelete = confirm("Bạn có chắc muốn xóa không?");
    if (!confirmDelete) return;

    this.deletingId = id;

    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== id);
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