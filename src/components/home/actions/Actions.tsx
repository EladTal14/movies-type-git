import {Filter} from "./Filter";
import {Sort} from "./Sort";
import './actions.scss'

export const Actions = () => {
    return (
        <div className="actions">
            <Filter/>
            <Sort/>
        </div>
    );
};

