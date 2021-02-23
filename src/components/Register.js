import React, { useState } from 'react'
import axios from 'axios'
import { Box, useColorMode, Stack, Input, FormControl, InputGroup, InputLeftElement, Icon, Button, Divider, FormHelperText } from "@chakra-ui/react"
import { register } from '../services/auth.service'

// need to set up validators later for username, email, password

const Register = () => {
    const { colorMode } = useColorMode()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [city, setCity] = useState('')
    const [defaultState, setDefaultState] = useState('')
    const [about, setAbout] = useState('')
    const [successful, setSuccessful] = useState(false)

    // onchange username
    const onChangeUsername = (event) => {
        const username = event.target.value 
        setUsername(username)
    }

    // onchange email
    const onChangeEmail = (event) => {
        const email = event.target.value 
        setEmail(email)
    }

    // onchange password
    const onChangePassword = (event) => {
        const password = event.target.value 
        setPassword(password)
    }

    // onchange city
    const onChangeCity = (event) => {
        const city = event.target.value 
        setCity(city)
    }

    // onchange state
    const onChangeState = (event) => {
        const defaultState = event.target.value 
        setDefaultState(defaultState)
    }

    // onchange about (should be a hidden form and submit default message)
    const onChangeAbout = (event) => {
        const about = event.target.value
        setAbout(about)
    }

    const handleSignup = (event) => {
        event.preventDefault()
        setSuccessful(false)
        // validate fields here
        register(username, email, password, city, defaultState, about)
        .then((response) => {
            setSuccessful(true)
        })
        .catch((err) => {
            console.log("signup error:", err)
        })
    }

    return (

        <Box w="350px" bg={colorMode === "light" ? "gray.200" : "gray.600" } p={3} boxShadow="sm" rounded="lg">

        <form onSubmit={handleSignup}>
            <Stack spacing={4}>

            <FormControl isRequired>
                <InputGroup>
                    <InputLeftElement children={<Icon name="info" />} />
                    <Input
                        placeholder="username"
                        aria-label="username"
                        value={username}
                        onChange={onChangeUsername}
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
                        value={email}
                        onChange={onChangeEmail}
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
                        value={password}
                        onChange={onChangePassword}
                        />
                </InputGroup>
            </FormControl>

            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<Icon name="info" />} />
                    <Input
                        placeholder="city"
                        aria-label="city"
                        value={city}
                        onChange={onChangeCity}
                        />
                </InputGroup>
            </FormControl>

            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<Icon name="info" />} />
                    <Input
                        placeholder="state"
                        aria-label="state"
                        value={defaultState}
                        onChange={onChangeState}
                        />
                </InputGroup>
            </FormControl>

            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<Icon name="info" />} />
                    <Input
                        placeholder="enter something about you!"
                        aria-label="about"
                        value={about}
                        onChange={onChangeAbout}
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