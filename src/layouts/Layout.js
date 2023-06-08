import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routers/>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
