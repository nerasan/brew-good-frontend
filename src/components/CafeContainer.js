import React from 'react'
import { Box, Badge, StarIcon, Image, Center, VStack } from '@chakra-ui/react'
// import edit/delete routes here if the buttons will be here

const CafeContainer = (props) => {

    return (
        <>

        {/* <div key={props.id} className="cafe-card">
            viewing info for {props.name}
            <div className="image">
                <img className="cafe-image" src={props.image} width="500" />
            </div>
            <div className="cafe-info">
                {props.address}<br />
                {props.city}, {props.state}<br />
                {props.phone}
            </div>
            <div className="yelp-info">
                {props.price}<br />
                rating: {props.rating}<br />
                <a href={props.url}>view on yelp</a>
            </div>
        </div> */}
    <>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        
            <Image 
                src={props.image} 
                alt="cafe image" 
                fit="cover"
                boxSize="sm" />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <a href={props.url} target="_blank">
                            <Badge borderRadius="full" px="2" colorScheme="yellow">
                                yelp
                            </Badge>
                        </a>
                        <Box 
                            color="yellow.800"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                            >
                                {props.price} &bull; {props.rating}
                        </Box>
                    </Box>

                    <Box 
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                        >
                            {props.name}
                    </Box>

                    <Box>
                        {props.address}
                    </Box>
                    <Box>
                        {props.city}, {props.state}
                    </Box>
                </Box>
        </Box>
        <Box h="10px"></Box>
        </>

        </>
    )
}

export default CafeContainer

//  {/* {Array(5)
//                                 .fill("")
//                                 .map((_, i) => (
//                                     <StarIcon
//                                         key={i}
//                                         color={i < props.rating ? "yellow.500" : "gray.300"}
//                                     />
//                                 ))}