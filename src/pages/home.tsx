
import TableList from "../components/table-list"
import {  useScrollPosition, useWindowSize,useIntersectionObserver } from "../hooks/common-hooks"
import { useFetchTask, usePaginatedFetch } from "../hooks/react-query-hooks"

const Home = () => {
  
  const {data}=useFetchTask("http://localhost:4000/api/AllTask")
  
  console.log(data)
  // const tasks=useSelector((state:RootState)=>state.task)
  // console.log(tasks)

  const {data:paginatedData}=usePaginatedFetch("http://localhost:4000/api/getTask",2,2)

  console.log(paginatedData)
  const size=useWindowSize()
  console.log(size)

  const scrollLevel=useScrollPosition()
  console.log(scrollLevel)

  const {targetRef,isInView}=useIntersectionObserver({
    rootMargin:"0px",
  })

  return (
    <div className="flex flex-col items-center justify-center pt-20"  >
      <h1 className="text-3xl ">Todo list</h1>
     {/* {data?.data.map((item:TaskData)=>(
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
     ))} */}
     {
      data && (
        <TableList data={data} />
      )
     } 
      {
      scrollLevel>50 && (
        <div className="flex flex-col items-center justify-center pt-20"  >
          <h1 className="text-3xl ">In View</h1>
        </div>
      )
     }

     <ul className="flex flex-col">
     
     {Array(100)
                .fill(null)
                .map((_, index) => (
                    <li key={index}>Item {index + 1}</li>
                ))}
      
     </ul>

     <div>
        {
          isInView && (
            <>
            slkdfk
            </>
          )
          
          }
      </div>
      {
        scrollLevel>150 && (
          <div ref={targetRef} className="flex flex-col items-center justify-center pt-20"  >
            <h1 className="text-3xl ">new List loading</h1>
          </div>
        )
      }
    
      
    </div>

    
  )
}

export default Home
