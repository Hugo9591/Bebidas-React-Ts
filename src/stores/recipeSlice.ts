import { type StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"
import { type FavoritesSliceType } from "./favoritesSlice"

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}


export const createRecipesSlice : StateCreator<RecipesSliceType & FavoritesSliceType, [], [], RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    //1ra accion
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    //2da accion
    searchRecipes: async (filters) => {
       const drinks = await getRecipes(filters)
       set({
            drinks
       })
    },
    //3ra accion
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true//Mostrar el modal
       })
    },
    //4ta accion
    closeModal: () => {
        set({
            modal: false,//cerrar el modal
            selectedRecipe: {} as Recipe
        })
    }
})