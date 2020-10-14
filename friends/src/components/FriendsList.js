import React, { useEffect, useState } from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'


const FriendsList = () => {
    const [friends, setFriends] = useState([])
    //friends state is data that will be coming in from server
    // new friend is form values that will be posted to server
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const getFriends = () =>{
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err, 'fetch failed'))
    }

    const addFriend = (friend) =>{
        axiosWithAuth()
        .post('/friends', friend)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }    

    useEffect(() => {
        getFriends()
    },[])

    const handleChanges = (e) =>{
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addFriend(newFriend)
        setNewFriend({
            name: '',
            email: '',
            age: ''
        })
    }




    return(
        <div>
            <div className='friend-form'>
                <form onSubmit={handleSubmit}>
                    <h1>Add New Friends</h1>
                    <label>Name:</label>
                    <input 
                    name="name"
                    type='text'
                    value={newFriend.name}
                    onChange={handleChanges}
                    />
                    <label>Age:</label>
                    <input 
                    name="age"
                    type='text'
                    value={newFriend.age}
                    onChange={handleChanges}
                    />
                    <label>Email:</label>
                    <input 
                    name="email"
                    type='text'
                    value={newFriend.email}
                    onChange={handleChanges}
                    />
                    <button>ADD</button>
                </form>

            </div>
            <div className="friends-list">
                {friends.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                    </div>
                ))};
            </div>
        
        </div>
    );
};

export default FriendsList