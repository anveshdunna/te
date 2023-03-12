import SelectionsBar from "../components/SelectionsBar";
import HotelFilters from "../components/HotelFilters";
import FlightFilters from "../components/FlightFilters";
import HotelCard from "../components/HotelCard";
import Leg from "../components/Leg";

// import Results from "../components/Results";

function List(props) {
  return (
    <ul className="flex flex-col items-stretch basis-3/4 mx-10 gap-4">
      {Array(15)
        .fill("")
        .map(function () {
          return <HotelCard />;
        })}
    </ul>
  );
}

function Results(props) {
  return (
    <div className="bg-green-100-value w-full h-screen overflow-y-auto">
      <SelectionsBar>
        <Leg />
        <Leg />
        <Leg />
        <Leg />
      </SelectionsBar>
      <div className="xl:container xl:mx-auto mx-10 justify-center relative flex flex-row bg-orange-100-value">
        {<FlightFilters />}
        {<List />}
      </div>
    </div>
  );
}

export default Results;
