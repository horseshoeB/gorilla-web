import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from '../../models/category';

@Injectable()
export class CategoriesService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    // TODO replace api
    return CATEGORIES;
  }

}
const CATEGORIES: Observable<Category[]> = Observable.of<Category[]>([
  { name: 'Linux', symbol: 'linux' },
  { name: 'Git', symbol: 'git' },
  { name: 'npm', symbol: 'npm' }
]);