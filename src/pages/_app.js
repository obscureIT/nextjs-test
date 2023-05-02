import Layout from "@/pages/layout.jsx";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";
import '@/styles/main.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#ffae00',
        contrastText: '#000814',
      },
      secondary: {
        main: '#003566',
        contrastText: '#fff',
      },
      ternary: {
        main: '#001D3D',
        contrastText: '#fff',
      },
      dark: {
        main: '#000814',
        contrastText: '#fff',
      },
      white: {
        main: '#ffff',
        contrastText: '#003566',
      },
    },
    typography : {
      h2:{
        breakpoints: {
          md : {
            fontSize: '1.7rem'
          }
        }
      }
    }
});

theme.typography.h2 = {
  [theme.breakpoints.up('md')]: {
    fontSize: '1.7rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
};


export default function MyApp({ Component, pageProps }) {
    return(
        <ThemeProvider theme={theme}>
            <Head>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>  
    ); 
  }