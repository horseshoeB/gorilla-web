import { Component, OnInit } from '@angular/core';

import { Category } from '../models/category';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });

  }

}
