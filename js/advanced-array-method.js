import {NETFLIX_TITLES} from "../data/netflix-titles";


// (() => {

// TWO WAYS TO FILTER AN ARRAY
// const scifiTitles = [];
// for (let title of NETFLIX_TITLES) {
//     if (title.listed_in.includes('Sci-Fi')) {
//         scifiTitles.push(title);
//     }
// }
// console.log(scifiTitles);
//
// const scifiTitles = NETFLIX_TITLES.filter(title => title.listed_in.includes('Sci-Fi'));
// console.log(scifiTitles);
//
// const scifiTitles=NETFLIX_TITLES.filter((title) => {
//     if (!title.listed_in) {
//         return false;
//     }
//     return title.listed_in.includes("Sci-Fi");
// });
// console.log(scifiTitles);
//
//

// the find method
//  const theNextGenerations = NETFLIX_TITLES.find(movie => {
//      return movie.title.toLowerCase() === 'star trek: the next generation';
//  });
// console.log(theNextGenerations);

//    const hasStarTrek = NETFLIX_TITLES.some(movie => {
//        return movie.title.toLowerCase().includes('star trek') && movie.type.toLowerCase()=== 'movie';
//    });
// if (hasStarTrek) {
//     console.log('There is at least one Star Trek movie in the list');
// })();


//the map method
const betterNetflixTitles = NETFLIX_TITLES.map((movie) => {
    const betterObject = {
        id: movie.show_id,
        type: movie.type,
        direct: movie.director,
        cast: movie.cast.split(","),
        date_added: movie.date_added,

    }

})