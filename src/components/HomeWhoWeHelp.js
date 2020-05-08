import React from "react";
import decoration from "../assets/Decoration.svg";
import {organizations, organizationsDescription} from "./organizationData"
import {fundations, fundationDescription} from "./fundationsData"
import {localCollections, localCollectionDescription} from "./collectionsData"

const homeWhoWeHelp = ()=>{
    return (
        <div className="homeWhoWeHelp-container" id="homeWhoWeHelp">
                <h1 className="homeWhoWeHelp-header">Komu pomagamy?</h1>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="13%" height="13%" alt="Decoration"/>
                </div>
                <div className="HomeWhoWeHelp-pagination-wrapper">
                <Pagination/>
                </div>
        </div>
    )
};



class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: organizations,
            currentPage: 1,
            dataPerPage: 3,
            descriptions: organizationsDescription

        };
    }
        onClick(e,buttonNumber) {
            if (buttonNumber === 1) {
                this.setState({
                    data: fundations,
                    currentPage: 1,
                    descriptions: fundationDescription
                })
                }
            else if (buttonNumber === 2) {
                    this.setState({
                        data: organizations,
                        currentPage: 1,
                        descriptions: organizationsDescription
                    })
                }
            else if (buttonNumber === 3) {
                    this.setState({
                        data: localCollections,
                        currentPage: 1,
                        descriptions: localCollectionDescription
                    })
                }
            }

        handleClick = (event , i) => {
        this.setState({
            currentPage: i
        })
        };
        render() {
        const {data, currentPage, dataPerPage} = this.state;

        const indexOfLast = currentPage * dataPerPage;
        const indexOfFirst = indexOfLast - dataPerPage;
        const currentData = data.slice(indexOfFirst, indexOfLast);

        const elements = currentData.map((element, i) => {
            return (
                <li key={i}>
                    <div className="HomeWhoWeHelp-li-wrapper">
                        <div className="HomeWhoWeHelp-li-title">{element.title}</div>
                        <div className="HomeWhoWeHelp-li-description">{element.description}</div>
                    </div>
                    <div className="HomeWhoWeHelp-li-tags">{element.tags}</div>
                </li>)
        });

        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(data.length/dataPerPage); i++) {
            const el = <li key={i}
                    onClick={e=>this.handleClick(e,i)}
            className={this.state.currentPage === i ? "active" : ""}
            >
                    {i}
            </li>;
            pageNumbers.push(el)
        }
 //       const filteredPageNumbers = pageNumbers.filter(pageNumbers => pageNumbers.length>1);

            return (
                <section>
                    <div className="HomeWhoWeHelp-buttons">
                        <button className="HomeWhoWeHelp-button" onClick={e => this.onClick(e,1)}>Fundacjom</button>
                        <button className="HomeWhoWeHelp-button1" onClick={e => this.onClick(e,2)}>Organizacjom<br/>pozarządowym</button>
                        <button className="HomeWhoWeHelp-button" onClick={e => this.onClick(e,3)}>Lokalnym<br/>zbiórkom</button>
                    </div>
                    <div className="HomeWhoWeHelp-descriptions-wrapper">
                    <div className="HomeWhoWeHelp-descriptions">{this.state.descriptions}</div>
                    </div>
                    <ul className="HomeWhoWeHelp-pagination">
                        {elements}
                    </ul>
                    <ul className="HomeWhoWeHelp-pagination-numbers">
                        {pageNumbers}
                    </ul>
                </section>
            )
        }

}
export default homeWhoWeHelp