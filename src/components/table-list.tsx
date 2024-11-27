import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TaskData } from '../utils/types';
import { Button } from '@mui/material';
import { useDeleteTask } from '../hooks/react-query-hooks';
import { useNavigate } from 'react-router-dom';



export default function TableList({data}:{data:TaskData[]}) {
    const {mutateAsync:DeleteTask}=useDeleteTask("http://localhost:4000/api/Delete")
    const handleDelete=(id:string)=>{
        DeleteTask(id)
    }
    const navigateTo=useNavigate()
    
  return (
   
      <Table sx={{ maxWidth: 450,border:"1px solid black" }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Sr.no</TableCell>

            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Task Name</TableCell>
            <TableCell align="right">Task Details</TableCell>
            <TableCell align="right">Completed</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


          {data.map((row,index) => (
            <TableRow
              key={row._id}
              data-testid="custom-element"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="right">{index+1}</TableCell>

              <TableCell align="right">{row._id}</TableCell>
              <TableCell align="right">{row.taskName}</TableCell>
              <TableCell align="right">{row.taskDetails}</TableCell>
              <TableCell align="right">{row.completed ? 'true' : 'false'}</TableCell>
              <TableCell align="right">
                <Button
                variant='contained'
                onClick={()=>handleDelete(row._id as string)}
                >
                Delete
                </Button></TableCell>
              <TableCell align="right">
                <Button
                variant='contained'
                onClick={()=>{navigateTo(`/update/${row._id}`)}}
                >
                Update
                </Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    
  );
}