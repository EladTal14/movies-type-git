import React, {useEffect, useState} from "react";
import {Movie} from "../../interfaces/movie";
import {getMovies} from "../../services/api";
import {IPerson} from "../../interfaces/person";

type IProps = {
    formatName: () => void;
    name: string
    nums: number[]
    age?: number
    person: IPerson
}


export const MovieList = ({name, nums, age, formatName, person}: IProps) => {
    const [movies, setMovies] = useState<Movie[] | null>(null)
    const [counter, setCounter] = useState(0)
    // const buttonRef = useRef<RefObject<ReactHTMLElement<any>>(null)
    const getMoviesData = async () => {
        const moviesData = await getMovies() as Movie[]
        setMovies(moviesData)
    }
    let numOrString: any = 8
    let fixedNum: string = (numOrString as number).toFixed(4)

    useEffect(() => {
        getMoviesData()
    }, [])
    const handleCounter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        setCounter(counter + 1)
        console.log(e)
        formatName()
        // console.log(buttonRef.current)
    }

    return (
        <div>
            {!movies ? <div>wait...</div> : (
                <div>
                    <p>{numOrString}</p>
                    <p>{fixedNum}</p>
                    {/*<button ref={buttonRef} onClick={(e) => handleCounter(e)}>Counter++</button>*/}
                    <button onClick={(e) => handleCounter(e)}>Counter++</button>
                    <h2>{name}</h2>
                    {React.Children.toArray(
                        nums.map(num => <button>{num.toFixed(2)}</button>)
                    )}
                    <div>
                        {age as unknown as string}
                    </div>
                    <div>
                        {person.shoutName('rami')}
                    </div>
                </div>
            )}
        </div>
    )
};

