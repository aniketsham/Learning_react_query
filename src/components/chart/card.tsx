import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ChartCard from './ChartCard';



import { useSelector } from 'react-redux';
import { RootState } from '../../services/Reducers/store';
const CardSection = ({data}:{data:number[][]}) => {
  const chartType=useSelector((state:RootState)=>state.chart.chartType)
  if (data.length===0 || data[0].length===0) {
    throw new Error("Data not found")
  }
  return (
    <div  >
      
      <Card data-testid="charts" sx={{minHeight:"75%"}}>
        <CardContent>
            <ChartCard data={data} type={chartType} chartColor={["#00a6ed", "#427aa1", "#003049"]}/>
         
        </CardContent>
        
      </Card>
      
    </div>
  )
}

export default CardSection
