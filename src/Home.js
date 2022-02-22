import { useState, useEffect} from 'react';
import SocialCard from './SocialCard';

const Home=()=>{
  const [allUsers, setAllUsers] = useState([]);
  const [users,setUsers]= useState([]);
  useEffect(() => {
    (async()=>{
      let userData;
      try {
        const response = await fetch ('https://randomuser.me/api/?results=50');
        userData = await response.json();

      } catch (error) {
        console.log(error);
        userData =[];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);

    })();
  }, [] );

  const filterCards=Event=>{
    // console.log(Event.target.value);
    const value = Event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`
    .toLowerCase()
    .includes(value)
    ));
    setUsers(filteredUsers);
  };

  return (
    <div className="App">
      <h1>Social Cards</h1>
      <input className="search-box" placeholder="Search ..." onInput={filterCards}/>
      <div className="cards-container">
        {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}
export default Home;