// src/app/components/search/search.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreweryService } from '../brewery.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  imports: [
    BrowserModule, FormsModule // <<<< And here
  ],
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  breweries: any[] = [];
  query: any = { by_city: '', by_name: '', by_type: '' };

  constructor(private breweryService: BreweryService, private router: Router) { }

  ngOnInit(): void { }

  search() {
    this.breweryService.getBreweries(this.query).subscribe(
      res => this.breweries = res,
      err => console.error(err)
    );
  }

  navigateToBrewery(id: string) {
    this.router.navigate(['/brewery', id]);
  }
}
