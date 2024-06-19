import { Line } from "react-chartjs-2";
import "chart.js/auto";

const products = [
  {
    img: "./user-5.jpg",
    title: "Dany Exclusive Products",
    description: "Man Grass Deep Cattle",
    views: "2,350",
    lastSale: "Last sale today",
    sales: "15 Sale",
    rating: "90% Rating",
    comments: "Comments",
    link: "#",
    buttonColor: "bg-gradient-to-r from-blue-500 to-teal-500",
  },
  {
    img: "./user-5.jpg",
    title: "Dany Exclusive Products",
    description: "Man Grass Deep Cattle",
    views: "2,350",
    lastSale: "Last sale today",
    sales: "15 Sale",
    rating: "90% Rating",
    comments: "Comments",
    link: "#",
    buttonColor: "bg-gradient-to-r from-purple-500 to-blue-500",
  },
  {
    img: "./user-5.jpg",
    title: "Dany Exclusive Products",
    description: "Man Grass Deep Cattle",
    views: "2,350",
    lastSale: "Last sale today",
    sales: "15 Sale",
    rating: "90% Rating",
    comments: "Comments",
    link: "#",
    buttonColor: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    img: "./user-5.jpg",
    title: "Dany Exclusive Products",
    description: "Man Grass Deep Cattle",
    views: "2,350",
    lastSale: "Last sale today",
    sales: "15 Sale",
    rating: "90% Rating",
    comments: "Comments",
    link: "#",
    buttonColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
];

const Home = () => {
  const data = {
    labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
    datasets: [
      {
        label: "Deposit",
        data: [15, 20, 35, 45, 25, 30, 40],
        borderColor: "orange",
        fill: false,
      },
      {
        label: "Withdraw",
        data: [20, 15, 30, 40, 35, 25, 45],
        borderColor: "green",
        fill: false,
      },
      {
        label: "Send Money",
        data: [10, 25, 20, 35, 30, 45, 50],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Deposit Money",
        data: [5, 30, 40, 55, 45, 35, 60],
        borderColor: "purple",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <section>
      <div className="grid grid-cols-4 mx-4 gap-5 pt-5">
        <div className="col-span-4 md:col-span-1 bg-blue-500 text-white py-10 px-5 flex gap-5 items-center rounded-lg shadow-md hover:-translate-y-0.5 duration-200">
          <div className="border-b-2 pb-3">
            <img src="./1.png" className="h-12 w-12" />
          </div>
          <div className="ml-2">
            <p className="text-slate-200 font-bold pb-2">TOTAL SALE</p>
            <b className="text-slate-50 text-3xl tracking-wide">$25,652</b>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 bg-purple-500 text-white py-10 px-5 flex gap-5 items-center rounded-lg  shadow-md hover:-translate-y-0.5 duration-200">
          <div className="border-b-2 pb-3">
            <img src="./2.png" className="h-12 w-12" />
          </div>
          <div className="ml-2">
            <p className="text-slate-200 font-bold pb-2">NEW QUOTE</p>
            <b className="text-slate-50 text-3xl tracking-wide">632</b>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 bg-sky-500 text-white py-10 px-5 flex gap-5 items-center rounded-lg  shadow-md hover:-translate-y-0.5 duration-200">
          <div className="border-b-2 pb-3">
            <img src="./3.png" className="h-12 w-12" />
          </div>
          <div className="ml-2">
            <p className="text-slate-200 font-bold pb-2">ORDERS</p>
            <b className="text-slate-50 text-3xl tracking-wide">686</b>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 bg-orange-500 text-white py-10 px-5 flex gap-5 items-center rounded-lg  shadow-md hover:-translate-y-0.5 duration-200">
          <div className="border-b-2 pb-3">
            <img src="./4.png" className="h-12 w-12" />
          </div>
          <div className="ml-2">
            <p className="text-slate-200 font-bold pb-2">PRODUCTS</p>
            <b className="text-slate-50 text-3xl tracking-wide">22</b>
          </div>
        </div>
        {/*end */}

        <div className="col-span-4 md:col-span-1 space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-semibold">68</span>
              <span className="text-gray-500">Working Hours</span>
              <img src="./graph1.png" alt="" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-semibold">1,506</span>
              <span className="text-gray-500">Conversations</span>
              <img src="./graph2.png" alt="" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-semibold">7</span>
              <span className="text-gray-500">People</span>
            </div>
            <div className="flex -space-x-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar3"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar4"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="./user-5.jpg"
                alt="avatar5"
              />
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Transactions History</h2>
            <span className="text-gray-500">05/21/2024 - 06/19/2024</span>
          </div>
          <Line data={data} options={options} />
        </div>
      </div>
      {/*end */}

      <div className="col-span-4 md:col-span-4 bg-white p-6 rounded-lg shadow-md mx-4 mt-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Latest Product
          </h2>
          <div className="space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-300 rounded-lg hover:bg-gray-400">
              New
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-300 rounded-lg hover:bg-gray-400">
              Delivered
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-300 rounded-lg hover:bg-gray-400">
              Cancelled
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-lg hover:from-red-600 hover:to-orange-600">
              All
            </button>
          </div>
        </div>
        <table className="min-w-full bg-white">
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 w-1/6">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="p-4 w-1/3">
                  <div className="text-lg font-semibold text-slate-600">
                    {product.title}
                  </div>
                  <div className="text-gray-500">{product.description}</div>
                </td>
                <td className="p-4">
                  <div className="text-gray-500">{product.views}</div>
                  <div className="text-gray-500">{product.lastSale}</div>
                </td>
                <td className="p-4 text-center">{product.sales}</td>
                <td className="p-4 text-center">{product.rating}</td>
                <td className="p-4 text-center">{product.comments}</td>
                <td className="p-4">
                  <a
                    href={product.link}
                    className={`px-2 py-2 text-white rounded-lg ${product.buttonColor} hover:shadow-lg`}
                  >
                    View On Web
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*end*/}
      <div className="p-4 bg-gray-100">
        <div className="flex md:flex-row space-x-4">
          {/* Profit Statistics Section */}
          <div className="bg-white p-4 rounded-lg shadow-md w-2/3">
            <h2 className="text-lg font-semibold mb-4">Profit Statistics</h2>
            <div className="flex justify-between mb-2">
              <span className="text-red-500">All Time</span>
              <span>This Year</span>
              <span>This Week</span>
              <span>Today</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[2500, 2000, 1500, 1000, 500, 0].map((value) => (
                  <div key={value} className="h-full flex items-center">
                    <span className="text-gray-400">{value}</span>
                    <div className="border-t border-gray-200 flex-grow ml-2"></div>
                  </div>
                ))}
              </div>
              <svg className="relative z-10 w-full h-64">
                <polyline
                  fill="none"
                  stroke="#FF0066"
                  strokeWidth="3"
                  points="0,250 100,150 200,150 300,200 400,50"
                />
                <circle cx="0" cy="250" r="5" fill="#FF0066" />
                <circle cx="100" cy="150" r="5" fill="#FF0066" />
                <circle cx="200" cy="150" r="5" fill="#FF0066" />
                <circle cx="300" cy="200" r="5" fill="#FF0066" />
                <circle cx="400" cy="50" r="5" fill="#FF0066" />
              </svg>
              <div className="absolute bottom-0 flex justify-between w-full px-2">
                <span>January 2015</span>
                <span>January 2016</span>
                <span>January 2017</span>
                <span>January 2020</span>
              </div>
            </div>
          </div>

          {/* Earnings Section */}
          <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
            <h2 className="text-lg font-semibold mb-4">Earnings</h2>
            <div className="text-2xl font-bold mb-2">$1035.97</div>
            <svg className="w-full h-40">
              <polygon
                fill="#D1E9FF"
                points="0,150 20,120 40,140 60,110 80,130 100,100 120,130 140,90 160,100 180,60 200,80 220,50 240,70 260,40 280,60 300,50 320,30 340,40 360,20 380,30 400,10 420,20 440,0 460,10 480,0 500,0 500,150"
              />
              <polygon
                fill="#90CDF4"
                points="0,150 20,130 40,120 60,140 80,110 100,130 120,100 140,130 160,90 180,100 200,60 220,80 240,50 260,70 280,40 300,60 320,50 340,30 360,40 380,20 400,30 420,10 440,20 460,0 480,10 500,0 500,150"
              />
            </svg>
            <div className="flex justify-between mt-2">
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>
      </div>

      {/*end*/}
      <div className="grid grid-cols-4 gap-4 mx-4">
        <div className="bg-white rounded-md shadow-md p-4 col-span-4 md:col-span-1">
          <h2 className="text-lg font-bold mb-4">Today Task</h2>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
            <p className="ml-2">Arrange</p>
          </div>
          <p className="text-gray-500">
            Male from replenish light given together
          </p>
          <div className="flex justify-end">
            <p className="text-gray-500">12:24 AM</p>
          </div>
          <div className="flex items-center mt-4 mb-2">
            <div className="w-4 h-4 rounded-full bg-purple-500"></div>
            <p className="ml-2">Shipment</p>
          </div>
          <p className="text-gray-500">Creepin be have kind seasons one form</p>
          <div className="flex justify-end">
            <p className="text-gray-500">12:24 AM</p>
          </div>
          <div className="flex items-center mt-4 mb-2">
            <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
            <p className="ml-2">Make List</p>
          </div>
          <p className="text-gray-500">
            Male from replenish light given together
          </p>
          <div className="flex justify-end">
            <p className="text-gray-500">12:24 AM</p>
          </div>
          <div className="flex items-center mt-4 mb-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <p className="ml-2">Review</p>
          </div>
          <p className="text-gray-500">Creepin be have kind seasons one form</p>
          <div className="flex justify-end">
            <p className="text-gray-500">12:24 AM</p>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-4 col-span-4 md:col-span-3">
          <h2 className="text-lg font-bold mb-4">Monthly Revenue Progress</h2>
          <div className="flex justify-end mb-2">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
              Month
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full ml-2">
              Day
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full ml-2">
              Year
            </button>
          </div>
          <div className="h-64 w-full relative">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 400 200"
            >
              <line x1="0" y1="0" x2="0" y2="200" stroke="#eee" />
              <line x1="0" y1="200" x2="400" y2="200" stroke="#eee" />
              <line x1="0" y1="160" x2="400" y2="160" stroke="#eee" />
              <line x1="0" y1="120" x2="400" stroke="#eee" />
              <line x1="0" y1="80" x2="400" stroke="#eee" />
              <line x1="0" y1="40" x2="400" stroke="#eee" />
              <line x1="0" y1="0" x2="400" stroke="#eee" />
              <circle cx="20" cy="160" r="5" fill="#00d1ff" />
              <circle cx="60" cy="260" r="5" fill="#ff427f" />
              <circle cx="100" cy="140" r="5" fill="#00d1ff" />
              <circle cx="140" cy="400" r="5" fill="#00d1ff" />
              <circle cx="180" cy="160" r="5" fill="#00d1ff" />
              <circle cx="220" cy="160" r="5" fill="#00d1ff" />
              <circle cx="260" cy="300" r="5" fill="#ff427f" />
              <circle cx="300" cy="280" r="5" fill="#00d1ff" />
              <circle cx="340" cy="140" r="5" fill="#00d1ff" />
              <circle cx="380" cy="200" r="5" fill="#00d1ff" />
              <path
                d="M20,160 L60,260 L100,140 L140,400 L180,160 L220,160 L260,300 L300,280 L340,140 L380,200"
                stroke="#00d1ff"
                strokeWidth="2"
              />
              <circle cx="20" cy="80" r="5" fill="#ff427f" />
              <circle cx="60" cy="380" r="5" fill="#ff427f" />
              <circle cx="100" cy="160" r="5" fill="#ff427f" />
              <circle cx="140" cy="100" r="5" fill="#ff427f" />
              <circle cx="180" cy="160" r="5" fill="#ff427f" />
              <circle cx="220" cy="280" r="5" fill="#ff427f" />
              <circle cx="260" cy="260" r="5" fill="#ff427f" />
              <circle cx="300" cy="80" r="5" fill="#ff427f" />
              <circle cx="340" cy="340" r="5" fill="#ff427f" />
              <circle cx="380" cy="160" r="5" fill="#ff427f" />
              <path
                d="M20,80 L60,380 L100,160 L140,100 L180,160 L220,280 L260,260 L300,80 L340,340 L380,160"
                stroke="#ff427f"
                strokeWidth="2"
              />
              <circle cx="20" cy="200" r="5" fill="#945edc" />
              <circle cx="60" cy="320" r="5" fill="#945edc" />
              <circle cx="100" cy="280" r="5" fill="#945edc" />
              <circle cx="140" cy="140" r="5" fill="#945edc" />
              <circle cx="180" cy="160" r="5" fill="#945edc" />
              <circle cx="220" cy="400" r="5" fill="#945edc" />
              <circle cx="260" cy="160" r="5" fill="#945edc" />
              <circle cx="300" cy="180" r="5" fill="#945edc" />
              <circle cx="340" cy="260" r="5" fill="#945edc" />
              <circle cx="380" cy="280" r="5" fill="#945edc" />
              <path
                d="M20,200 L60,320 L100,280 L140,140 L180,160 L220,400 L260,160 L300,180 L340,260 L380,280"
                stroke="#945edc"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex justify-center mt-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <p>day</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              <p>month</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
              <p>year</p>
            </div>
          </div>
        </div>
      </div>
      {/*end*/}

      {/*footer*/}
      <footer className="bg-white shadow-lg pb-4 pt-16 mt-4 text-center text-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-4">
              <p className="text-sm ">
                © 2020 Dany Admin. All Rights Reserved to{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Themeies
                </a>
              </p>
              <p className="text-sm ">
                Crafted with <span className="text-red-500">❤️</span> by{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Themeies
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Home;
