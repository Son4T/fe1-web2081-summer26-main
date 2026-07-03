import { Component } from "@angular/core";

@Component({
  selector: "app-stories",
  imports: [],
  templateUrl: "./stories.html",
  styleUrl: "./stories.css",
})
export class Stories {
  stories = [
    {
      title: "One Piece",
      author: "Oda",
      views: 100000,
      year: 1997,
      genre: "Phiêu lưu",
      image: "https://intomau.com/wp-content/uploads/2026/01/one-piece-anime-vietsub-8.jpg",
    },
    {
      title: "Naruto",
      author: "Kishimoto",
      views: 90000,
      year: 1999,
      genre: "Hành động",
      image: "https://tse3.mm.bing.net/th/id/OIP.YioXhSAOxOsLAYfxt1suqgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Doraemon",
      author: "Fujiko F Fujio",
      views: 70000,
      year: 1969,
      genre: "Thiếu nhi",
      image: "https://tse1.mm.bing.net/th/id/OIP.zQsZRhQkaOLIx1d6CfeeugHaEo?w=1600&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Dragon Ball",
      author: "Toriyama",
      views: 95000,
      year: 1984,
      genre: "Hành động",
      image: "https://tse2.mm.bing.net/th/id/OIP.l6EFx6jbOlOckI2X0I0hNAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Attack On Titan",
      author: "Isayama",
      views: 92000,
      year: 2009,
      genre: "Kinh dị",
      image: "https://tse4.mm.bing.net/th/id/OIP.GYsJekrIc7UrGqeJgFBd2AHaEG?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Bleach",
      author: "Kubo",
      views: 85000,
      year: 2001,
      genre: "Siêu nhiên",
      image: "https://tse3.mm.bing.net/th/id/OIP.YliADex6y9ZhWvAv64WonQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];
}