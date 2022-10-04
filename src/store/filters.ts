import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {
  state(){
    return {
        country: null as null | string,
        scores: null as null | string
    }
  },
  actions:{
    changeCountry(country:null | string): void{
        this.country = country
    },
    changeScores(scores: null | string): void{
        this.scores = scores
    },
  }
});
