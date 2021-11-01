import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookName = 'How to get rich';

  books = ['book1','book2','book3'];

  constructor() { }

  ngOnInit(): void {
  }

  addBook() {
    this.books.push(this.bookName)
  }

}
