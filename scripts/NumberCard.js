import React from 'react';

const NumberCard = function (props) {
    return (
        <div id={props.id} className="card-container" style={{ color: props.color }} onClick={props.cardClickHandler}>
            <span>
                {
                    /* TODO 3:
                      Render the value of prop "number" as created in the above TODO 2
                    */
                   props.number
                }
            </span>
        </div>
    )
}

export default NumberCard;