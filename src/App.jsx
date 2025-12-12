import Footer from "./components/Footer";
import Testimonal from "./components/Testimonal";
import Home from "./pages/Home";
import RedHotServices from "./pages/RedHotServices";
import Approaches from "./pages/Approaches";
import FreeTrial from "./components/StartFreeTrial";
export default function App() {
  return (
    <div className="">
      <Home/>
      <Approaches/>
      <RedHotServices/>
      <Testimonal/>
      <FreeTrial/>
      <Footer/>
    </div>
  )
}