import React from 'react'
// import edit/delete routes here if the buttons will be here

const CafeContainer = (props) => {

    return (

        <div id={props.id} className="cafe-card">
            viewing info for {props.name}
            <div class="image">
                <img class="cafe-image" src={props.image} width="500" />
            </div>
            <div class="cafe-info">
                {props.address}<br />
                {props.city}, {props.state}<br />
                {props.phone}
            </div>
            <div class="yelp-info">
                {props.price}<br />
                rating: {props.rating}<br />
                <a href={props.url}>view on yelp</a>
            </div>
        </div>

    )
}

export default CafeContainer