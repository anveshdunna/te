import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TravelHome from "./pages/TravelHome";
import ExpenseHome from "./pages/ExpenseHome";
import NewTrip from "./pages/NewTrip";
import Results from "./pages/Results";
import GlobalNav from "./components/GlobalNav";
import Trips from "./pages/Trips";
import Concierge from "./pages/Concierge";
import Approvals from "./pages/Approvals";
import Help from "./pages/Help";
import Notifications from "./pages/Notifications";

function Layout(props) {
  return (
    <div className="flex h-screen w-screen flex-row items-start overflow-hidden">
      <GlobalNav />
      {props.children}
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="travel" element={<TravelHome />}>
            <Route index element={<TravelHome />} />
            <Route path="home" element={<TravelHome />} />
            <Route path="trips" element={<Trips />} />
            <Route path="concierge" element={<Concierge />} />
            <Route path="approvals" element={<Approvals />} />
          </Route>
          <Route path="new-trip" element={<NewTrip />} />
          <Route path="results" element={<Results />} />
          <Route path="expense" element={<ExpenseHome />} />
          <Route path="help" element={<Help />} />
          <Route path="notifications" element={<Notifications />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
