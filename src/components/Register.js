import React from 'react'
import { Box, useColorMode, Stack, Input, FormControl, InputGroup, InputLeftElement, Icon, Button, Divider, FormHelperText } from "@chakra-ui/react"

const Register = () => {
    const { colorMode } = useColorMode()
    return (

        <Box w="350px" bg={colorMode === "light" ? "gray.200" : "gray.600" } p={3} boxShadow="sm" rounded="lg">

        <form action="submit">
            <Stack spacing={4}>
            <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement children={<Icon name="info" />} />
                    <Input
                        type="name"
                        placeholder="first name"
                        aria-label="first name"
                        />
                </InputGroup>
            </FormControl>

            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<Icon name="info" />} />
                    <Input
                        type="name"
                        placeholder="last name"
                        aria-label="last name"
                        />
                </InputGroup>
            </FormControl>

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
                >
                    sign up
                </Button>
            </Stack>
        </form>

        </Box>
    )
}

export default Register;