import React from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                message: "Hello, guest!",
                logInOut: "Log In",
            };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState);
            console.log("Previous Props:", prevProps);
          return {
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            logInOut: prevState.logInOut === "Log In" ? "Log Out" : "Log In",
          };
        });
      }

    render () {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>
                    <button onClick={() => this.handleClick()}>
                        {this.state.message}
                    </button>
                    <button onClick={() => this.handleClick()}>
                        {this.state.logInOut}
                    </button>
                </span>
            </div>
        );
    }
}

export default NavBarSimple;