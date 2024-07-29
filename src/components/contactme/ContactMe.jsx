import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Textarea, useToast, VStack, Heading, Text, Spinner } from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import ContactCard from './ContactCard';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send('service_90m6t3h', 'template_65q0xbk', formData, 'KeM66rbZCD_kb2YQ7')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsLoading(false);
        setIsSubmitted(true);
        toast({
          title: "Message Sent.",
          description: "Your message has been sent successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }, (err) => {
        console.log('FAILED...', err);
        setIsLoading(false);
        toast({
          title: "Message Failed.",
          description: "There was an issue sending your message. Please check internet connection",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Flex direction="column" align="center" justify="center" p={'30px 0px'} >
      <Box w={{ base: '100%', md: '80%', lg: '50%' }} p={6}>
        <Heading as="h3" size="lg" mb={6} textAlign="center" data-aos="zoom-in-up" data-aos-delay="500" >Contact Me</Heading>
        {isLoading ? (
          <Flex justifyContent="center" alignItems="center" height="200px">
            <Spinner size="xl" />
          </Flex>
        ) : !isSubmitted ? (
          <form onSubmit={handleSubmit} data-aos="flip-down"  data-aos-delay="600" >
            <VStack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  borderRadius="md"
                />
              </FormControl>
              <Button
                type="submit"
                bg={'#B9C9EB'}
                size="lg"
                w="full"
                borderRadius="md"
                color={'black'}
              >
                Send Message
              </Button>
            </VStack>
          </form>
        ) : (
          <Box textAlign="center" p={4}>
            <Heading as="h4" size="md">Thank you for your message!</Heading>
            <Text mb={'50px'}>I'll get back to you shortly.</Text>
            <ContactCard/>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default ContactMe;
