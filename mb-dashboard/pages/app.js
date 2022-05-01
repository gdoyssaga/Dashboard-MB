
import React, {useState} from "react";
import ReactDOM from 'react-dom';
import Head from 'next/head'
import NavigationBar from '../Components/navbar'
import Footer from '../Components/footer'
import Bargraph from '../Components/barchart'
import DateFormFill from '../Components/date_formfill'
import Button from '../Components/button'
import Card from '../Components/card'
import Linegraph from '../Components/linechart'
import { Weekday} from '../Components/Data'
import { Perday} from '../Components/Data'



export default function HomeDashboard() {

  const [graph, setGraph] = useState({
    labels: Weekday.map((data)=> data.day),
    datasets: [{

        //label: 'Average',
        data: Weekday.map((data)=> data.avg),
        backgroundColor: [   
            "#0A9BFE",
           
          ],
          responsive: true,
          borderWidth: 0,
          borderRadius: 5,
          borderSkipped: false,
    }],
    options: {
      plugins: {
          legend: {
              display: true,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      }
  }

});

const [graph1, setGraph1] = useState({
  labels: Perday.map((data)=> data.time),
  
  datasets: [{

      //label: ['Average'],
      data: Perday.map((data)=> data.avg),
      
      backgroundColor: [
        "#0A9BFE",
        ],
        responsive: true,
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,
        
      //   title: {
      //     display: true,
      //     text: 'Custom Chart Title'
      // }
  }],
  options: {
    legend: {
       display: false //This will do the task
    }
}
});


  
  return (
    //Navbar
  
    <>
        {/* <!-- Tailwind CSS --> */}
       <script src="https://cdn.tailwindcss.com"></script>
      
      <Head> 
        <title>MB-Dashboard</title>
        <link rel="icon" href="/favicon.ico" />     
      </Head>
 
      <NavigationBar/>

      <body className="bg-slate-50 ">
      <div className="container mx-auto ">
      {/* <main> */}
      
      
      <DateFormFill/>
      
    
      {/* BUTTON section*/}
      { Button('Today') }
      { Button('Yesterday') }
      { Button('Last 7 days') }
      { Button('Last 30 days') }
      { Button('Last 30 days') }
      { Button('Last month') }
      { Button('This month') }
      { Button('All time') }
      { Button('Schedule') }

      {/*THE END OF BUTTON SECTION*/}

    {/* CARD SECTION */}
    {/* ROW 1 */}
    <div className="grid gap-6 mb-8 content-center md:grid-cols-2 lg:grid-cols-4" >
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    </div>
    {/* ROW 2 */}
    <div className="grid gap-6 mb-8 content-center md:grid-cols-2 xl:grid-cols-4">
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    {Card('1','Total # of Request')}
    </div>
     {/*THE END OF CARD SECTION*/}
    
    {/* BarChart */}
    {/* Avg. leads by the weekday(Mo -So) */}
    <div className="grid gap-6 mb-6 md:grid-cols-1 xl:grid-cols-2">

    <div className="flex items-center mb-6 p-4 max-w-lg bg-white rounded-[15px] border border-gray-100 shadow-md hover:bg-gray-100">
    <div className="flex flex-wrap items-center">
        <div className="relative w-full max-w-full pt-3">
    <p>Avg. leads by the weekday(Mo -So)</p>
    <div>
    <Bargraph chartData={graph}/>
    </div >
    </div>
    </div>
    </div>
    

    
      {/* Avg. leads per hour per day(00:00 until 23:00) */}
      <div className="flex items-center mb-6 p-6 max-w-lg bg-white rounded-[15px] border border-gray-100 shadow-md hover:bg-gray-100" >
    <Bargraph chartData={graph1}/> 
    </div>

    </div>

    {/* KPIs */}
    <div className="flex items-center mb-6 p-6 max-w-full bg-white rounded-[15px] border border-gray-100 shadow-md hover:bg-gray-100  " style={{ width: 700, height: 300 }}>
    <div className="w-full">
    <Linegraph chartData={graph1}/> </div>
    </div>

    </div>


    {/* </main>  */}
    
    
      
      
      </body>

   
  



    
    {/* footer */}
      <Footer/>
       
    

     
    </>
  )
}

 