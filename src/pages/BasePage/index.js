import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import SubHeader from "../../components/Subheader";
import Footer from "../../components/Footer";

function BasePage() {
  return (
    //Página "Base" que garante que o Header e o Footer
    //Sempre estejam presentes em todas as páginas
    <main>
      <Header />
      <SubHeader />
      <Outlet />
      <Footer />
    </main>
  );
}

export default BasePage;