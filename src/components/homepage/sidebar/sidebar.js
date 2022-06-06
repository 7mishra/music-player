import {IconButton} from "@mui/material";
import './sidebar.css'
function Sidebar(){
    return(
        <div className={"homesidebar"}>
            <div className={"homesidebarwrapper"}>
                <IconButton color={"secondary"} className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">home</span></IconButton>
                <div className={"gapIcon"}/>
                <IconButton color={"secondary"}  className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">music_note</span></IconButton>
                <div className={"gapIcon"}/>
                <IconButton color={"secondary"}  className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">podcasts</span></IconButton>
                <div className={"gapIcon"}/>
                <IconButton color={"secondary"}  className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">equalizer</span></IconButton>
                <div className={"gapIcon"}/>
                <IconButton color={"secondary"}  className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">tune</span></IconButton>
                <div className={"gapIcon"}/>
                <IconButton color={"secondary"}  className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">settings</span></IconButton>
                <div className={"gapIcon"}/>
                <IconButton color={"secondary"}  className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">video_library</span></IconButton>
                <div className={"gapIcon"}/>
                <IconButton color={"secondary"}  className={"sidebarI"}><span className="material-symbols-rounded sidebaricons">radio</span></IconButton>
                <div className={"gapIcon"}/>
            </div>
        </div>
    );
}
export default Sidebar;