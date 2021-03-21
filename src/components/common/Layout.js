import React from "react"
import { Link } from "react-router-dom"
import { Container, Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react"

const Layout = (props) => {
    return (
        <>
            <Box>
                <Box w="500px" />
                    <Flex>
                        <Link to="/">
                            <Heading size="md">brew good.</Heading>
                        </Link>
                    
                    <Spacer />
                    
                        <Link to="/register"><Button colorScheme="yellow" size="sm" width="100px" mr="4">register</Button></Link>
                        <Link to="/login"><Button colorScheme="yellow" size="sm" width="100px" mr="4">login</Button></Link>
                    </Flex>
                </Box>
                <Box>
                    {props.children}
                </Box>
        </>

    )
}

export default Layout