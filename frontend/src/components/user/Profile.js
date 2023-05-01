import { Container } from '@mui/system';
import React from 'react'

const Profile = () => {
  return (
    <Container minH={"95vh"} maxW="container.lg" py="8">
      <Heading children="Profile" m="8" textTransform={'uppercase'}/>
    </Container>
  )
}

export default Profile;