import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredinent.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] // **
  private inChangeSub: Subscription;
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.inChangeSub = this.slService.ingredientsChanged
      .subscribe(
         (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  } // ***

  ngOnDestroy(): void {
    this.inChangeSub.unsubscribe();
  }
}










  //** // = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ]; 



  // *** removed from line 18 
  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }