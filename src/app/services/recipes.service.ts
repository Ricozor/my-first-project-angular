import { Injectable } from '@angular/core';
import {Recipe, RecipeType} from '../models/recipe';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  private recipeTypes: RecipeType[] = [
    {
      value:'starter',
      label: 'Entrée',
    },
    {
      value:'main',
      label: 'Plat',
    },
    {
      value:'dessert',
      label: 'Dessert',
    },
  ];

  private recipes: Recipe[] = [
    {
      id:1111,
      name: 'Recette 1',
      type: 'starter',
      details: 'Détail de la recette 1',
    },
    {
      id:2222,
      name: 'Recette 2',
      type: 'main',
      details: 'Détail de la recette 2',
    },
    {
      id:3333,
      name: 'Recette 3',
      type: 'dessert',
      details: 'Détail de la recette 3',
    },
  ];

  constructor() { }

  addRecipe(recipe:Recipe): void {
    const newRecipe:Recipe = { id: Date.now(), ...recipe };
    this.recipes = [newRecipe, ...this.recipes];
    console.log('this.recipes', this.recipes);
  }

  getRecipeAllTypes():RecipeType[] {
    return this.recipeTypes;
  }

  getRecipeType(key:string):RecipeType | undefined {
    return this.recipeTypes.find(e => e.value === key);
  }

  getRecipes():Recipe[] {
    return this.recipes;
  }

  deleteRecipe(recipe:Recipe):void {
    this.recipes = this.recipes.filter(r => r.id !== recipe.id);
  }
}
