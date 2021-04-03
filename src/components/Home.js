import React , {useState , useEffect} from 'react';
// import './Home.css'

const Home = (props) => {
    return (
        <div className="homeContainer">
            <table className="table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Emali ID</th>
                       
                    </tr>    
                </thead>
                <tbody>
                    {
                        props.userList.map((item , index)=> {
                            return (
                                <tr key={index} id={index}>
                                    
                                    <td className="green">{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button id="signOutButton" onClick = {props.handleSignOut} > SignOut</button> 
        </div>
    );
}

export default Home;