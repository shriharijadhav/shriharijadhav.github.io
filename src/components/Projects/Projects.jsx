import React from 'react';
import { Box, Image, Text, Button, SimpleGrid, Link, Icon } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'; // Make sure to import icons
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for project 1.',
    demoLink: 'https://live-demo1.com',
    repoLink: 'https://github.com/yourusername/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for project 2.',
    demoLink: 'https://live-demo2.com',
    repoLink: 'https://github.com/yourusername/project2'
  },
  {
    id: 11,
    title: 'Project 1',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for project 1.',
    demoLink: 'https://live-demo1.com',
    repoLink: 'https://github.com/yourusername/project1'
  },
  {
    id: 21,
    title: 'Project 2',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for project 2.',
    demoLink: 'https://live-demo2.com',
    repoLink: 'https://github.com/yourusername/project2'
  },
  {
    id: 122,
    title: 'Project 1',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for project 1.',
    demoLink: 'https://live-demo1.com',
    repoLink: 'https://github.com/yourusername/project1'
  },
  {
    id: 211,
    title: 'Project 2',
    image: 'https://via.placeholder.com/150',
    description: 'This is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.is a description for project 2.',
    demoLink: 'https://live-demo2.com',
    repoLink: 'https://github.com/yourusername/project2'
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
             _hover={{ boxShadow: 'xl' }}
             data-aos={index % 2 ==0 ?`flip-right`:`flip-left`}
          >
            <Image w={'100%'} h={'200px'} src={project.image} alt={project.title} />
            <Box p="6">
              <Text fontWeight="bold" fontSize="xl" mb="2">
                {project.title}
              </Text>
              <Text mb="4">
              {project.description.length > 100 
                ? `${project.description.substring(0, 100)}...` 
                : project.description}
            </Text>
                          <Box display="flex" gap={'10px'} justifyContent="space-between">
                <Link href={project.demoLink} isExternal>
                  <Button colorScheme="blue" rightIcon={<ExternalLinkIcon />}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.repoLink} isExternal>
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
