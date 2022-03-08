import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(private rs: RecipesService) { }

  ngOnInit(): void {
  }

  addRecipe(form:any) {
    this.rs.addRecipe(form.value);
    form.reset();
  }

}
