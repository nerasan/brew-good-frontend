import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import axios from "axios"
import { Heading, Center, Spacer } from "@chakra-ui/react"

// const cors = "https://cors-anywhere.herokuapp.com/"

const Featured = () => {


    return (
        <>
        <Center h="100px">
            <Heading>featured charity</Heading>
        </Center>
        <Center><img src="https://image.freepik.com/free-vector/woman-enjoying-cup-coffee_188398-127.jpg" /></Center>
        <Center>
            <Link to="/cafes">
                <Button
                    type="submit"
                    colorScheme="yellow"
                    mt={4}
                    >
                        visit cafe website
                    </Button>
            </Link>
        </Center>
        <Center>
            <Link to="/donate">
                <Button
                    type="submit"
                    colorScheme="yellow"
                    mt={4}
                    >
                        visit charity website
                    </Button>
            </Link>
        </Center>


        </>
    )
}

export default Featured;