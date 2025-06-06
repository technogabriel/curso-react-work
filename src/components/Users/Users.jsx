import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import User from './User/User'
import Spinner from '../Utils/Spinner'

const Users = () => {

    const [loading, setLoading] = useState(false)
    const [users, setusers] = useState([])
    const { userId } = useParams()

    useEffect(() => {
        setLoading(true);
        api.get('users')
            .then((response) => {
                setusers(response.data)
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [userId]);
    console.log("users ", users)
    return (
        <>
            {
                loading ?
                    <Spinner />
                    :
                    <div>
                        <User getUsers={users} />
                    </div>

            }
        </>
    )
}

export default Users