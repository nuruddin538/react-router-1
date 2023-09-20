import { useLoaderData } from 'react-router-dom';
import User from '../user/user';
import './Users.css';
const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="users">
        {users.map(user => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
