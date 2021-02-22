import React, { useState, useEffect } from 'react'
import CafeContainer from './CafeContainer'
import axios from 'axios'

// const cors = "https://cors-anywhere.herokuapp.com/"

// const config = {
//     withCredentials: true,
//     headers: {
//         'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
//     },
//     params: {
//         term: 'coffee',
//         location: 'NYC'
//     }
// }

// const getCafes = () => {
//     axios.get(cors+'https://api.yelp.com/v3/businesses/search',
//     {
//         headers: {
//             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
//         },
//         params: {
//             location: "new york city",
//             term: 'coffee',
//             limit: 25
//         }
//     })
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
// }

const Results = (props) => {

    console.log("props:", props)

    const searchResults = props.location.state.results
    console.log("cafe results on results.js:", searchResults)
    
    // const [cafes, setCafes] = useState([])
    // // getCafes()

    // const getCafes = () => {
    //     axios.get(cors+'https://api.yelp.com/v3/businesses/search',
    //     {
    //         headers: {
    //             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    //         },
    //         params: {
    //             location: "1401 mckinney st",
    //             term: 'coffee',
    //             limit: 5
    //         }
    //     })
    //     .then(response => {
    //         console.log("response:", response.data.businesses)
    //         setCafes(response.data.businesses)
    //     })
    //     .catch(error => console.log(error))
    // }

    // useEffect(()=>{
    //     getCafes()
    // }, [])

    // console.log("cafes:" , cafes)

    // const getCafes = () => {
    //     axios.get(
    //         `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
    //             headers: {
    //                 Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    //             },
    //             params: {
    //                 categories: 'coffee',
    //             }
    //         })
    //         .then((res) => {
    //             console.log("res:", res)
    //             setCafes(res.data)
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    //     }

    //     useEffect(()=>{
    //         getCafes()
    //     }, [])

    return (
        <>
            <h2>viewing search results:</h2>
            
            <div class="result-cards">
                {searchResults.map(each => {
                    return <CafeContainer name={each.name} image={each.image_url} city={each.city} state={each.state} zip={each.zip_code} phone={each.display_phone} price={each.price} rating={each.rating} url={each.url}/>
                })}
            </div>
        </>
    )
}

export default Results