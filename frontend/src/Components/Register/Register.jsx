import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/apiRequest";

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Register = () => {

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [classs, setClasss] = useState("");
  const [mssv, setMssv] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState(dayjs);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      name: name,
      class: classs,
      mssv: mssv,
      email: email,
      password: password,
      birthday: birthday,
    };
    registerUser(newUser, dispatch, navigate);
  }
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
          ĐĂNG KÝ
        </Typography>
        <Box component="form" noValidate onSubmit={handleRegister} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Tên"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="class"
                label="Lớp"
                name="class"
                onChange={(e) => setClasss(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="mssv"
                label="MSSV"
                name="mssv"
                onChange={(e) => setMssv(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DesktopDatePicker 
                  label="Ngày sinh"
                  minDate={dayjs('1920-01-01')}
                  inputFormat="DD/MM/YYYY"
                  value = {birthday}
                  onChange={(date) => {
                    setBirthday(date);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mật Khẩu"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>


          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ backgroundColor: 'black' }}
          >
            Đăng ký
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="http://localhost:3000/login" variant="body2" style={{ color: 'black' }}>
                Bạn đã có tài khoản? Đăng nhập
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
