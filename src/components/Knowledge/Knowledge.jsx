import React from 'react'
import './Knowledge.css'
import knowledge from './knowledgeList' 

const Knowledge = () => {
    return (
        <div className="knowledgeContainer">
            <h2>Conocimientos</h2> 
            <ul className="technologiesList">
                {
                    knowledge.map(({technology, icon}, i) => 
                        <li key={i}>
                            <img className="technologyImage" src={icon} alt={technology} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Knowledge
