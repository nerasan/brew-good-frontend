import React from 'react'
import { Heading, Stack, HStack, VStack, StackDivider, Box, useColorMode, Input, FormControl, InputGroup, InputLeftElement, Icon, Button, Divider, FormHelperText } from "@chakra-ui/react"

const Login = () => {
    const { colorMode } = useColorMode()
    return (

        <VStack>

        <Box h="25px"></Box>
            <Heading>log in</Heading>
        <Box h="25px"></Box>


        <Box w="350px" bg={colorMode === "light" ? "yellow.100" : "yellow.600" } p={3} boxShadow="sm" rounded="lg">

        <form action="submit">
            <Stack spacing={4}>

            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<Icon name="email" />} />
                    <Input
                        type="email"
                        placeholder="email"
                        aria-label="email"
                        />
                </InputGroup>
            </FormControl>

            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<Icon name="lock" />} />
                    <Input
                        type="password"
                        placeholder="password"
                        aria-label="password"
                        />
                </InputGroup>
            </FormControl>

            <Button
                type="submit"
                variant="solid"
                boxShadow="sm"
                hover={{ boxShadow: "md" }}
                active={{ boxShadow: "lg" }}
                colorScheme="yellow"
                >
                    login
                </Button>
            </Stack>
        </form>

        </Box>
        </VStack>
    )
}

export default Login;