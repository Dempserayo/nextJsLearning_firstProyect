async function getUser(id){
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}


// async function UsersPage({paranms}){   
//     const user = await getUser(paranms.id);
//     return <h1>{JSON.stringify(user)} </h1>
// }
// export default UsersPage



async function UsersPage({ params }) {
    const user = await getUser(params.id);
    
    return <div className="bg-slate-400 mb-2 p-10 rounded-md">
        <img src={user.avatar} alt=""  className="m-auto  my-4"/>
        <h3 className="font-bold text-3xl">{user.id} {user.first_name} {user.last_name}</h3>
        <p className="font-bold text-slate-300"> email: {user.email}</p>
    </div>
  }
  
  export default UsersPage;