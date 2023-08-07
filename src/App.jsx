import "./App.css";
import { Home } from "./components/pages/Home/Home";
import { Sidebar } from "./components/sidebar/Sidebar";
import { SignUp } from "./components/signup/signUp";
// import { SignUp } from "./components/signup/SignUp";

function App() {
  return (
    <wrapper className="flex">
      <Sidebar />

      {/* <SignUp /> */}
      <Home />
    </wrapper>
  );
}

export default App;
