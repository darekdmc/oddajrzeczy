import React from "react";
import decoration from "../assets/Decoration.svg";

const homeWhoWeHelp = ()=>{
    return (
        <div className="homeWhoWeHelp-container" id="homeWhoWeHelp">
                <h1 className="homeWhoWeHelp-header">Komu pomagamy?</h1>
                <div className="page-header-main-decoration-wrapper">
                    <img src={decoration} width="13%" height="13%" alt="Decoration"/>
                </div>
                <div className="HomeWhoWeHelp-buttons">
                    <button className="HomeWhoWeHelp-button">Fundacjom</button>
                    <button className="HomeWhoWeHelp-button1">Organizacjom<br/>pozarządowym</button>
                    <button className="HomeWhoWeHelp-button">Lokalnym<br/>zbiórkom</button>

                </div>
            <Pagination/>
        </div>
    )
};


const organizations = [
    {
        title: "Zakład ubezpieczeń",
        description: "pomoc finansowa w czasie choroby dla osób zatrudnionych",
        tags: "W chwili obecnej nie jest możliwe wybranie tej organizacji"
    },
    {
        title: "MOPS",
        description: "pomoc dla osób z problemami",
        tags: "Miejski ośrodek pomocy społecznej"
    },
    {
        title: "MOPS2",
        description: "pomoc dla osób z problemami2",
        tags: "Miejski ośrodek pomocy społecznej2"
    },
    {
        title: "LOREMMOPS",
        description: "pomoc dla osób z problemami lorem",
        tags: "Miejski ośrodek pomocy społecznej lorem"
    },
    {
        title: "LOREMMOPS1",
        description: "pomoc dla osób z problemami lorem1",
        tags: "Miejski ośrodek pomocy społecznej lorem1"
    },
    {
        title: "BARKA",
        description: "pomoc dla osób z problemami alkoholowymi",
        tags: "Ośrodek pomocy społecznej dla osób uzależnionych"
    }
];

class Pagination extends React.Component {
    constructor() {
        super();
        this.state = {
            data: organizations,
            currentPage: 1,
            dataPerPage: 3

        };
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
            return <li key={i}> {element.title}</li>
        });

        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(data.length/dataPerPage); i++) {
            const el = <li key={i}
                    onClick={e=>this.handleClick(e,i)}
            className={this.state.currentPage == i ? "active" : ""}
            >
                    {i}
            </li>;
            pageNumbers.push(el)
        }

            return (
                <section>
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