import React from 'react';
import './List.css'

function List(props) {
    return (
    <section className="List">
        <header className="List-header">
          <h2>{props.title}</h2>
        </header>
        <div id="thisIsWhereCardsGo"></div>
    <button type="button" className="List-add-button">
            + Add Random Card
    </button>
    </section>
    )
}

export default List;