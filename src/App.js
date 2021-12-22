import { Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Complete from "./Pages/Complete";
import Home from "./Pages/Home";
import Loading from "./Pages/Loading";
import Profile from "./Pages/Profile";
import Code from "./Pages/Sms";

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/code" element={<Code />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
