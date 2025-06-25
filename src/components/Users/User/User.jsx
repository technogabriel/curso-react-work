import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Spinner from '../../Utils/Spinner';
import { useParams } from 'react-router';

const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            setLoading(true);
            const timer = setTimeout(() => {
                axios.get(`https://rickandmortyapi.com/api/character/${userId}`)
                    .then((res) => {
                        setUser(res.data);
                    })
                    .catch((error) => {
                        setUser(null);
                        console.error("Error fetching user:", error);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            }, 1200); // retardo simulado
            return () => clearTimeout(timer);
        }
    }, [userId]);

    if (loading) return <div><Spinner /></div>;
    if (!user) return <div className="flex justify-center items-center"><span>No se encontró el usuario.</span></div>;

    return (
        <div className='container-fluid d-flex flex-wrap justify-content-center p-3'>
            <div className='card mx-2' key={user.id} style={{ width: "18rem" }}>
                <div className='card-body'>
                    <p className='card-title'>{user.name}</p>
                    <p className='card-title'>Status: {user.status}</p>
                    <img
                        className="inline-block h-14 w-14 rounded-full border border-green-500 object-cover object-center ring-4 ring-green-500/20"
                        src={user.image}
                        alt={user.name}
                    />
                    <p className='card-title'>Species: {user.species}</p>
                    <button onClick={() => navigate('/users')} className="inline-flex border font-medium font-sans text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-transparent border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-slate-50" style={{ marginTop: "auto" }}>Volver</button>
                </div>
            </div>
        </div>
    );
}

export default User;