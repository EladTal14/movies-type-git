import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {ChangeEvent, useState} from "react";
import {InputAdornment} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';

export const Sort = () => {
    const [sort, setSort] = useState('')
    const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
        setSort(event.target.value as string);
    };
    return (

        <FormControl variant="standard" className="sort">
            <InputLabel id="demo-simple-select-filled-label">Sort By</InputLabel>
            <Select
                startAdornment={<InputAdornment position="start">
                    <SortIcon/>
                </InputAdornment>}
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={sort}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'title'}>Title</MenuItem>
                <MenuItem value={'genre'}>Genre</MenuItem>
                <MenuItem value={'Director'}>Director</MenuItem>
            </Select>
        </FormControl>

    );
};

