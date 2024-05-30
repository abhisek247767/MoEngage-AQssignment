// src/app/components/brewery/brewery.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BreweryService } from '../brewery.service';
import { ReviewService } from '../review.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-brewery',
  imports: [
    BrowserModule, FormsModule , CommonModule,
    RouterModule// <<<< And here
  ],
  standalone: true,
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {
  breweryId: string = '';
  brewery: any;
  reviews: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private breweryService: BreweryService,
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.breweryId = this.route.snapshot.paramMap.get('id')!;
    this.loadBrewery();
    this.loadReviews();
  }

  loadBrewery() {
    this.breweryService.getBrewery(this.breweryId).subscribe(
      res => this.brewery = res,
      err => console.error(err)
    );
  }

  loadReviews() {
    this.reviewService.getReviews(this.breweryId).subscribe(
      res => this.reviews = res,
      err => console.error(err)
    );
  }
}
