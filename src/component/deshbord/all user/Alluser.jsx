import React from 'react';
import Useaxiossuciure from './../../custom/Useaxiossuciure';

const Alluser = () => {
    const axiossecure=Useaxiossuciure();
    const {data}=useQuery({
        querykey:['users'],
        queryFn:async()=>{
            const res= await axiossecure.get('/users')
        }
    })
    return (
        <div>
            <div>
                <h1 className="text-3xl">all user</h1>
                <h1 className="text-3xl">total user</h1>
            </div>
        </div>
    );
};

export default Alluser;