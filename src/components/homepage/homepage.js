
import './homepage.css';
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";
import Header from "./header/header";


// let code = new URLSearchParams(window.location.search).get('code')

function Homepage() {

    return (
        <div className={"homewrapper"}>
            <div className="home">
                <div className={"homeheader"}>
                    <Header />
                </div>
                <div className={"homewrapper"}>
                    <Sidebar/>
                    <div className={"homedisplay"}>
                        <div className={"homedisplaywrapper"}>
                        </div>
                    </div>
                </div>
                <div className={"homefooter"}>
                    <Footer/>
                </div>

            </div>
        </div>
    );
}

export default Homepage;
