import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
