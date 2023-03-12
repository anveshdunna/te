import List from "./List";
import Tag from "./Tag";
import { Link } from "react-router-dom";

function HotelCard() {
  return (
    <li>
      <Link
        href="www.google.com"
        className="flex flex-row no-underline	rounded-xl overflow-hidden bg-white outline-1 outline-[#0000004e] outline outline-offset-[-1px] "
      >
        <div className="w-60 h-60">
          <img
            className="object-cover h-full"
            alt=""
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
          ></img>
        </div>
        <div className="p-4 grow flex flex-col gap-4">
          <div className="gap-1 flex flex-col">
            <div>★★★★</div>
            <div className="text-body1 font-semibold text-gray-900-value">
              The Ritz-Carlton, Los Angeles
            </div>
            <div className="text-caption1 text-gray-700-value">
              <a href="https://itilite.com">90 Boulevard street, Los Angeles</a>
              <span className="px-1 text-gray-500-value">·</span>
              <span>3.5 km from search location</span>
            </div>
            <div className="text-caption1">
              4.5/5<span className="mx-1">Very good</span>
              <span>(2400 reviews)</span>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <Tag>Instant booking</Tag>
            <Tag>GST assured</Tag>
            <Tag>Quality unclear</Tag>
          </div>
          <div className="flex flex-col gap-1">
            <List>Earn loyalty Lists</List>
            <List>Breakfast included</List>
            <List>
              <a href="https://itilite.com">Cancellation policy</a>
            </List>
          </div>
        </div>
        <div className="w-40 my-4 px-4 border-l border-b-0 border-t-0 border-r-0 border-solid border-gray-100-value gap-2 flex flex-col items-end justify-end">
          <div className="flex flex-col gap-1 items-end">
            <div className="text-title3 font-semibold">$500</div>
            <div className="text-caption1">Avg per night</div>
            <div className="text-caption1">Total $1000</div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <button>Choose room</button>
            <div className="text-caption2">Earn reward $50</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default HotelCard;
