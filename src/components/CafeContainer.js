import React from 'react'
// import edit/delete routes here if the buttons will be here

const CafeContainer = (props) => {

    return (

        <div class="cafe-card">
            viewing info for {props.name}
            <div class="image">
                <img class="cafe-image" src={props.image} />
            </div>
            <div class="cafe-info">
                {props.address}
                {props.city}
                {props.state}
                {props.phone}
            </div>
            <div class="yelp-info">
                {props.price}
                {props.rating}
                {props.url}
            </div>

        </div>

    )
    

}

export default CafeContainer