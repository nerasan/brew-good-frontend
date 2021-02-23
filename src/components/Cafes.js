import { useEffect, useState } from 'react'
import CafeContainer from './CafeContainer'
import axios from 'axios'

const cors = "https://cors-anywhere.herokuapp.com/"

const Cafes = () => {

    const [defaultCafes, setDefaultCafes] = useState([])
    const [cafes, setCafes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(false)
    const [searchComplete, setSearchComplete] = useState(false)

    const handleChange = event => {
        setSearchTerm(event.target.value)
        console.log("searchTerm:", searchTerm)
    }

    const handleSubmit = event => {
        event.preventDefault()
        getSearchedCafes()
    }

    // calls 5 default cafes in NYC for useEffect purposes (1 for testing)
    const getDefaultCafes = () => {
        axios
        .get(cors+'https://api.yelp.com/v3/businesses/search',
        {headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        params: {
            location: "new york",
            categories: "coffee",
            limit: 1
        }
        })
        .then(response=>{
            console.log("useEffect default response:", response.data.businesses)
            const defaultCafeData = response.data.businesses
            setDefaultCafes(defaultCafeData)
            setLoading(true)
            console.log("useEffect defaultCafes:", defaultCafes)
            console.log("setLoading:", setLoading)
        })
    }

    const getSearchedCafes = () => {
        axios
        .get(cors+'https://api.yelp.com/v3/businesses/search',
        {headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        params: {
            location: `${searchTerm}`,
            categories: "coffee",
            limit: 2
        }
        })
        .then((response) => {
            console.log("searched location:", {searchTerm})
            console.log("searched response:", response.data.businesses)
            const searchedCafeData = response.data.businesses
            console.log("searchedCafeData:", searchedCafeData)
            setCafes(searchedCafeData)
            setSearchComplete(true)
            console.log("cafes after set:", cafes)
            console.log("searchComplete after search api call:", searchComplete)
        })
        .catch((err) => {
            console.log("error in API search:", err)
        })
    }

    useEffect(()=>{
        getDefaultCafes()
    }, [])

    return (
        <>
            <h1>cafe show page</h1>

            {loading ? 
                <div className="home-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input 
                            type="text" 
                            placeholder="enter location" 
                            value={searchTerm} 
                            onChange={handleChange}
                            />
                    </div>
                    <button type="submit" name="action" onClick={handleSubmit}>search</button>
                </form>
            </div>  
            :
            <div>
                loading...
            </div> }

            {searchComplete ?
            <div className="home-container">
                search complete. showing results. (limited to 2 for testing)

                <div className="cafe-container">

                {cafes.map(each => {
                    return <CafeContainer name={each.name} image={each.image_url} address={each.location.address1} city={each.location.city} state={each.location.state} zip={each.location.zip_code} phone={each.display_phone} price={each.price} rating={each.rating} url={each.url} id={each.id}/>
                })}

                </div>

            </div>
            : 
            <div>
                enter a location to find cafes near you!
            </div> }
        </>
    )
}

export default Cafes;