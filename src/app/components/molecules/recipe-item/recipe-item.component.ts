import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../../models/recipe';
import {RecipesService} from "../../../services/recipes.service";

@Component({
  selector: 'app-recipe-item[recipe]',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe!:Recipe;

  @Output()
  deleteRecipe = new EventEmitter<Recipe>();

  type?:string = '';

  constructor(private rs:RecipesService) { }

  ngOnInit(): void {
    this.type = this.rs.getRecipeType(this.recipe.type)?.label;
  }

  delete(): void {
    this.deleteRecipe.emit(this.recipe);
  }

}
