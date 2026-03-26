import {useState, useEffect} from "react"
import UserTable from "./UserTable"
import Loader from "./Loader"

const Dashboard = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name)
    } else {
      return b.name.localeCompare(a.name)
    }
  })

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by Name or Email"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setSortOrder("asc")}>Sort A-Z</button>
      <button onClick={() => setSortOrder("desc")}>Sort Z-A</button>

      {loading ? <Loader /> : <UserTable users={sortedUsers} />}
    </div>
  )
}

export default Dashboard