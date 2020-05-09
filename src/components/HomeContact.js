import ContactBanner from "../assets/Background-Contact-Form.jpg";
import React from "react";
import decoration from "../assets/Decoration.svg";
import NewForm from "./Form";

const HomeContact = ()=>{
    return (
        <section className="homeContact-container" id="homeContact">
            <div className="homeContact-banner">
                <a href="/">
                    <img src={ContactBanner} width="100%" height="100%" alt="Logo"/>
                </a>
            </div>
            <div className="homeContact-form-wrapper">
                <h1 className="homeContact-header">Skontaktuj się z nami</h1>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="70%" height="70%" alt="Decoration"/>
                </div>
                <ContactForm/>
            </div>

        </section>
    )
};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // id:
            name: "",
            email: [],
            message: "",
        };
    }
    handleChangeName = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value
        });
    };
    handleChangeEmail = (e) => {
        e.preventDefault();
        this.setState(state => {
            const email = state.email.concat(state.value);
            return {
                email,
                value:""
            }
        });

    };
    handleChangeMessage = (event) => {
        this.setState({
            ...this.state,
            message: event.target.value
        });
    };

    saveAndSend = () =>{
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        });
    };



    render() {
        return(
            <div className="homeContact-form">
                <NewForm changeName={this.handleChangeName} changeEmail={this.handleChangeEmail}
                         changeMessage={this.handleChangeMessage} saveAndSend={this.saveAndSend}/>
            </div>
        )
    }
}


export default HomeContact
