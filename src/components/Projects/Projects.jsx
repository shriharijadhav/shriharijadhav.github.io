import React from 'react';
import { Box, Image, Text, Button, SimpleGrid, Link, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'; // Make sure to import icons
import { FaGithub } from "react-icons/fa";

import realEstateApp from '../../images/realEstateApp.png'
import digitalInvitaions from '../../images/digitalinvitations.png'
import ytMusicPlayer from '../../images/ytmusicplayer.png'
import groupon from '../../images/groupon.png'
import pharmeasy from '../../images/pharmeasy.png'

const projects = [
  {
    id: 31,
    title: 'Property investment company',
    image: realEstateApp,
    description: 'A property listing app with an infinite scrolling, wishlist functionality, and interactive features like image carousels and Google Map integration. Build only for mobile and tablet views offering seamless browsing experience.',
    demoLink: 'https://propsoch-assignment-th4a.vercel.app/',
    repoLink: 'https://github.com/shriharijadhav/propsoch-assignment'
  },
  {
    id: 1,
    title: 'Digital Invitations',
    image: digitalInvitaions,
    description: 'The Digital Invitations project modernizes event invitations, allowing users to create and send digital invites with event details, live locations, and images. It features a countdown timer and is built with React, Redux, Node.js, MongoDB, Express.js, and Chakra UI.',
    demoLink: 'https://digitalinvitations.vercel.app/viratwedsanushka',
    repoLink: 'https://github.com/shriharijadhav/digitalinvitations'
  },
  {
    id: 2,
    title: 'YouTube Music Player',
    image: ytMusicPlayer,
    description: 'The YouTubeMusic Player project enables users to play music directly from YouTube, allows an ad-free experience. It offers seamless streaming and a user-friendly interface.',
    demoLink: 'https://youtubemusicplayer.vercel.app/',
    repoLink: 'https://github.com/shriharijadhav/YouTubeMusicPlayer'
  },
  {
    id: 11,
    title: 'Groupon Clone',
    image: groupon,
    description: 'The Groupon Clone is a full-stack web application inspired by Groupon, designed to provide users with a platform to discover and purchase deals on local services, experiences, and products. The project aims to replicate key features of the Groupon platform while incorporating modern web development technologies for an optimized user experience.',
    demoLink: 'https://groupon-gamma.vercel.app/',
    repoLink: 'https://github.com/shriharijadhav/groupon'
  },
  {
    id: 21,
    title: 'Pharmeasy Clone',
    image: pharmeasy,
    description: 'The PharmEasy clone project replicates the online pharmacy experience using only HTML, CSS, and JavaScript. It features a responsive design, user-friendly interface, and mimics the core functionalities of the original website.',
    demoLink: 'https://pharmeasy-clone-dusky.vercel.app/',
    repoLink: 'https://github.com/shriharijadhav/pharmeasy_clone'
  },
   
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Box w={'80%'} mx="auto" p={'30px 0px'}>
      <Text fontSize="3xl" fontWeight="bold" mb="6" textAlign="center" data-aos="flip-right">
        My Projects
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {projects.map((project,index) => (
          <Box
            key={project.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            cursor={'pointer'}
            className='project-card'
             _hover={{ boxShadow: 'xl' }}
             data-aos={index % 2 ==0 ?`flip-right`:`flip-left`}
          >
            <Image w={'100%'} h={'200px'} src={project.image} alt={project.title} />
            <Box p="6">
              <Text fontWeight="bold" fontSize="xl" mb="2" className='project-title'>
                {project.title}
              </Text>
              <Text mb="4" className='project-description'>
              {project.description.length > 100 
                ? `${project.description.substring(0, 100)}...` 
                : project.description}
            </Text>
                          <Box display="flex" gap={'10px'} justifyContent="space-between">
                <Link href={project.demoLink} isExternal className='project-deployed-link'>
                  <Button colorScheme="blue" rightIcon={<ExternalLinkIcon />}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.repoLink} isExternal className='project-github-link'>
                  <Button colorScheme="gray" rightIcon={<FaGithub />}>
                    View Code
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
