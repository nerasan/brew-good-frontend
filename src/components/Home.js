import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const cors = "https://cors-anywhere.herokuapp.com/"

const Home = () => {

    let history = useHistory()

    const [cafes, setCafes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [searchLocation, setSearchLocation] = useState("")

    // useEffect to get all cafes as response - based on location search
    useEffect(()=>{
        axios
            .get(cors+'https://api.yelp.com/v3/businesses/search',
            {headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
            params: {
                location: `${searchLocation}`,
                term: "coffee",
                limit: 5
            }
            })
            .then(response=>{
                console.log("response:", response.data.businesses)
                setCafes(response.data.businesses)
            })
            .catch(error=>{
                console.log(error)
            })
    }, [searchLocation])

    // const submitSearch = event => {
    //     axios
    //     .get(cors+'https://api.yelp.com/v3/businesses/search',
    //     {headers: {
    //         Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    //     },
    //     params: {
    //         location: `${searchLocation}`,
    //         term: "coffee",
    //         limit: 5
    //     }
    //     })
    //     .then(response=>{
    //         console.log("response:", response.data.businesses)
    //         setCafes(response.data.businesses)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // }

    const handleChange = event => {
        setSearchTerm(event.target.value)
        console.log("search term:", searchTerm)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log("searchTerm after submit:", searchTerm)
        setSearchLocation(searchTerm)
        console.log("search location after submit:", searchLocation)
    }


    return (
        <>
            <h2>welcome to brew good!</h2>

            <h3>results of search limited to 5</h3>
            <ul>
                {cafes.map(each=>(
                    <li key={each.id}>{each.name}</li>
                ))}
            </ul>

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
{/* 
            <form onSubmit={handleSubmit}>
                search:
                <input 
                    type="text" 
                    name="location" 
                    placeholder={"search location"}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)} />
                <input type="button" value="search" onClick={handleSubmit} />
            </form> */}


        </>
    )
}

export default Home;