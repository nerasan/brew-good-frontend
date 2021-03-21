import { useEffect, useState } from 'react'
import CafeContainer from './CafeContainer'
import axios from 'axios'
import { Grid, GridItem, HStack, Box, Heading, Button, Center, VStack, FormControl, InputGroup, Input } from '@chakra-ui/react'

// const cors = "https://cors-anywhere.herokuapp.com/"
const cors= "https://intense-wave-48972.herokuapp.com/"

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
            limit: 15
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
        <VStack>
            <Box h="25px"></Box>
                <Heading>find a cafe near you</Heading>
            <Box h="25px"></Box>

            {loading ? 
            <>
                <div className="home-container">
            
                <form onSubmit={handleSubmit}>
                    {/* <div className="input-field">
                        <input 
                            type="text" 
                            placeholder="enter location" 
                            value={searchTerm} 
                            onChange={handleChange}
                            />
                    </div> */}

                    <FormControl>
                        <InputGroup>
                        <Input 
                            placeholder="enter your location" 
                            aria-label="search" 
                            value={searchTerm} 
                            onChange={handleChange}>
                        </Input>
                        </InputGroup>
                    </FormControl>
                    <Box h="20px"></Box>
                    <Center>
                    <Button colorScheme="yellow" type="submit" name="action" onClick={handleSubmit}>search</Button>
                    </Center>
                    <Box h="20px"></Box>
                </form>
            </div> 
            </> 
            :
            <div>
                loading...
            </div> }

            {searchComplete ?
            <Box>
                <Center>
                <Heading>
                    viewing results in {searchTerm}
                </Heading>
                </Center>
                <Center>
                <Box h="20px"></Box>
                </Center>
                <Center>
                <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                {cafes.map(each => {
                    return <GridItem colSpan={2}>
                    <CafeContainer name={each.name} image={each.image_url} address={each.location.address1} city={each.location.city} state={each.location.state} zip={each.location.zip_code} phone={each.display_phone} price={each.price} rating={each.rating} url={each.url} id={each.id}/>
                    </GridItem>
                })}
                </Grid>
                </Center>
            </Box>
            : 
            <div>
                
            </div> }
            
        </VStack>
        </>
    )
}

export default Cafes;