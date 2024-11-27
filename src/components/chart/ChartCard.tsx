import React from 'react'
import { Button } from '@mui/material';
import { useErrorBoundary } from 'react-error-boundary';
import {
    Chart,
    ChartSeries,
    ChartPanes,
    ChartPane,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
   
    ChartValueAxis,
     ChartValueAxisItem,
     ChartArea,
     SeriesType
    
} from '@progress/kendo-react-charts';

interface props{
    data:number[][]
    chartColor:string[]
    type:SeriesType
}
const ChartCard = ({data,chartColor,type}:props) => {



const categories = ["Jan 23", "Feb 23", "Mar 23"];
// const seriesData1 = [100, 120, 130, 90, 110, 140];
// const seriesData2 = [80, 100, 90, 70, 90, 110];
// const seriesData3 = [60, 600, 60, 60, 60, 160];

const { showBoundary } = useErrorBoundary();
const handleClick = () => {
  showBoundary(new Error('Something went wrong'));
}

  return (
    <div className='h-1/2'>
       
    <Chart style={{ width: '100%', height: '300px',borderRadius: '10px' }}>
    <ChartPanes>
            <ChartPane name="top" />
        </ChartPanes>
    <ChartArea background="#F9FAFB" />
    <ChartCategoryAxis>
<ChartCategoryAxisItem  pane='bottom' labels={{rotation:20}}  categories={categories} />
    </ChartCategoryAxis>
    <ChartValueAxis>
            <ChartValueAxisItem labels={{ font: '10px Arial',step:3}} name="top"  />
        
    </ChartValueAxis>  
   
    <ChartSeries data-testid="charts" >
        {
         data && data.map((item,index)=>(
                <ChartSeriesItem key={index}   type={type} data={item}  stack={true}   color={chartColor[index]}  />
            )
        )}


      
    </ChartSeries>
    
  </Chart>
 

  <Button onClick={handleClick}>
          Show Error
        </Button>

    </div>
  )
}

export default React.memo(ChartCard);

