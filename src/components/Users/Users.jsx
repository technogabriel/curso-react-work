import React, { useEffect, useState } from 'react'

import User from './User/User'
import Spinner from '../Utils/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Users = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character?page=1')
            .then((response) => {
                setUsers(response.data.results)
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? <Spinner /> :
                <div className="container-fluid d-flex flex-wrap justify-content-center p-3" id="users">
                    {users.map(user => (
                        <div className='card mx-2' key={user.id} style={{ width: "18rem", cursor: 'pointer' }}
                        >
                            <div className='card-body'>
                                <p className='card-title'>{user.name}</p>
                                <p className='card-title'>Status: {user.status}</p>
                                <img
                                    className="inline-block h-14 w-14 rounded-full border border-green-500 object-cover object-center ring-4 ring-green-500/20"
                                    src={user.image}
                                    alt={user.name}
                                />
                                <p className='card-title'>Species: {user.species}</p>
                                <button onClick={() => navigate(`/users/${user.id}`)} className="inline-flex border font-medium font-sans text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-slate-50" style={{ marginTop: "auto" }}>Ver mas</button>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default Users