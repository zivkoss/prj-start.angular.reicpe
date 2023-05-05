import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
           'Tasty Schnitzel',
           'A super-tasty Schnitzel - just awesome!',
           'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',[]),
        new Recipe('Big Fat Burger',
           'What else you need to say?',
           'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',[])
      ];
    
    getRecipes() {
        return this.recipes.slice();
    }
}