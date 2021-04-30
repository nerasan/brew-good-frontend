import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import axios from "axios"
import { Heading, Center, Text } from "@chakra-ui/react"

// const cors = "https://cors-anywhere.herokuapp.com/"

const Featured = () => {


    return (
        <>
        <Center h="100px">
            <Heading>featured coffee shop</Heading>
        </Center>
        <Center><img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/83058948_2523142304462075_2690995751965687808_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=jsRgyGA-P_AAX8PQRc_&_nc_oc=AQkDxL5RHfF_W93UO_D1Q5j5qZxuMuaa6rc2mf4TsjtdUxi3XGZ9n0Rgo3NbJsqdcAw&_nc_ht=scontent-dfw5-2.xx&oh=4942923797f68f57b558e9bc212879dd&oe=60B23701" width="1000px" /></Center>

        <Center>
            <Text mt={4}>A 2nd Cup's mission is fulfilled by hosting events to spread awareness of Houston's human trafficking issues, allowing organizations to partner together for the cafe to provide support throughout the year, and donating to these allies. The cafe also has a program called Brazen Table which provides culinary industry training to survivors of human trafficking to enable them to find employment as they rebuild their lives.</Text>
        </Center>

        <Center>
            <Text mt={4}>Purchasing a cup of coffee at A 2nd Cup is a great way to do good and feel good about your caffeine kick. As someone who is a Houston native, this coffee shop has been one of my favorites to support when I get the chance to stop by. Feel free to learn more about their events and Brazen Table program by visiting their website below.</Text>
        </Center>


        <Center mb={4}>
            <a href="https://a2ndcup.com/">
                <Button
                    type="submit"
                    colorScheme="yellow"
                    mt={4}
                    >
                        A 2nd Cup
                    </Button>
            </a>
        </Center>
        {/* <Center>
            <Link to="/donate">
                <Button
                    type="submit"
                    colorScheme="yellow"
                    mt={4}
                    >
                        visit charity website
                    </Button>
            </Link>
        </Center> */}


        </>
    )
}

export default Featured;