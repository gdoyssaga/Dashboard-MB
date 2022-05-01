// import React, {useState} from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Weekday} from "./Data";

// function Bargraph ()  {
//     console.log(Weekday);
//     console.log("week");
    
//     const [graph, setGraph] = useState({
//         labels: Weekday.map((data)=> data.day),
//         datasets: [{
//             label: 'Average',
//             data: Weekday.map((data)=> data.avg),
//             backgroundColor: [
//                 "rgba(75,192,192,1)",
//                 "#ecf0f1",
//                 "#50AF95",
//                 "#f3ba2f",
//                 "#2a71d0",
//               ],
//               borderColor: "black",
//               borderWidth: 2,
//         }]
//     });
    
//     return (
//     // <Bar data={chartData} options={}/>
//    <div className="Bar">
//        <div style={{ width: 700 }}>
//         <Bar chartData={graph} />
//       </div>
//    </div>
//     );

// }

// call data 

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

export default BarChart;