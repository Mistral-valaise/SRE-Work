import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  book: Book = {
    BookName: '',
    Price: 1,
    Category: '',
    Author: '',
  };
  submitted = false;
  constructor(private bookService: BookService) {}
  ngOnInit(): void {}
  saveBook(): void {
    const data = {
      BookName: this.book.BookName,
      Price: this.book.Price,
      Category: this.book.Category,
      Author: this.book.Author,
    };
    this.bookService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }
  newBook(): void {
    this.submitted = false;
    this.book = {
      BookName: '',
      Price: 1,
      Category: '',
      Author: '',
    };
  }
}