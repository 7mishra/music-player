import './searchbar.css'
import {FormControl, IconButton, Input, InputAdornment} from "@mui/material";
import {useState} from "react";

function Searchbar(){
    const [search, setSearch] = useState("");
    return(
        <div className={"srchBar"}>
            <div className={"undoRedo"}>
                <IconButton color={"secondary"}  className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">arrow_back_ios_new</span></IconButton>
                <IconButton color={"secondary"}  className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">arrow_forward_ios</span></IconButton>

            </div>
            <div className={"srchBarWrapper"}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <Input className={"inputSB"}
                           onChange={val => setSearch(val.target.value)}
                           disableUnderline
                           id="standard-adornment-amount"
                           startAdornment={<InputAdornment position="start"><IconButton ><span className="material-symbols-rounded iconsSB">search</span></IconButton></InputAdornment>}
                           endAdornment={<InputAdornment position="start"><IconButton onClick={val => setSearch("")}><span className="material-symbols-rounded iconsSB">cancel</span></IconButton></InputAdornment>}
                    />
                </FormControl>
            </div>
        </div>
    );
}

export default Searchbar;
