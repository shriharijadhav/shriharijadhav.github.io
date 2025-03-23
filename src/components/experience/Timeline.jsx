import React from 'react';
import { Box, Flex, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import ReadOnlyContent from '../ReadOnlyMarkdown';

// const experiences = [
//   {
//     role: 'Frontend Developer',
//     company: 'Pepsales AI',
//     duration: 'Sep 2024 - Present',
//     description: 'Designed and implemented advanced real-time UI features using React.js, Redux Toolkit, and Tailwind CSS. Optimized complex UI components for performance and scalability. Developed a picture-in-picture interactive response system, integrated role-based access control, built a dynamic table management system, and implemented real-time notifications using Pusher. Engineered an AI-powered assistance module with real-time streaming and optimized socket-based communication for low-latency interactions.'
//   },
//   {
//     role: 'Full Stack Web Developer', 
//     company: 'Masai School',
//     duration: 'Sep 2023 - Present',
//     description: 'Developed various applications and features. Crafting seamless user experiences and robust backend solutions.',
//   },
//   {
//     role: 'System Engineer',
//     company: 'Tata Consultancy Services',
//     duration: 'Jan 2021 - Oct 2022',
//     description: 'Collaborated with cross-functional teams to implement solutions, streamlining processes and improving data accuracy and system reliability',
//   },
//   {
//     role: 'Bachelor of Engineering',
//     company: 'Computer Science and Engineering',
//     duration: 'Jun 2016 - May 2020',
//     description: 'Completed a Bachelor of Engineering with a CGPA of 8.5, demonstrating strong analytical and technical skills.',
//   },
//   {
//     role: 'Higher Secondary',
//     company: 'Science',
//     duration: 'Jun 2015 - May 2016',
//     description: 'Achieved a 71% score, demonstrating strong academic performance and readiness for further studies.',
//   },
//   {
//     role: 'Secondary',
//     company: 'State Board',
//     duration: 'Jun 2013 - May 2014',
//     description: 'Excelled in Secondary education with an 86% score,  underscoring a commitment to academic excellence.',
//   },
//   // Add more experiences as needed
// ];
const experiences = [
  {
    role: "Frontend Developer",
    company: `**Pepsales AI** *(Bangalore)*`,
    duration: "Sep 2024 - Present",
    description: `- Engineered an **AI-powered assistance** module with a dynamic, chat-like UI for seamless interactions.  
- Implemented **Role-based access controls** for enhanced security.  
- Created a **Notification system**  with Pusher (socket).  
- Built an **Analytics dashboard** for an overview of the entire application.  
`
  },
//   {
//     role: "Full Stack Web Developer",
//     company: "Masai School",
//     duration: "Sep 2023 - Present",
//     description: `- Developed **scalable applications** with robust **frontend and backend** solutions.  
// - Focused on creating **seamless user experiences**.`
//   },
{
  "role": "React JS Developer",
  "company": `**Tata Consultancy Services** *(Pune)*`,
  "duration": "Jan 2021 - Oct 2022",
  "description": "- Collaborated with **cross-functional teams** to develop scalable frontend solutions.  \n- Built an **Employee ticketing system** similar to ServiceNow for efficient issue tracking.  \n- Developed **interactive dashboards** to visualize ticket status and progress.  \n- Enhanced **user experience** with responsive UI and dynamic components."
}
,
  {
    role: "Bachelor of Engineering",
    company: "Computer Science and Engineering",
    duration: "Jun 2016 - May 2020",
    description: `- Earned a Bachelor of Engineering in **Computer Science & Engineering** with a **CGPA of 8.5**.  
- Developed strong **technical skills**.`
  },
  {
    role: "Higher Secondary",
    company: "Science",
    duration: "Jun 2015 - May 2016",
    description: `- Achieved a **71% score**, demonstrating **academic excellence**.`
  },
  {
    role: "Secondary",
    company: "State Board",
    duration: "Jun 2013 - May 2014",
    description: `- Secured **86% marks**, showcasing **strong academic performance**.`
  }
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
          <ReadOnlyContent markdownContent={experience.company}/>

          <Text fontSize="sm" color="gray.700">
            {experience.duration}
          </Text>
          <ReadOnlyContent markdownContent={experience.description}/>

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
