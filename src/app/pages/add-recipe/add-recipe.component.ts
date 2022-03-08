import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {RecipeType} from "../../models/recipe";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipeTypes: RecipeType[] = []

  constructor(private rs: RecipesService) { }

  ngOnInit(): void {
    this.recipeTypes = this.rs.getRecipeAllTypes();
  }

  addRecipe(form:any) {
    this.rs.addRecipe(form.value);
    form.reset();
  }

}
