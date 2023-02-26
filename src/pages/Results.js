import SelectionsBar from "../components/SelectionsBar";
import HotelFilters from "../components/HotelFilters";
import FlightFilters from "../components/FlightFilters";
import FlightCard from "../components/FlightCard";

// import Results from "../components/Results";

function List(props) {
  return (
    <div className="flex flex-col items-stretch basis-3/4 bg-green-700-value mx-10 gap-4">
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
    </div>
  );
}

function Results(props) {
  return (
    <div className="bg-green-100-value w-full h-screen overflow-y-auto">
      {<SelectionsBar />}
      <div className="xl:container xl:mx-auto mx-10 justify-center relative flex flex-row bg-orange-100-value">
        {<FlightFilters />}
        {<List />}
      </div>
    </div>
  );
}

export default Results;
