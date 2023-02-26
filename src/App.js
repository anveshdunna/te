import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TravelHome from "./pages/TravelHome";
import NewTrip from "./pages/NewTrip";
import Results from "./pages/Results";
import GlobalNav from "./components/GlobalNav";

function Layout(props) {
  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden items-start">
      <GlobalNav />
      {props.children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TravelHome />} />
          {/* <Route path="travel" element={<Travel />}>
          <Route index element={<TravelHome />} />
          <Route path="home" element={<TravelHome />} />
          <Route path="trips" element={<Trips />} />
          <Route path="concierge" element={<Concierge />} />
          <Route path="approvals" element={<Approvals />} />
        </Route> */}
          <Route path="new-trip" element={<NewTrip />} />
          <Route path="results" element={<Results />} />
          {/* <Route path="expense" element={<Expense />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="help" element={<Help />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
