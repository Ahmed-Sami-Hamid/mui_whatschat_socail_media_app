import React , {useState} from 'react'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box , Stack } from '@mui/system';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [mode , setMode] = useState ("light");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'  sx={{paddingTop:"80px"}}>
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add  />
      </Box>
    </ThemeProvider>
  );
}

export default App;
