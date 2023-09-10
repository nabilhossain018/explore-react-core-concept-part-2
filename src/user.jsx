import './App.css'

export default function User ({user}) {
console.log(user);
const {name, username, email, phone, website} = user;
    return (
        <div className='user'>
         {/*    <h4>Real name : {user.name}</h4>
            <h4>Username : {user.username}</h4>
            <h4>E-mail : {user.email} </h4>
            <h4>Contact : {user.phone}</h4>
            <h4>Website link : <a href="">{user.website}</a></h4> */}
            <h4>Real name : {name}</h4>
            <h4>Username : {username}</h4>
            <h4>E-mail : {email} </h4>
            <h4>Contact : {phone}</h4>
            <h4>Website link : <a href="">{website}</a></h4>
            <h4>Company name : {user.company.name}</h4>
        </div>
    )
}