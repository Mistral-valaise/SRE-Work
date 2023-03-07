import { Component, OnInit, Input } from '@angular/core';
import { Sloe } from '../models/sloe.model';
import { SloeService } from '../services/sloe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-slo',
  templateUrl: './slo.component.html',
  styleUrls: ['./slo.component.css']
})
export class SloComponent implements OnInit {
  @Input() clickMessage = '501';
  @Input() currentSloe: Sloe = {
    status: '501',
    traceId: '',
  };

message ='test503';
constructor(
  private sloeService: SloeService,
  private route: ActivatedRoute,
  private router: Router
) { }

  onClickMe() {
    this.clickMessage = '502';
  }

  getSloe(status: string): void {
    this.sloeService.get(status).subscribe({
      next: (data) => {
        this.currentSloe = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void{
    const data ={
      status: this.currentSloe.status,
      traceId: this.currentSloe.traceId,
    };
    this.message = '';
    this.sloeService.update(this.currentSloe.status).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
          ? res.message
          : 'This Error was sended again successfully';
      },
      error: (e) => console.error(e),
    });
  }

  update(): void {
    this.message = 'test500';
    this.sloeService.update(this.currentSloe.status).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
          ? res.message
          : 'This Error was sended again successfully';
      },
      error: (e) => console.error(e),
    });
  }

  ngOnInit(): void {
    if (!this.clickMessage){
      this.message ='';
      this.getSloe(this.route.snapshot.params['status']);
    }
  }

}
