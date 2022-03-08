export interface RecipeType {
  value:string;
  label:string;
}

export interface Recipe {
  id?:number;
  name:string;
  type:string;
  details:string;
}
