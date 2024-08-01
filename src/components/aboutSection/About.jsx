import React, { useState } from 'react';
import { Box, Text, Stack, Badge, Flex, Image, Button } from '@chakra-ui/react';
import VerticalLineWithText from './VerticalLineWithText';
import myImage from '../../images/myImage.png'
const About = () => {
    const [isShow,setIsShow] = useState(false);
  return (
    <Flex
  direction="column"
  mx="auto"
    overflow="hidden"
   w="90%"
  justifyContent="center"
  alignItems="center"
  p="40px 0px"
  className='about section'
>
  <Flex w="90%" direction="column" justifyContent="center" alignItems="center" gap="20px">
    <Text fontSize="4xl" fontWeight="bold" mb="4" data-aos="zoom-in">About Me</Text>
    <Flex w={'100%'} p={'10px 0px'} direction={['column','column','row','row']} pb={'20px'}   alignItems={'center'} data-aos="fade-up-right">
        <Image p={'10px 20px'}  borderRight={["none","none","5px solid gray","5px solid gray"]} id='home-img'  w={'250px'} src={myImage} />
        <Flex direction={'column'} w={['100%','100%','100%','35%']} p={'10px 5px'} >
            <Text id='user-detail-name' borderLeft={["5px solid gray","5px solid gray","none","none"]} fontSize={['2xl','3xl','4xl','4xl']} fontWeight={'700'} pl="10px" pb={'10px'}>
            Shrihari Jadhav
            </Text>
            <Text fontSize={'larger'} fontWeight={'700'} pl="10px" pb={'5px'}>
            You can call me Harry ! 
            </Text>
            <Text fontWeight={'500'} pl="10px">
            No, I can't do magic, but I can code up some pretty magical solutions. <Text as={'span'}>🧙‍♂️💻😉</Text>
            </Text>
        </Flex>
    </Flex>
    <Stack spacing={3} data-aos="fade-up-left" id='user-detail-intro'>
      <Text fontSize="large" >
        <Text as={'span'}></Text><Badge  fontSize="medium" colorScheme="teal" wordBreak="break-word">FULL STACK WEB DEVELOPER</Badge> with nearly 2 years as a System Engineer at Tata Consultancy Services.
      </Text>
      <Text fontSize="large">
        Transitioned to web development through a 1-year intensive <Badge fontSize="medium" colorScheme="green" wordBreak="break-word">MERN STACK BOOTCAMP</Badge> at Masai School. Skilled in creating dynamic, user-friendly web applications using <Badge fontSize={'medium'} colorScheme="blue" wordBreak="break-word">REACT</Badge>, <Badge colorScheme="blue" wordBreak="break-word" fontSize={'medium'} >NODE.JS</Badge>, <Badge colorScheme="blue" wordBreak="break-word" fontSize={'medium'} >EXPRESS.JS</Badge>, and <Badge colorScheme="blue" wordBreak="break-word" fontSize={'medium'} >MONGODB</Badge>.
      </Text>
      {
        isShow && (
            <Flex direction={'column'}>
            <Text fontSize="large">
            With Strong foundation in <Badge  fontSize="medium" colorScheme="red" wordBreak="break-word">JAVASCRIPT</Badge>, <Badge  fontSize="medium" colorScheme="red" wordBreak="break-word">HTML5</Badge>, and <Badge colorScheme="red" wordBreak="break-word" fontSize={'medium'} >CSS</Badge>, crafting seamless and engaging user experiences.  I can easily adapt to any tech stack in web development as per requirement <Badge colorScheme="purple" wordBreak="break-word" fontSize={'medium'} >in a short time</Badge> with <Badge colorScheme="purple" wordBreak="break-word" fontSize={'medium'} >minimal training.</Badge> 
          </Text>
          <br/>
            <Text fontSize="large">
            Currently, I am expanding my skill set by learning <Badge  fontSize="medium" colorScheme="teal" wordBreak="break-word">Next.js</Badge>,
            <Badge  fontSize="medium" colorScheme="teal" wordBreak="break-word">MySQL</Badge>, <Badge  fontSize="medium" colorScheme="teal" wordBreak="break-word">serverless technologies.</Badge>
            </Text>

            </Flex>
        )
      }
      <Text fontSize="large">
      Eager to contribute my talent and experience as a <Badge  fontSize="medium" colorScheme="red" wordBreak="break-word">REACT JS DEVELOPER</Badge> with <Badge  fontSize="medium" colorScheme="red" wordBreak="break-word">backend expertise</Badge> , supported by a robust skill set and a portfolio of unique, innovative projects.
      </Text>
      <Button m={'10px 0px'} colorScheme='yellow' cursor={'pointer'} onClick={()=>{setIsShow(!isShow)}} maxW={'max-content'} as={'span'} >{isShow?'Read less':'Read more'}</Button>

    </Stack>
  </Flex>

   
</Flex>

  );
};

export default About;
