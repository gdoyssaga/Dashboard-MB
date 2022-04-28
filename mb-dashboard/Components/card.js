import React from "react";

const Card = (number, description) => {
    return (
        //         <span >


        //         <div>
        //         <a href="#" className="block mb-6 p-6 max-w-sm bg-white rounded-[15px] border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        //      <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
        //                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        //                       <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        //                     </svg>
        //                   </div>
        //                   {/* TEXT */}
        //                   <div>
        //     <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{number}</h5>
        //     <p className="font-normal text-gray-500 dark:text-gray-400">{description}</p></div>
        // </a> </div>
        //         </span>


       // <span href="#"  className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
       <span href="#" className="flex items-center mb-6 p-6 max-w-sm bg-white rounded-[15px] border border-gray-100 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {/* SVG PATH */}
            <div className="p-3 mr-4 text-white bg-blue-600 rounded-full ">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
            </div>
            {/* SVG PATH */}
            {/* TEXT */}
            <div>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{number}</h5>
                <p className="font-normal text-gray-500 dark:text-gray-400">{description}</p>
            </div>
            {/* TEXT */}
        </span>




    )
}

export default Card;