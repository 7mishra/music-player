
import './footer.css';
import {IconButton} from "@mui/material";


function Footer() {
    return (
        <div className={"footer"}>
            <div className={"musicProfile"}>
                <div className={"musicprofileWrapper"}>
                    <div className={"musicthumb"}>
                        <img alt={"Music Cover"} className={"musicImg"} src={"https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg"}/>
                    </div>
                    <div className={"musicDetails"}>
                        <div className={"musicNamefooter"}>Lorem ipsum</div>
                        <div className={"musicArtistfooter"}>Lorem ipsum</div>
                    </div>
                </div>
            </div>
            <div className={"musicControl"}>
                <div className={"musiccontrolwrapper"}>
                    <div className="musicControlIcon"><IconButton color={"secondary"} ><span className="material-symbols-rounded icons">skip_previous</span></IconButton></div>
                    <div className="musicControlIcon"><IconButton color={"secondary"}><span className="material-symbols-rounded icons">play_circle</span></IconButton></div>
                    <div className="musicControlIcon"><IconButton color={"secondary"}><span className="material-symbols-rounded icons">skip_next</span></IconButton></div>
                </div>
            </div>
            <div className={"musicBuffer"}> </div>
            <div className={"playerControl"}>
                <div className={"playerControlwrapper"}>
                    <div className="playerControlIcon"><IconButton  color={"error"}><span className="material-symbols-rounded icons2">favorite</span></IconButton></div>
                    <div className="playerControlIcon"><IconButton color={"primary"}><span className="material-symbols-rounded icons2">repeat</span></IconButton></div>
                    <div className="playerControlIcon"><IconButton color={"primary"}><span className="material-symbols-rounded icons2">shuffle</span></IconButton></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
