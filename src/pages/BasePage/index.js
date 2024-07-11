import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SubHeader from "../../components/Subheader";
import Footer from "../../components/Footer";

function BasePage() {
  return (
    <main>
      <Header />
      <SubHeader />
      <Outlet />
      <Footer />
    </main>
  );
}

export default BasePage;
