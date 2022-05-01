import React from "react";
// import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';

function DateFormFill() {
    return (

        
        <>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"/>

       <form className="flex flex-inline mt-12">
        <div className="mb-6 mr-10">
    <label for="StartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date between</label>
    <input type="datetime" id="StartDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Date" required/>
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    
   
  </div>
  {/* <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/> */}
  </div>
      

  <div>
  <label for="StartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">&nbsp;</label>
  <label for="EndDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
    <input type="datetime" id="StartDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Date" required/>
  </div>
  
  </form>
        </>
    );

}
export default DateFormFill;