import Search from './models/Search';
import Recipe from './models/Recipe';
import { elements,renderLoader,clearLoader } from './views/base';
import * as searchView from './views/searchView';
//Global state of the App
//-Search object
//-Current recipe object
//-Shopping list object
//-Liked recipes
const state = {};

const controlSearch = async () =>{
    //1.Get the query from the view
    const query = searchView.getInput();
    if(query){
        //2.New search object and add it to state
        state.search = new Search(query);

        //3.Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try{
            //4.Search for recipes
            await state.search.getResults();
            //5.Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        }catch(err){
            alert(err);
            clearLoader();
        }

    }
}

elements.seachForm.addEventListener('submit', e =>{
    e.preventDefault(); //prevent page loading when we click search button
    controlSearch();
});
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.result,goToPage);
    }
})

// Recipe Controller
//Test data results
// const r = new Recipe(47025);
// r.getRecipe();
// console.log(r);

//Getting the id from url
const controlRecipe = async () => {
    const id = window.location.hash.replace('#','');
    console.log(id);
    if(id){
        try{
        //Prepare UI for changes

        //Create new recipe object
        state.recipe = new Recipe(id);
        //Get Recipe data
        await state.recipe.getRecipe();
        //Calculate servings and time
        state.recipe.calcTime();
        state.recipe.calcServings();
        //Render the recipe
        console.log(state.recipe);
        }catch(err){
            alert(err);
        }


    }
}

['hashchange','load'].forEach(event => window.addEventListener(event,controlRecipe));