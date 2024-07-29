import React, { useEffect, useState } from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';

const Statistics = ({ username }) => {
  const [languagesUrl, setLanguagesUrl] = useState('');
  const [streakUrl, setStreakUrl] = useState('');
  const [statsUrl, setStatsUrl] = useState('');

  useEffect(() => {
    setLanguagesUrl(`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`);
    setStreakUrl(`https://github-readme-streak-stats.herokuapp.com/?user=${username}`);
    setStatsUrl(`https://github-readme-stats.vercel.app/api/?username=${username}&show_icons=true`);
  }, [username]);

  return (
    <Flex direction="column" textAlign={'center'} alignItems="center" p={'20px 0px'}>
       <Text fontSize="4xl" fontWeight="bold" mb="4" p={'20px 0px'}>GitHub Statistics</Text>

      
      <Box mb={4} data-aos="zoom-in-up">
        <Text fontSize="xl" mb={2}>Most Used Languages</Text>
        {languagesUrl ? (
          <Image src={languagesUrl} alt="Top Languages" />
        ) : (
          <Text>Loading...</Text>
        )}
      </Box>

      <Box mb={4} data-aos="zoom-in-up">
        <Text fontSize="xl" mb={2}>Streak</Text>
        {streakUrl ? (
          <Image src={streakUrl} alt="GitHub Streak" />
        ) : (
          <Text>Loading...</Text>
        )}
      </Box>

      <Box mb={4} data-aos="zoom-in-up">
        <Text fontSize="xl" mb={2}>Stats</Text>
        {statsUrl ? (
          <Image src={statsUrl} alt="GitHub Stats" />
        ) : (
          <Text>Loading...</Text>
        )}
      </Box>
    </Flex>
  );
};

export default Statistics;
