import React from 'react'
import "./Main.css"
import Header from "./Header"
import Currency from "./Currency"
import {SiBitcoin,SiRipple,SiLitecoin,SiDash} from "react-icons/si"
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
      ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


export const bar_options = {
  plugins: {
    title: {
      display: true,
      text: 'Top Most',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'BTC',
      data: [1,12,15,16,17,22,30],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'LTC',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 105)',
      backgroundColor: 'rgba(53, 162, 105, 0.5)',
    },
    {
      label: 'XRP',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 112, 135)',
      backgroundColor: 'rgba(53, 112, 135, 0.5)',
    },
    {
      label: 'DASH',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 102, 235, 0.5)',
    },
  ],
};

export const bar_data = {
  labels,
  datasets: [
    {
      label: 'Bitcoin',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Lite Coin',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Ripple',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
    },

    {
      label: 'Dash',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(53, 102, 235)',
    },
  ],
};


const handleFrom = (e)=>{
  console.log(e.target.value);
}

const handleTo = (e)=>{
  console.log(e.target.value)
}


function Main() {
  return (
    <div className="main text-white">
        <Header/>
        <div className="container">
        <div className="header mt-12 flex items-center gap-2">
            <p className="font-light text-purple-400">Welcome back,</p>
            <p className="text-2xl">User Name</p>
        </div>

        <div className="dashboard-grid mt-12">
            <div className="currencies  rounded-md flex flex-col gap-4">
                    <Currency currency_name="Bitcoin" symbol="BTC" Icon={SiBitcoin} color={'bg-red-700'}/>
                    <Currency currency_name="Litecoin" symbol="LTC" Icon={SiRipple} color={'bg-purple-400'}/>
                    <Currency currency_name="Ripple" symbol="XRP" Icon={SiLitecoin} color={'bg-pink-300'}/>
                    <Currency currency_name="Dash" symbol="DASH" Icon={SiDash} color={'bg-orange-500'}/>
            </div>
            <div className="statstics bg-gray-600 rounded-md px-8 py-6">

              <div className="stat_header flex items-center justify-between">
                <h3>Statistics</h3>
                <div className="calender flex items-center gap-6">
                  <div className="calender_input flex gap-2 items-center">
                    <label htmlFor="from">From</label>
                    <input type="date" name="from" id="from" className='bg-gray-300 rounded-md' onChange={handleFrom}/>
                  </div>
                  <div className="calender_input flex gap-2 items-center">
                    <label htmlFor="to">To</label>
                    <input type="date" name="to" id="to" className='bg-gray-300 rounded-md' onChange={handleTo}/>
                  </div>
                </div>
              </div>

              <Line options={options} data={data} />
            </div>
            <div className="balance_and_top_most  rounded-md grid">
              <div className="balance bg-gray-600 rounded-md px-6 py-3 flex items-center flex-col justify-center">
                <p className='text-2xl text-white/50'>Total Balance</p>
                <p className='text-3xl'>Rs 4585563</p>
              </div>
              <div className="top_most py-12 px-6 bg-gray-600 rounded-md">

                <Bar options={bar_options} data={bar_data} />
              </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Main