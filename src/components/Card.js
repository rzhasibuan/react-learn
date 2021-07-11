import React from 'react';

function Card(props) {
    console.log(props);
    return(
        <div className="card">
            <img src={props.content.imgUrl} alt="cat picures" className="card-img-top" />
            <div className="card-body">
                <h4>{props.content.title}</h4>
                <small className="text-muted">{props.content.publisPost}</small>
            </div>
        </div>
    )
}

export default Card;