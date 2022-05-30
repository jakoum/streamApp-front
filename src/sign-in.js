import './sign.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import VideoPlayer from './components/VideoPlayer';

const SignIn=()=>{
    const config= {
        headers :{
    "Content-type":"application/json"
}}
const [data,setData]=useState({IngestServerUrl:"",streamKey:""})
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [user,setUser]=useState("")
const navigate =useNavigate();
const stream=async(username)=>{
  console.log(user)
  const data=await axios.post("http://localhost:5000",{username:username})
  setData({streamKey:data.data.streamKey,IngestServerUrl:data.data.IngestServerUrl})
  console.log(data.data)


 }
 const submitHandler=async()=>{
  console.log("ok")
const data= await axios.post("http://localhost:5001/login",{
  email:email,password:password
})
console.log("ok")
    if(data.data.user){
      console.log("user exists")
        setUser(data.data.user.username)
    }else{
        window.alert(data.data.message)
    }
}

    return(<div className="App">
   {(!user)?( <Form className="form">
       <h2>Sign In</h2>
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="example@example.com"
          onChange={e=>setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="********"
          onChange={e=>setPassword(e.target.value)}
        />
      </FormGroup>
    <Button onClick={submitHandler}>Submit</Button>
  </Form>):(
    <>
    <div id="div">
    <Button onClick={()=>stream(user)}>Stream</Button><br></br>
    
      <h5>{data.streamKey}</h5>
      
      <h5>{data.IngestServerUrl}</h5>
    </div>
    <VideoPlayer username={user}/></>
  )}
   
</div>)
}
export default SignIn