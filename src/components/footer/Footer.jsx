import React from 'react';
import { Box, Text, Link, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box fontSize={'small'} w={'100%'} bg="gray.700" color="white" py={3}>
      <Flex 
        direction={{ base: 'column-reverse', md: 'row' }} 
        justifyContent="space-between" 
        alignItems="center" 
        mx="auto" 
        w={['90%','80%','80%','80%']}
        px={4}
        gap={'10px'}
      >
        <Text mb={{ base: 1, md: 0 }}  >© {new Date().getFullYear()} Shrihari Jadhav. All rights reserved.</Text>
        
        <Flex >
        <Link 
            href="tel:+919970758021" // Replace with your actual phone number
            isExternal 
            mx={2}
        >
            Phone
        </Link>
        <Link href="mailto:mr.shrihari212@gmail.com" mx={2}>
            Email
        </Link>
        <Link href="https://github.com/shriharijadhav" isExternal mx={2}>
            GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/shriharijadhav126/" isExternal mx={2}>
            LinkedIn
        </Link>
          
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
