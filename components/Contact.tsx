'use client'

import { Box, Button, Center, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, ListItem, OrderedList, Text, Textarea, VStack } from "@chakra-ui/react"
import { DefaultSection } from '@/components'
import { MdOutlineEmail } from "react-icons/md"
import { BsPerson } from "react-icons/bs"
import { useEffect, useState } from "react"

const Contact: React.FC = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setError('')
        }, 5000)

        return () => clearTimeout(timeout)
    }, [error])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSuccess('')
        }, 5000)

        return () => clearTimeout(timeout)
    }, [success])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        if (name === 'name') setName(value)
        else if (name === 'email') setEmail(value)
        else if (name === 'message') setMessage(value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault() // Prevent default form submission
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })
            // Check if the response from backend is ok
            if (!response.ok) {
                setError('Es gab ein Problem mit der Anfrage. Bitte versuchen Sie es später erneut.')
                throw new Error('Network response was not ok')
            }

            // Parse the JSON response to see if there are any errors
            const responseData = await response.json(); // Parse the JSON response
            if (responseData.error) {
                setError('Es gab ein Problem mit der Anfrage. Bitte versuchen Sie es später erneut.')
                console.error('Problem with key: ', responseData.key)
                throw new Error(responseData.error)
            }
            // Handle response here
            console.log('Form submitted successfully', response.statusText)
            setSuccess('Anfrage erfolgreich versendet!')
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error)
            setError('Es gab ein Problem mit der Anfrage. Bitte versuchen Sie es später erneut.')
        }
    }

    return (
        <DefaultSection
            bg={true}
        >
            <Center>
                <Box
                    as="form"
                    onSubmit={handleSubmit}
                    maxW={{ base: 'full', md: 'xl' }}
                    w='full'
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    bg="white"
                    p={8}
                    py={7}>
                    <VStack spacing={5}>
                        <Heading>
                            Kontakt
                        </Heading>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <InputGroup>
                                <InputLeftElement>
                                    <BsPerson />
                                </InputLeftElement>
                                <Input type="text" name="name" placeholder="Ihr Name" onChange={handleInputChange} />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <InputGroup>
                                <InputLeftElement>
                                    <MdOutlineEmail />
                                </InputLeftElement>
                                <Input type="email" name="email" placeholder="Ihre Email-Adresse" onChange={handleInputChange} />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Nachricht</FormLabel>
                            <Textarea
                                name="message"
                                placeholder="Ihr Anliegen"
                                rows={8}
                                resize="none"
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            colorScheme="blue"
                            bg="blue.400"
                            color="white"
                            _hover={{
                                bg: 'blue.500',
                            }}
                            width="full">
                            Nachricht abschicken
                        </Button>
                        {error && <Text fontSize="sm" color="red.500">
                            {error}
                        </Text>}
                        {success && <Text fontSize="sm" color="green.500">
                            {success}
                        </Text>}
                    </VStack>
                </Box>
            </Center>
        </DefaultSection>
    )
}

export default Contact
