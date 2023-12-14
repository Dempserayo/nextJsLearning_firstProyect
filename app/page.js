async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
 } 


async function HomePage() {
   const users = await fetchUsers()
   console.log(users);
  
   return (
    <ul>
      {users.map(user => (
        <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md text-black flex">
          <div>
            <h5 className="font-bold">
              {users.id} {user.first_name} {user.last_name}
            </h5>
            <p className="text-slate-300">
              email: {user.email}
            </p>
          
          </div>
          <img src={user.avatar}/>
        </li>
      ))}
    </ul>

  );
}

export default HomePage
