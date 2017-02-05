import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { CommandsService } from './commands.service';
import { Category } from '../models/category';
import { CommandItem } from '../models/command-item';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  categories: Category[] = [];
  category: Category;
  commandItems: CommandItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commandsService: CommandsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    // get categories
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;

      // get category
      this.route.params
        .switchMap((params: Params) => {
          let symbol = params['symbol'];
          this.category = this.categories.find(c => c.symbol === symbol);
          return this.commandsService.getCommandItems(symbol);
        })
        // get command items
        .subscribe(commands => this.commandItems = commands);
    });// TODO error handling
  }

}
