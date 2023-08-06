import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
  
  
function SalesGraph() {
  const period=[
    {label:'Weekly',value:'weekly'},
    {label:'Montly',value:'montly'},
    {label:'Yearly',value:'yearly'},
  ]


const [duration,setDuration]=useState('weekly')
  const labels:any ={
    "montly" :['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','Octomber','November','December'],
    "weekly" :['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    "yearly" :['2010', '2011', '2012', '2013', '2014', '2015', '2016','2017','2018','2019','2020','2021','2022','2023'],
  
  };
  const data = {
      labels:labels[duration],
      datasets: [
        {
          data: labels[duration].map(() => faker.datatype.number({ min: 2000, max: 10000 })),
          borderColor: '#634832',
          // backgroundColor: '#634832',
          backgroundColor:(context:any)=>{
            const bgColor=[
              "#d7b89f","#a98f7a75","#63483225"
            ]
            // console.log(context.chart.chartArea)
            if(!context.chart.chartArea){return;}
            const {ctx,chartArea:{top,bottom}}=context.chart
            const gradientBg=ctx.createLinearGradient(0,top,0,bottom)
            gradientBg.addColorStop(0,bgColor[0])
            gradientBg.addColorStop(0.5,bgColor[1])
            gradientBg.addColorStop(1,bgColor[2])
            return gradientBg
          },
          fill:true
        },
      ],
    };
      
    const options = {
      responsive: true,
      plugins: {
          legend: {
              display: false,
          },
          gridLines : {display : false}  
      },
    };

 
    return ( 
        <div className="p-2 bg-white rounded-sm w-full">
            <div className='flex flex-row justify-between px-4' >
                <div className='flex flex-row'>Sales Analytics</div>
                <div className='flex flex-row rounded-full bg-ternaryl h-10' >
                    {period.map((x,key)=><div key={key} className={` h-10 p-2 rounded-full px-4 cursor-pointer ${duration===x.value?`bg-primary text-white`:``}`}  onClick={()=>{setDuration(x.value)}}>
                        {x.label}
                    </div>
                    )}
                   
                </div>
            </div>
            <div className='w-full p-4'>
                <Line options={options} data={data} width={'auto'}  />    
            </div>
        </div> 
    );
}

export default SalesGraph;