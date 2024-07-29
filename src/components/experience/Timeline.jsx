import React from 'react';
import { Box, Flex, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react';

const experiences = [
  {
    role: 'Full Stack Web Developer', 
    company: 'Masai School',
    duration: 'Sep 2023 - Present',
    description: 'Developed various applications and features. Crafting seamless user experiences and robust backend solutions.',
  },
  {
    role: 'System Engineer',
    company: 'Tata Consultancy Services',
    duration: 'Jan 2021 - Oct 2022',
    description: 'Collaborated with cross-functional teams to implement solutions, streamlining processes and improving data accuracy and system reliability',
  },
  {
    role: 'Bachelor of Engineering',
    company: 'Computer Science and Engineering',
    duration: 'Jun 2016 - May 2020',
    description: 'Completed a Bachelor of Engineering with a CGPA of 8.5, demonstrating strong analytical and technical skills.',
  },
  {
    role: 'Higher Secondary',
    company: 'Science',
    duration: 'Jun 2015 - May 2016',
    description: 'Achieved a 71% score, demonstrating strong academic performance and readiness for further studies.',
  },
  {
    role: 'Secondary',
    company: 'State Board',
    duration: 'Jun 2013 - May 2014',
    description: 'Excelled in Secondary education with an 86% score,  underscoring a commitment to academic excellence.',
  },
  // Add more experiences as needed
];

const ExperienceCard = ({ experience, isLeft,index }) => {

    const {colorMode} = useColorMode()
    return (<Flex
        direction="column"
        alignItems={isLeft ? 'flex-end' : 'flex-start'}
        w="full"
        mb={10}
        position="relative"
    
       >
        <Box
          bg={colorMode=='dark'?'#B9C9EB':'#B9C9EB'}
          p={4}
          borderRadius="md"
          w={{ base: '89%', md: '35%' }}
          boxShadow="md"
          position="relative"
          zIndex={1}
          ml={isLeft ? 'initial' : ['7%','5%','51.5%','51.1%']}
          mr={isLeft ? '50.8%' : 'initial'}
        color={'black'}
        data-aos={index %2 ===0 ?"fade-up-right":"fade-up-left"}
        data-aos-delay="0"
        data-aos-duration="700"
        >
          <Text fontSize="xl" fontWeight="bold">
            {experience.role}
          </Text>
          <Text>{experience.company}</Text>
          <Text fontSize="sm" color="gray.700">
            {experience.duration}
          </Text>
          <Text mt={2}>{experience.description}</Text>
        </Box>
        <Box
          border="1px solid gray"
          borderRadius="full"
          w="10px"
          h="10px"
          bg="#EDBB3C"
          position="absolute"
          left={{ base: '10px', md: isLeft ? 'calc(50% - 5px)' : 'calc(50% - 5px)' }}
          right={{ md: isLeft ? 'initial' : 'calc(50% - 5px)' }}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1}
          ml={isLeft?'2px':'3px'}
          data-aos="fade-up"
        />
      </Flex>)
    
  
};

const Timeline = () => {
  const isMobile = useBreakpointValue({ sm: true,base:true,md:false, lg: false });

  return (
    <Flex direction="column" alignItems="center" position="relative"  w="100%" >
   

      <Box
        borderLeft={{ base: '4px solid gray', md: 'none' }}
        position="absolute"
        left={{ base: '15px', md: '50%' }}
        height="95%"
        zIndex={0}
       data-aos="fade-up"

      />
      <Box
        borderRight={{ base: 'none', md: '4px solid gray' }}
        position="absolute"
        left={{ base: '15px', md: '50%' }}
        height="95%"
        zIndex={0}
        data-aos="fade-up"

      />
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} index={index} experience={exp} isLeft={!isMobile && index % 2 === 0} />
      ))}
    </Flex>
  );
};

export default Timeline;
