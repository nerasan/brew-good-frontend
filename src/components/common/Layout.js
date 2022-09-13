import React from "react"
import { Link } from "react-router-dom"
import { Text, HStack, Box, Stack, Flex, Spacer, Heading, Button } from "@chakra-ui/react"

const Layout = (props) => {

    return (
        <>
            <Box mt={2}>
                <Box w="500px" />
                    <Flex>
                        <Link to="/">
                            <HStack>
                            {/* <img src="https://icons-for-free.com/iconfiles/png/512/colored+hot+drink-1319964985173450614.png" width="25px" /> */}
                            <Heading size="md">brew good</Heading>
                            </HStack>
                        </Link>
                    
                    <Spacer />
                    
                        <Link to="/cafes"><Button colorScheme="yellow" size="sm" width="100px" mr="4">search</Button></Link>
                        <Link to="/featured"><Button colorScheme="yellow" size="sm" width="100px" mr="4">featured</Button></Link>
                    </Flex>
                </Box>
                <Box>
                    {props.children}
                </Box>

                <Box as="footer"
                     role="contentinfo"
                     mx="auto"
                     py="12"
                     px={{
                         base: '4',
                         md: '8',
                     }}
                     >

                         <Stack>
                             <Stack direction="row" spacing="4" align="center" justify="space-between">
                                 <HStack>
                                    {/* <img src="https://icons-for-free.com/iconfiles/png/512/colored+hot+drink-1319964985173450614.png" width="25px" />
                                    <Text>brew good</Text> */}
                                    <Text fontSize="sm" alignSelf={{
                                        base: 'center',
                                        sm: 'start'
                                    }}>
                                    &copy; {new Date().getFullYear()} brew good. all rights reserved.
                            </Text>
                                </HStack>

                                 <HStack>
                                    {/* about page link - to uncomment when created */}
                                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/About_icon_%28The_Noun_Project%29.svg/1200px-About_icon_%28The_Noun_Project%29.svg.png" alt="about page icon" width="25px" /> */} 
{/* 
                                    <a href="https://salima.netlify.app" target="_blank"><img src="https://image.flaticon.com/icons/png/512/43/43500.png" alt="portfolio icon" width="25px" /></a> */}

                                    <a href="https://github.com/nerasan" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" width="25px" /></a></HStack>

                             </Stack>
                             {/* <Text fontSize="sm" alignSelf={{
                                 base: 'center',
                                 sm: 'start'
                             }}>
                                &copy; {new Date().getFullYear()} brew good. all rights reserved.
                            </Text> */}
                         </Stack>

                </Box>
        </>

    )
}

export default Layout