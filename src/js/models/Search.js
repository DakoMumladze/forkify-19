import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults(){
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const key = 'de3bce6f53e1dae16792b476868b18af';
        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        }catch(error){
            alert(error);
        }
    
    }
}