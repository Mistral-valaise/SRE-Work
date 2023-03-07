import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthGuard } from './auth/app.auth.guard';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { ErrorComponent } from './components/error/error.component';
import { QuestionComponent } from './question/question.component';
import { SloComponent } from './slo/slo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'quiz', component: WelcomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'slos', component: SloComponent },
  { path: 'error', component: ErrorComponent },
  {
    path: 'books/:id',
  component: BookDetailsComponent,
  },
  { path: 'add', component: AddBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
