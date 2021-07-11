/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function User(props) {
    // dispacer
    const [users, setUsers] = useState([])
    const [identifier, setIdentifier] = useState(1)
    // state loading
    const [loading, setLoading] = useState(false);
    const getUsers = async () => {
        setLoading(true);
        try{
            // all data
            // let response = await axios.get('https://jsonplaceholder.typicode.com/users/');

            // single data
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
            setUsers(response.data);
            // jika datanya ada maka loading false
            setLoading(false)
        }catch(e){
            console.log(e.message)
            setLoading(true);
        }
    }

    useEffect(() => {
        getUsers()
    }, [identifier])
    return (
      <div className="my-4">
           <div className="container">
           <div className="row text-align-center">
               <div className="col-md-8">
                   <input type="text" name="identifier" value={identifier} onChange={(e) => {setIdentifier(e.target.value)}} className="form-control" />
                   {
                       loading ? <div>loading . . .</div> :  
                    <table className="table">
                       <thead>
                           <tr>
                               <th>Name</th>
                               <th>Username</th>
                               <th>Email</th>
                               <th>Phone</th>
                               <th>Website</th>
                           </tr>
                       </thead>
                       <tbody>
                           {/* all data */}
                           {/* {
                               users.map((user, index) => {
                                   return (
                                       <tr key={index}>
                                           <td>{user.name}</td>
                                           <td>{user.username}</td>
                                           <td>{user.email}</td>
                                           <td>{user.phone}</td>
                                           <td>{user.website}</td>
                                       </tr>
                                   )
                               })
                           } */}

                           {/* single data */}
                            <tr>
                                <td>{users.name}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>{users.phone}</td>
                                <td>{users.website}</td>
                            </tr>
                       </tbody>
                    </table>
                   }
               </div>
           </div>
       </div>
      </div>
    );
}

export default User;