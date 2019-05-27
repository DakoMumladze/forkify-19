// de3bce6f53e1dae16792b476868b18af 
// https://www.food2fork.com/api/search

import Search from './models/Search';
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
        //4.Search for recipes
        await state.search.getResults();
        //5.Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
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