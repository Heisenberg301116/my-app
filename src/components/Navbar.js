import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.color}`} style={{ border: "solid 3px black" }}>
                <div className="container-fluid" style={{ fontWeight: 'bold' }}>
                    <a className="navbar-brand" href="#" style={{ color: props.color == "black" ? "white" : "black" }}>{props.title}</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* Now, since we are using routers to scrawl, so we no longer be using the below way for anchor tag: */}

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: props.color == "black" ? "white" : "black" }}>{props.arg1}</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: props.color == "black" ? "white" : "black" }}>{props.arg2}</a>
                            </li>


                            {/* We will use the below way for anchor tags: */}

                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home" style={{ color: props.color == "black" ? "white" : "black" }}>{props.arg1}</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about" style={{ color: props.color == "black" ? "white" : "black" }}>{props.arg2}</Link>
                            </li> */}

                        </ul>

                    </div>



                    <div class="form-check form-switch" style={{ color: props.color == "black" ? "white" : "black" }}>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle_funct} />
                        <label className="form-check-label" for="flexSwitchCheckDefault" >{props.color == "black" ? "Press to turn off dark mode" : "Press to turn on dark mode"}</label>
                    </div>

                </div>
            </nav >
        </>
    )
}