import { useEffect, useState } from "react";
import { getHistory } from "../util/back/requests";
import HistoryItem from "../components/Wallet/HistoryPage/HistoryItem";

const History = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [history, setHistory] = useState([]);
  const history = [];

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchData = async () => {
  //     try {
  //       const response = await getHistory();
  //       setHistory(response);
  //     } catch {
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center text-3xl">
      Loading...
    </div>
  ) : error ? (
    <p className="w-full h-full flex items-center justify-center text-3xl text-red-600 font- px-4 text-center">
      Something went wrong.
    </p>
  ) : (
    <>
      <div className="w-full h-full mt-[40px] overflow-auto flex flex-col gap-[70px]">
        {history?.map((el) => (
          <HistoryItem key={el.name + el.price} data={el} />
        ))}
        <div className="w-full text-center">Your history is clean</div>
      </div>
    </>
  );
};

export default History;
