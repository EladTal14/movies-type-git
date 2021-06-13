import TextField from "@material-ui/core/TextField";
import {InputAdornment} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


export const Filter = () => {
    return (
        <div>
            <TextField label="Filter by"
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <SearchIcon/>
                               </InputAdornment>
                           ),
                       }}
            />
        </div>
    );
};

