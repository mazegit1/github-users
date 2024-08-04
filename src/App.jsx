import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import SearchUsers from './components/SearchUsers'
import User from './components/User';
const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userRepos, setUserRepos] = useState([]);
   const submitHandler =(e) => {
e.preventDefault();  
setIsLoading(true);
fetch(`https://api.github.com/users/${username}`)
.then((res) =>res.json())
 .then((res) =>{
  setUserData(res);
  fetch(`https://api.github.com/users/${username}/repos`)
 .then((res) =>res.json())
 .then((res) =>{
  setUserRepos(res);
 }) 
 })
.finally(() => {
  setIsLoading(false);
});
}
const onchangeHandler =(e) => {
setUsername(e.target.value);
};

  return (
   <>
<Navbar/> 
<SearchUsers
username={username}
 submitHandler={submitHandler}
 onchangeHandler={onchangeHandler}
 />
{isLoading && <p className='max-w-[1240px] mx-auto w-full mt-20 text-[24px] text-gray-600'>Loading....</p>}
{!isLoading && userData && <User  repos={userRepos} user={userData}/>}
   </>
  )
}

export default App
