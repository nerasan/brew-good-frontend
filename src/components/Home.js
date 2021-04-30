import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import axios from "axios"
import { Box, Heading, Center, Stack, Text } from "@chakra-ui/react"

const cors = "https://cors-anywhere.herokuapp.com/"

const Home = () => {

    function Feature({title, desc, image, ...rest}) {
        return (
            <Box maxW="2xl" p={2} {...rest}>
                <Center>
                    <Heading fontSize="xl">{title}</Heading>
                </Center>
                <Center mt={4}>
                    <img src={image} width="400px" />
                </Center>
                <Center>
                    <Text mt={4}>{desc}</Text>
                </Center>
            </Box>
        )
    }


    return (
        <>
        <Center h="100px">
            <Heading>grab a cup for a cause</Heading>
        </Center>
        <Center><img src="https://image.freepik.com/free-vector/woman-enjoying-cup-coffee_188398-127.jpg" /></Center>

        <Stack spacing={8}>
            <Center>
                <Link to="/cafes">
                    <Button
                        type="submit"
                        colorScheme="yellow"
                        mt={4}
                        >
                            find a cup of coffee near you
                        </Button>
                </Link>
            </Center>

            <Center>
                <Heading mt={10} as="h3" size="lg">
                    featured cafe
                </Heading>
            </Center>

            <Center>
                <Feature
                    title="A 2nd Cup"
                    image="https://www.papercitymag.com/wp-content/uploads/2020/11/Screenshot-2020-11-23-at-11.13.34-PM.png"
                    desc="A non-profit coffee shop based in Houston, Texas working to end human trafficking. The cafe's cause is to raise awareness of the issues in Houston and develop resources that help create a second chance for survivors. A 2nd Cup accomplishes their mission by educating through frequent events, partnering with allies to take action, and donating to short and long-term survivor aftercare programs. Learn more about their cause by visiting the button below."
                    />
            </Center>

            <Center>
                <image src="" alt="cafe" />
            </Center>

        </Stack>

        <Center mb={4}>
            <Link to="/featured">
                <Button
                    type="submit"
                    colorScheme="yellow"
                    mt={4}
                    >
                        learn more
                    </Button>
            </Link>
        </Center>


        </>
    )
}

export default Home;