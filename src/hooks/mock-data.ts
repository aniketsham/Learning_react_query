const Todo=[
    {
      "id": 1,
      "task": "Buy groceries",
      "completed": false
    },
    {
      "id": 2,
      "task": "Go for a jog",
      "completed": true
    },
    {
      "id": 3,
      "task": "Prepare for meeting",
      "completed": false
    },
    {
      "id": 4,
      "task": "Submit project report",
      "completed": false
    },
    {
      "id": 5,
      "task": "Code review session",
      "completed": true
    }
  ]

  
  export const fetchData=()=>{
    return new Promise((resolve)=>{
      
      setTimeout(()=>{
        console.log("fetch todo")
      },1000)
      resolve(Todo)
    })

    
  }

  export const addTask = (task: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Adding todo");
  
        Todo.push({
          id: Todo.length + 1, // Generate a unique ID based on the array length
          task,
          completed: false,
        });
  
        resolve(Todo); // Resolve the Promise with the updated Todo array
      }, 1000);
    });
  };

  export const deleteTask = (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Deleting todo");
        Todo.splice(Todo.findIndex((item) => item.id === id), 1);
        resolve(Todo);
      }, 1000);
    }); 
}


export const updateCheckedTask=(id:number,completed:boolean)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const index = Todo.findIndex((item) => item.id === id);
          
          if (index !== -1) { // Check if the task exists
            Todo[index].completed = completed; // Update the completed value
            console.log(`Task with id ${id} updated to completed: ${completed}`);
            resolve(Todo); // Resolve with the updated array
      
          } else {
            console.error(`Task with id ${id} not found`);
            reject(new Error(`Task with id ${id} not found`));
          }
        }, 1000);
      });
}