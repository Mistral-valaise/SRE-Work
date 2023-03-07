import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentBook: Book = {
    BookName: '',
    Price: 1,
    Category: '',
    Author: '',
  };

  message = '';
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getBook(this.route.snapshot.params['id']);
    }
  }
  getBook(id: string): void {
    this.bookService.get(id).subscribe({
      next: (data) => {
        this.currentBook = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  updatePublished(status: boolean): void {
    const data = {
      BookName: this.currentBook.BookName,
      Price: this.currentBook.Price,
      Category: this.currentBook.Category,
      Author: this.currentBook.Author,
    };
    this.message = '';
    this.bookService.update(this.currentBook.Id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }
  update(): void {
    this.message = '';
    this.bookService.update(this.currentBook.Id, this.currentBook).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
          ? res.message
          : 'This book was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }
  deleteBook(): void {
    this.bookService.delete(this.currentBook.Id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/books']);
      },
      error: (e) => console.error(e),
    });
  }
}