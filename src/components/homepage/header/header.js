import './header.css';
import {Badge, IconButton} from "@mui/material";
import Searchbar from "./searchbar/searchbar";



function Header (){

    return(
        <div className={"header"}>
            <div className={"headerwrapper"}>
                <div className={"userprofile"}>
                    <IconButton className={"sidebarI"}><span className="userIcon"><span className="material-symbols-rounded userIconIcon">person</span></span></IconButton>
                </div>
                <div className={"searchBar"}>
                    <div className={"searchBarWrapper"}>
                        <Searchbar />
                    </div>
                </div>
                <div className={"notification"}>
                    <div className={"notiwrapper"}>
                        <IconButton color={"secondary"} className={"sidebarAlert"}>
                            <Badge color="secondary" variant="dot"><span className="material-symbols-rounded useralert">notifications</span></Badge></IconButton>
                    </div>

                </div>
            </div>

        </div>
    );

}
export default Header;
