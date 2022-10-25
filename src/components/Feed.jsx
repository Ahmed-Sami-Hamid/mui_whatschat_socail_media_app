import * as React from 'react';
import { Box } from '@mui/system';
import Post from './Post';



export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post date="September 23 2022" userName="Ahmed Sami" avatarName="A" image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      <Post date="September 22 2022" userName="Sara Khan" avatarName="S" image="https://images.unsplash.com/photo-1666270773839-1849311bc559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      <Post date="September 21 2022" userName="Dragon z" avatarName="D" image="https://images.unsplash.com/photo-1666539517058-ef6d722e702f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"/>
    </Box>
  )
}
