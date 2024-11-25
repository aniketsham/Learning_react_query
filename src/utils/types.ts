export type TaskData={
    _id?:string,
    taskName:string,
    taskDetails:string,
    completed?:boolean
}

export type User ={
    id: number;
   
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: 'male' | 'female' | 'other'; // You can adjust this as needed
    image: string;
    accessToken: string;
    refreshToken: string;
  }