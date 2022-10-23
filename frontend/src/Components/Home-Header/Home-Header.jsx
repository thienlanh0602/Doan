import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { logOut } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";
import { logOutSuccess } from "../../redux/authSlice";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'

import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import Login from '../Login/Login'



export default function Headers() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const changeLogin = ()  =>{
    navigate("/login")
  }
  const changeDangKy = ()  =>{
    navigate("/register")
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useSelector((state)=> state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  let axiosJWT = createAxios(user,dispatch,logOutSuccess);

  const handleLogout = () =>{
    logOut(dispatch,id,navigate, accessToken,axiosJWT);
  }
  return ( 
    <Toolbar>  
            <SchoolIcon fontSize='large'></SchoolIcon>
            <Typography align='left'sx={{flexGrow: 1}}></Typography>             
            <Typography pr={6} fontWeight='bold'>Bạn là người tuyển dụng - Đăng bài ngay</Typography>   
            <Box>
              <Button type='submit' href=''  style={{backgroundColor:"white",color:"black"}}>
              <NotificationsIcon></NotificationsIcon>
              </Button>
            </Box>
            <Box>
            </Box>
            <React.Fragment>
            {user? (
            <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Cài Đặt Tài Khoản">
                  <IconButton
                    onClick={handleClick}                  
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    style={{backgroundColor:"white",color:"black"}}
                  >
                    <PersonIcon ></PersonIcon>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={changeLogin}>
                  <Avatar /> Hi, {user.username}
                </MenuItem>
                <Divider />
                <MenuItem onClick={changeDangKy}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Thêm Tài Khoản
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Cài Đặt
                </MenuItem>
                <MenuItem to="/logout" className="navbar-logout" onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon >
                  Đăng Xuất
                </MenuItem>
              </Menu>
            </>
            ) : (    
            <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Cài Đặt Tài Khoản">
                  <IconButton
                    onClick={changeLogin}                  
                    size="small"
                    sx={{ ml: 2 }}
                    style={{backgroundColor:"white",color:"black"}}
                  >
                    <PersonIcon ></PersonIcon>
                  </IconButton>
                </Tooltip>
              </Box>
            </>
          )}
            </React.Fragment>
        </Toolbar> 
  )
}
