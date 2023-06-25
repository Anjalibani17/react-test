import { useState, useEffect } from "react"

const Users = ({ users }) => {
    
    const [apiData, setApiData] = useState([]);
    

    const fetchUserData = () => {
        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setApiData(data);
            });
    };

    useEffect(() => {
        fetchUserData();
    }, []);
    return (
        <div>
            <h2>User List </h2>
            <ol>
                {/* {apiData.map((user) => (
                    <li>{user.name}</li>
                ))} */}
                {apiData.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}

                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ol>
        </div>
    );
};

export default Users;
