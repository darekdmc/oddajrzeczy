import React from "react";

export default class NewForm extends React.Component{

    constructor(props) {
        super(props);

}
render(){
    return (
        <>
            <form>
                <div className="HomeContact-twoColumns">
                    <div className="HomeContact-Name-wrapper">
                        <label className="HomeContact-labels">Wpisz swoje imię</label>
                        <input className="HomeContact-name" onChange={this.props.changeName}></input>
                    </div>
                    <div className="HomeContact-email-wrapper">
                        <label className="HomeContact-labels">Wpisz swój email</label>
                        <input className="HomeContact-mail" onChange={this.props.changeEmail}></input>
                    </div>
                </div>
                <div className="HomeContact-message-wrapper">
                    <label className="HomeContact-labels">Wpisz swoją wiadomość</label>
                    <textarea className="HomeContact-message" name="nazwa" cols="x" rows="y" onChange={this.props.changeMessage}></textarea>
                </div>
            </form>
            <button className="HomeContact-button" onClick={this.props.saveAndSend}>Wyślij</button>
        </>
    )}
};
