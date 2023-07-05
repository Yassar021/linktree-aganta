'use client'

import { BackButton, LogoIcon } from "@/icons"
import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react"

const Home = () => {
    return(
      <Container  bgImage={'/bg.png'} bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'}  width={'100%'} height={'100vh'} maxW={'lg'}>
        <Box pt='37px' px='21px' pb='35px'>
          <Flex direction={'row'} justifyContent={'space-between'}>
            <Box py='5px' px='8px' width={'37px'} height={'36px'} bgColor={'rgba(255, 255, 255, 0.50)'} borderRadius={'10px'} backdropBlur={'blur(10px)'}>
              <BackButton />
            </Box>
            <HStack spacing={'4px'}>
              <Text my='auto' fontSize={'10px'} fontWeight={'700'} color={'rgba(0, 0, 0, 0.30)'} >aganta.id</Text>
              <LogoIcon />
            </HStack>
          </Flex>
        </Box>
      </Container>
    )
}

export default Home
