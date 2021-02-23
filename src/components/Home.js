import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import axios from 'axios'

const cors = "https://cors-anywhere.herokuapp.com/"

const Home = () => {


    return (
        <>
            <h2>welcome to brew good!</h2>
            <Link to="/cafes">
                <Button
                    type="submit"
                    mt={4}
                    >
                        find a cup of coffee near you
                    </Button>
            </Link>
        </>
    )
}

export default Home;