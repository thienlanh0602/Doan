
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
const Login = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    //if(!user.admin){
      loginUser(newUser, dispatch, navigate);
    //}
  };
  return (
    <Container component="main" maxWidth="xs">
        <Box
          sx={{         
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            sx={{
            height: 96,
            width: 90,
            }}
            alt="Logo Hutech"
            src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-CONG-NGHE-THANH-PHO-HO-CHI-MINH-HUTECH.png"
          />
          <Typography component="h1" variant="h5" fontWeight="bold">
            ĐĂNG NHẬP
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật Khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:'black'}}
            >
              Đăng Nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{color:'black',float:'left'}}>
                  Bạn quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/register" variant="body2" style={{color:'black'}}>
                  {"Tạo tài khoản"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
};

export default Login;
