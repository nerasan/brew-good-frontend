import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { Heading, Center, Text } from "@chakra-ui/react"

const Featured = () => {

    return (
        <>
        <Center h="100px">
            <Heading>featured coffee shop</Heading>
        </Center>
        <Center>
            <Heading fontSize="lg">A 2nd Cup</Heading>
        </Center>
        <Center><Text mb={4}>Houston, TX</Text></Center>
        <Center><img src="http://my-table.com/cms/wp-content/uploads/2016/02/2ndcup8-1024x683.jpg" width="800px" /></Center>

        <Center>
            <Text mt={4}>A 2nd Cup's mission is fulfilled by hosting events to spread awareness of Houston's human trafficking issues, allowing organizations to partner together for the cafe to provide support throughout the year, and donating to these allies. The cafe also has a program called Brazen Table which provides culinary industry training to survivors of human trafficking to enable them to find employment as they rebuild their lives.</Text>
        </Center>

        <Center>
            <Text mt={4}>Purchasing a cup of coffee at A 2nd Cup is a great way to do good and feel good about your caffeine kick. As someone who is a Houston native, this coffee shop has been one of my favorites to support when I get the chance to stop by. Feel free to learn more about their events and Brazen Table program by visiting their website below.</Text>
        </Center>

        <Center>
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