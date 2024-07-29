import { Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const SingleNavLink = ({linkName,linkId}) => {
  return (
    <ScrollLink to={linkId} smooth={true} duration={500}>
        <Link as="span" cursor="pointer">
            <Text fontSize={['md', 'md', 'lg', 'lg']} >{linkName}</Text>
        </Link>
    </ScrollLink>
  )
}

export default SingleNavLink
