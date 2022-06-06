import './login.css';

import {Button} from "@mui/material";

const AUTH_URL="https://accounts.spotify.com/authorize?" +
    "response_type=code" +
    "&" +
    "client_id=bbe0050f1f214f4e94e0738dd40d6c01" +
    "&" +
    "scope=user-modify-playback-state%20user-follow-modify%20user-read-playback-position%20user-read-recently-played%20user-read-playback-state%20streaming%20" +
    "user-top-read%20playlist-modify-public%20user-library-modify%20user-follow-read%20user-read-currently-playing%20user-library-read%20playlist-read-private%20" +
    "user-read-private%20playlist-modify-private" +
    "&" +
    "redirect_uri=http://localhost:3000/callback"

function Login(){
    return( <div className={"loginPage"}>
        <div className="now playing" id="music">
            <span className="bar n1">A</span>
            <span className="bar n2">B</span>
            <span className="bar n4">D</span>
            <span className="bar n6">F</span>
            <span className="bar n7">G</span>
            <span className="bar n8">H</span>
            <span className="bar n1">A</span>
            <span className="bar n2">B</span>
            <span className="bar n3">c</span>
            <span className="bar n4">D</span>
            <span className="bar n5">E</span>
            <span className="bar n7">G</span>
            <span className="bar n8">H</span>
            <span className="bar n1">A</span>
            <span className="bar n2">B</span>
            <span className="bar n4">D</span>
            <span className="bar n5">E</span>
            <span className="bar n7">G</span>
        </div>
        <div className={"loginBtns"}>
            <div className="loginBtn login">
                <div className={"login"}>
                    <Button href={AUTH_URL} variant="outlined" size={"medium"} color={"secondary"} className={"stbtn"}>Login</Button>
                </div>

            </div>
            <div className="loginBtn signup">
                <div className={"signup"}>
                    <Button variant="outlined" size={"medium"} className={"stbtn"}>Register</Button>
                </div>
            </div>

        </div>
    </div>);
}
export default Login;
