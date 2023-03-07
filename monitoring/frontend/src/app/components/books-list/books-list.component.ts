import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  book?: Book[];
  currentBook: Book = {};
  currentIndex = -1;
  BookName = '';
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.bookService.getAll().subscribe({
      next: (data) => {
        this.book = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  refreshList(): void {
    this.retrieveTutorials();
    this.currentBook = {};
    this.currentIndex = -1;
  }
  setActiveBook(book: Book, index: number): void {
    this.currentBook = book;
    this.currentIndex = index;
  }

  searchBook(): void {
    this.currentBook = {};
    this.currentIndex = -1;
    this.bookService.findByBookName(this.book).subscribe({
      next: (data) => {
        this.book = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}