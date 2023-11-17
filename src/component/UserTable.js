import React, {useState} from 'react'

function UserTable({users}) {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    //console.log("123",e);
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const normalizedQuery = searchQuery.toLowerCase();
    return (
      user.username.toLowerCase().includes(normalizedQuery) ||
      user.email.toLowerCase().includes(normalizedQuery) ||
      user.phone.toLowerCase().includes(normalizedQuery) 
      //user.creationDate.toLowerCase().includes(normalizedQuery)
    );
  });
  console.log(filteredUsers);
  return (
    <div>
       <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            {/* <th>Creation Date</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              {/* <td>{user.creationDate}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable