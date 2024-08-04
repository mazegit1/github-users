import React from 'react';
import Container from './Container';




const User = ({ user, repos }) => {

  return (
    <>
     





      <Container>
    <div className="flex mt-24 gap-10">
          <div className="w-1/4 h-fit flex-col 
          flex align-center p-2 rounded-md borde
          r border-slate-300  bg-white  shadow-md">
        <img className="w-[100%] rounded-lg" 
        src={user.avatar_url}
         alt="User Avatar" />
        <h1 className="text-3xl font-semibold ">
          {user.name}
          </h1>
            <h1 className="text-xl text-[#6e6e6e] font-semibold">
              {user.bio}
              </h1>
      <div className="flex justify-between items-center
       gap-2 mt-4">
             <div className="p-2 w-1/2 border rounded-sm
              border-slate-300  text-center ">
       Followers: {user.followers}
</div>
              <div className="p-2 w-1/2 border rounded-sm
           border-slate-300  text-center ">
                Following: {user.following}
              </div>
            </div>
      </div>

          <div className="w-3/4 p-5 flex-col flex 
          align-center p-2 rounded-md border border-slate-300 
           bg-white  shadow-md">
           <h1 className="text-4xl font-bold ">Repositories:</h1>
            <div className="grid 
            grid-cols-4 gap-4 mt-8">
           {repos?.map((repo, idx) => (
            <div
                 key={idx}
             className="border text-xl font-medium
             rounded-md
              p-4
                 border-zinc-500/30   shadow-md transform transition-all duration-300 hover:scale-105"
           >
      <a href={repo.html_url} rel="noopener noreferrer">
                 {repo.name}
                 </a>
  <p className="text-sm mt-2
                 dark:text-gray-400">
                {repo.description}
                    </p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </Container>



      
    </>
  );
};







export default User;
