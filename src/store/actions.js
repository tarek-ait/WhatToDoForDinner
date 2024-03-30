import axiosClient from '../axiosClient'

export function searchMeals({ commit }, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then (({data}) => {
        
        commit('SearchMeals', data.meals)
    })
}

export function LetterSearch({commit}, keyLetter){
    axiosClient.get(`search.php?f=${keyLetter}`)
    .then (({data}) => {
    
        commit('LetterSearch', data.meals)
    })
}

export function searchMealsByIngredient({commit}, keyIngredient){
    axiosClient.get(`filter.php?i=${keyIngredient}`)
    .then (({data}) => {
        
        commit('SearchMealsByIngredient', data.meals)
    })
}
