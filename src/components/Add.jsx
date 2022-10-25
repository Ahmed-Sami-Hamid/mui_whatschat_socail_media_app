import React , {useState} from 'react';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';
import { Stack } from '@mui/system';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    padding:" 0px 20px 0px 20px",
    borderRadius: "10px"
    };

    const UserBox = styled(Box)({
        display:"flex",
        alignItems:"center",
        paddingBottom:"5px"
    })

export default function Add() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Tooltip onClick={(e)=>setOpen(true)} title="Add Post" sx={{ position: "fixed" ,bottom: 20,left: { xs: "calc(50% - 25px) ", md : 30 },}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={(e)=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box style={style} width={300} height={350} bgcolor={"background.default"} >
                    <Typography variant='h6'color={"text.primary"} sx={{padding:"20px" , textAlign:"center"}}>Create post</Typography>
                    <UserBox>
                        <Avatar alt="Sami Sharp" src="">S</Avatar>
                        <Typography sx={{paddingLeft:"10px"}} color={"text.primary"} variant='span' fontWeight={300}>Sami</Typography>
                    </UserBox>
                        <TextField
                        sx={{width:"100%"}}
                        id="standard-multiline-static"
                        multiline
                        placeholder='What is happend today?'
                        rows={4}
                        variant="standard"
                        />
                        <Stack direction="row" gap={1} mt={2} mb={3}>
                            <EmojiEmotionsIcon color='primary'/>
                            <ImageIcon color='secondary'/>
                            <VideoCameraBackIcon color='success'/>
                            <PersonAddIcon color='error'/>
                        </Stack>
                        <ButtonGroup fullWidth variant="contained">
                            <Button >Post</Button>
                            <Button sx={{width:"100px",}}><DateRangeIcon /></Button>
                        </ButtonGroup>
                </Box>
        </Modal>
        </div>
    );
}