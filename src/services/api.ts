//api key movies ab8c833d
//http://www.omdbapi.com/?apikey=ab8c833d&
import {moviesData} from '../mock-data/data'

export const getMovies = async () => {
    // let movies: Promise<Movie[]>
    return new Promise((resolve, reject) => {
        if (!moviesData) {
            return setTimeout(
                () => reject(new Error('Movies not found')),
                1000
            );
        }
        setTimeout(() => resolve(moviesData), 2000);
        // setTimeout(() => resolve(Object.values(moviesData)), 2000);
    })
}

export function type(num: number | string, str: string): string {
    if (typeof num === 'string') {
        return num
    }
    return ''
}