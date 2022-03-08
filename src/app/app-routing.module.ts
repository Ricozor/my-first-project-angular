import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { ListRecipesComponent } from "./pages/list-recipes/list-recipes.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'list-recipes', component: ListRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
