import "./App.css";
import Bar from "./components/Bar";
import data from "./assets/data";

function App() {
  const total = data.reduce(
    (previousValue, { amount }) => previousValue + amount,
    0
  );
  console.log(total);
  return (
    <div className="bg-Cream min-h-screen flex justify-center items-center ">
      <div className="w-[375px] space-y-4">
        <div className="bg-SoftRed w-full  rounded-xl flex justify-between items-center p-6">
          <div className="text-white space-y-1">
            <h3 className="text-xs font-thin"> My Balance</h3>
            <h3 className="font-bold text-xl">$921.48</h3>
          </div>
          <svg
            width="72"
            height="48"
            viewBox="0 0 72 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#382314" cx="48" cy="24" r="24" />
              <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
            </g>
          </svg>
        </div>
        <div className="bg-white w-full rounded-xl p-6 space-y-8 ">
          <h1 className="text-2xl font-bold text-DarkBrown">
            Spending - Last 7 days
          </h1>
          <div className="flex justify-start items-center  gap-4 h-44">
            {data.map((item, i) => (
              <Bar key={i} day={item.day} value={item.amount} />
            ))}
          </div>
          <div className="border-b border-Cream "></div>
          <div>
            <small className="text-MediumBrown">Total this month</small>
            <div className="flex justify-between items-center">
              <div className="text-DarkBrown">
                <h1 className="text-4xl font-bold">${total}</h1>
              </div>
              <div className="pt-2 ">
                <h3 className="text-lg font-bold text-right">+2.4%</h3>
                <small className="text-MediumBrown">from last month</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
