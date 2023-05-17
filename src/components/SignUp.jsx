import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <Container maxW={'container.xl' } h="120vh" p={'10'}>
    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
            <Heading>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />

            <Input placeholder='name' type='text' required focusBorderColor='purple.500'></Input>

            <Input placeholder='email' type='email' required focusBorderColor='purple.500'></Input>
            <Input placeholder='password' type='password' required focusBorderColor='purple.500'></Input>
            

            <Button colorScheme='purple' type='submit'> Sign Up</Button>
            <Text textAlign={'right'}>Already Signed Up?{" "}
            <Button variant={'link'} colorScheme='purple'>
                <Link to={'/login'}>Log In</Link>
            </Button>
            </Text>

        </VStack>
    </form>

</Container>
  )
}

export default SignUp;