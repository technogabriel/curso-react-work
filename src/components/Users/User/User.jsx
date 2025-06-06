import React from 'react'

const User = ({getUsers = []}) => {
return (
 <div className='container-fluid d-flex flex-wrap justify-content-center p-3'>
            {
                getUsers.map((us) => (
                    <div className='card mx-2' key={us.id} style={{ width: "18rem" }}>
                        <div className='card-body'>
                            <p className='card-title'>{us.username}</p>
                            <p className='card-title'>{us.phone}</p>
                            <img
                                className="inline-block h-14 w-14 rounded-full border border-green-500 object-cover object-center ring-4 ring-green-500/20"
                                src={`https://avatar.iran.liara.run/public/${us.id}`}
                                alt="avatar"
                            />
                            <p className='card-title'>{us.email}</p>
                        </div>
                    </div>
                ))
            }
    </div>
)
}

export default User