import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const items=[
  {
    label:'Total Paid',
    value:"234",
    percent:'40',
    color:'#634832',
  },
  {
    label:'Total Overdue',
    value:"188",
    percent:'24.3',
    color:'#a98f7a'
  },
  {
    label:'Total Unpaid',
    value:"126",
    percent:'48.8',
    color:'#d7b89f',
  },
]
export const data = {
  labels: [],
  datasets: [
    {
      data: items.map(x=>x.percent),
      backgroundColor: items.map(x=>x.color),
      borderColor:items.map(x=>x.color),
    },
  ],
};
const options={
  // maintainAspectRatio:false, 
  responsive : true,
}
const dounutlabel={
  id:'donut',
  afterDraw(chart:any){
    const {ctx}=chart
    chart.data.datasets.forEach((dataset:any,i:any)=>{
      chart.getDatasetMeta(i).data.forEach((datapoint:any,indexpoint:any)=>{
        const {x,y}=datapoint.tooltipPosition();
        ctx.fillStyle='#fff';
        ctx.fillText(`${chart.data.datasets[0].data[indexpoint]}%`, x, y )
      })
    })
  }
}

const textCenter={
  id:'textCenter',
  beforeDatasetsDraw(chart:any,args:any,pluginOptions:any){
     const {ctx,chartArea:{width}}=chart;
     let x=chart.getDatasetMeta(0).data[0].x,y=chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, width/(3) , 0, 2 * Math.PI);
      ctx.fillStyle ='#f5f3f1';
      ctx.stroke()


      ctx.beginPath();
      ctx.arc(x, y, width/(5) , 0, 2 * Math.PI);
      ctx.fillStyle ='#fff';
      ctx.strokeStyle="#fff"
      ctx.stroke()

      ctx.font='bolder 30px sans-serif'
      ctx.fillStyle='#634832';
      ctx.textAlign='center'
      ctx.textBaseline='middle'
      ctx.fillText(`1,230`, x, y-10 )

      ctx.font='bolder 15px sans-serif'
      ctx.fillStyle='#000';
      ctx.fillText('invoices', x, y +25)
    }
}
function StaticsGraph() {
    return ( 
        <div className="p-2 bg-white rounded-sm w-full">
            <div>Invoices Statics</div>
            <div className='w-full flex flex-row items-center '>
                <div className='w-8/12 h-full'>
                 <Doughnut data={data} options={options} plugins={[textCenter,dounutlabel]}/>
                </div>
                <div className='w-4/12 flex items-start flex-col pl-5'>
                    {items.map((x,key)=>{
                        return <div key={key}>
                                    <div>{x.label}</div>
                                    <div className='flex flex-row items-center'><div className=' w-2 h-2 rounded-full mr-2' style={{background:`${x.color}`}}></div>{x.value}</div>
                                </div>
                    })}
                </div>
            </div>
        </div>
     );
}

export default StaticsGraph;