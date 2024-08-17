import { Heading, Image, Text, Stack, HStack, Card, CardBody } from '@chakra-ui/react'
import { PiHorseLight } from 'react-icons/pi'

interface GodProps {
    id: number
    god: God
}

interface God {
    name: string
    description: string
    image: string
}

const God: React.FC<GodProps> = (godProps) => {
    return (
        <Card bg={"gray.100"}>
            <CardBody>
                <Image
                    borderRadius="lg"
                    src={godProps.god.image}
                    alt="Bild eines Gottes"
                    objectFit="contain"
                    fallback={<PiHorseLight color='black' size={"40%"} />}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='lg'>
                        <HStack>
                            <Text color='gray.600'>
                                {godProps.id + 1}.
                            </Text>
                            <Text>
                                {godProps.god.name}
                            </Text>
                        </HStack>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        fontSize="lg">
                        {godProps.god.description}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default God
