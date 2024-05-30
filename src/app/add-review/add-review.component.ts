// src/app/components/add-review/add-review.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../review.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-add-review',
  imports: [
    BrowserModule, FormsModule // <<<< And here
  ],
  standalone: true,
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  breweryId: string = '';
  rating: number = 5;
  description: string = '';

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.breweryId = this.route.snapshot.paramMap.get('id')!;
  }

  addReview() {
    const token = localStorage.getItem('token');
    if (token) {
      this.reviewService.addReview(this.breweryId, this.rating, this.description, token).subscribe(
        () => this.router.navigate(['/brewery', this.breweryId]),
        err => console.error(err)
      );
    } else {
      console.error('No token found');
    }
  }
}
