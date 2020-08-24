import React, {useContext, useState} from 'react';
import UserContext from '../../context/userContext';

export default function EditUser() {

    const {user, setUser} = useContext(UserContext);
    const [editedUser, setEditedUser] = useState({...user});

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({...editedUser});
    }

    const applyKey = (obj, keys, value) => {
        if (Array.isArray(keys)){
            const [head, ...tail] = keys;

            if (keys.length === 1){
                return {...obj, [head]: value}
            }

            return {...obj, [head]: applyKey(obj[head], tail, value)}
        }

        else throw 'Keys must be an array';
    }

    const handleChange = (keys) => (e) => {
        setEditedUser(applyKey({...editedUser}, keys.split('.'), e.target.value));
    }

    return (
        <div className="editUser">
            <form onSubmit={handleSubmit}>
                <input type='text' value={editedUser.name.first} onChange={handleChange('name.first')}/>
                <input type='text' value={editedUser.name.last} onChange={handleChange('name.last')}/>
                <input type='text' value={editedUser.phone} onChange={handleChange('phone')}/>
                <input type='text' value={editedUser.email} onChange={handleChange('email')}/>
                <input type='submit' />
            </form>
        </div>
    )
}
