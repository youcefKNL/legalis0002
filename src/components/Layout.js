import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <TopLeftImg />
      <Nav />

      {children}
    </div>
  );
};

export default Layout;
