import Layout from "@/pages/layout.jsx";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";
import '@/styles/main.scss';

export default function MyApp({ Component, pageProps }) {
    return(
        <>      
            <Head>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    ); 
  }