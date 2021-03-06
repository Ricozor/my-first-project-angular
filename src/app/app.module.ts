import { NgModule } from '@angular/core';
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { ListRecipesComponent } from './pages/list-recipes/list-recipes.component';
import { RecipeItemComponent } from './components/molecules/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddRecipeComponent,
    HeaderComponent,
    FooterComponent,
    ListRecipesComponent,
    RecipeItemComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
