import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: object[] = [];

  constructor() { }

  addRecipe(recipe:object): void {
    const newRecipe = { id: Date.now(), ...recipe };
    this.recipes = [newRecipe, ...this.recipes];
    console.log('this.recipes', this.recipes);
  }
}
