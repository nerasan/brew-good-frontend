import React, { useEffect, useState } from 'react'
import CafeContainer from './CafeContainer'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const cors = "https://cors-anywhere.herokuapp.com/"

const Home = () => {

    let history = useHistory()
    let results = []

    const [cafes, setCafes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [location, setLocation] = useState("")
    // const [searchResults, setSearchResults] = useState([])

    // const [didMount, setDidMount] = useState(false)

    // useEffect(()=>{
    //     setDidMount(true)
    //     return () => setDidMount(false)
    // }, [])

    // if(!didMount) {
    //     return null
    // }

    // useEffect to get all cafes as response - based on location search
    // useEffect(()=>{
    //     axios
    //         .get(cors+'https://api.yelp.com/v3/businesses/search',
    //         {headers: {
    //             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    //         },
    //         params: {
    //             location: `${searchLocation}`,
    //             term: "coffee",
    //             limit: 5
    //         }
    //         })
    //         .then(response=>{
    //             console.log("response:", response.data.businesses)
    //             setCafes(response.data.businesses)
    //         })
    //         .catch(error=>{
    //             console.log(error)
    //         })
    // }, [searchLocation])

    // calls and sets cafe to 5 LA coffee shops
    useEffect(()=>{
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
        .then(response=>{
            setCafes(response.data.businesses)
            console.log("useEffect LA response:", response.data.businesses)
            console.log("useEffect LA cafes:", cafes)
        })
    }, [location])

    const submitSearch = event => {
        axios
        .get(cors+'https://api.yelp.com/v3/businesses/search',
        {headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        params: {
            location: `${searchTerm}`,
            categories: "coffee",
            limit: 5
        }
        })
        .then(response=>{
            setCafes(response.data.businesses)
            console.log("search location:", {searchTerm})
            setLocation({searchTerm})
            console.log("setlocation:", location)
            console.log("submitSearch response:", response.data.businesses)
            console.log("submitSearch cafes:", cafes)
        })
        redirectFunction()
    }

    const redirectFunction = (state) => {
        history.push({
            pathname: '/results',
            state: {
                results: cafes,
                location: location
            }
        })
    }

    const handleChange = event => {
        setSearchTerm(event.target.value)
        console.log("search term:", searchTerm)
    }

    // const handleSubmit = event => {
    //     event.preventDefault()
    //     console.log("searchTerm after submit:", searchTerm)
    //     console.log("location before setting:", location)
    //     // setSearchLocation not working (?) - didnt work when manually put a city in
    //     setLocation(searchTerm)
    //     console.log("search location after submit:", location)
    //     submitSearch()
    // }


    return (
        <>
            <h2>welcome to brew good!</h2>
            <form onSubmit={submitSearch}>
                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder="enter location" 
                        value={searchTerm} 
                        onChange={handleChange}
                        />
                </div>
                <button type="submit" name="action" onClick={submitSearch}>search</button>
            </form>

            <h3>results of search limited to 5</h3>
            <ul>
                {cafes.map(each=>{
                    <li key={each.id}>{each.name}</li>
                })}
            </ul>

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