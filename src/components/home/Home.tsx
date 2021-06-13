import {MovieList} from "../MovieList/MovieList";
import {Header} from "../header/Header";
import {Actions} from "./actions/Actions";
import {IPerson} from "../../interfaces/person";

export const Home = () => {
    const nums: number[] = [1.123, 2.23454, 3.567, 4.756, 5.6, 7]
    const formatName = (): void => {
        console.log('this is this', this)
    }
    const rami: IPerson = {
        id: '1234',
        shoutName: (name) => name.charCodeAt(1) as number
    }
    return (
        <div>
            <Header/>
            <Actions/>
            <MovieList name="elad" nums={nums} age={8} formatName={() => formatName()} person={rami}/>
        </div>
    );
}