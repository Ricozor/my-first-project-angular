import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit {

  allRecipes: Recipe[] = [];

  constructor(private rs:RecipesService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.allRecipes = this.rs.getRecipes();
  }

  onDeleteRecipe(recipe:Recipe) {
    this.rs.deleteRecipe(recipe);
    this.getRecipes();
  }
}
