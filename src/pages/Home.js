import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';



function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          Mr X
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const cards = [1, 2, 3];

const theme = createTheme({});

export function Home() {
const nav = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <Box display='flex' flexGrow={1}>
                <LocalCafeIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                Cafe X
                </Typography>
            </Box>
            <div>
                <Button variant="contained" component={Link} href='/login'>Login</Button>
            </div>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to Mr. X's Cafe!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Special promo of the day: Buy 1 get 1 free!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
                    alt="img"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                       Mr.X's special blend
                    </Typography>
                    <Typography>
                      $69
                    </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small" component={Link} href='/checkout'>Buy</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p">

          Open on weekends from 10 AM to 9 PM
        </Typography>

        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p">

          Contact number: +620694204404
        </Typography>

        <Typography align='center'>
                <Link href="" variant="body2" mr={2}>
                    <InstagramIcon />
                </Link>
                <Link href="" variant="body2">
                    <FacebookIcon />
                </Link>
            </Typography>
            <Typography align="center">
                <Link href="" variant="body2">
                    {"Got any recommendations? tell us!"}
                </Link>
            </Typography>
            <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}