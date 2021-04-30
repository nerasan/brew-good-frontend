import React from "react"
import { Link } from "react-router-dom"
import { Container, Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react"

const Layout = (props) => {
    return (
        <>
            <Box mt={2}>
                <Box w="500px" />
                    <Flex>
                        <Link to="/">
                            <Heading size="md">brew good.</Heading>
                        </Link>
                    
                    <Spacer />
                    
                        <Link to="/cafes"><Button colorScheme="yellow" size="sm" width="100px" mr="4">search.</Button></Link>
                        <Link to="/featured"><Button colorScheme="yellow" size="sm" width="100px" mr="4">featured.</Button></Link>
                    </Flex>
                </Box>
                <Box>
                    {props.children}
                </Box>
        </>

    )
}

export default Layout