import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import Loader from "./Loader"

const UserDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])

  if (!user) return <Loader />

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h2>{user.name}</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Company:</b> {user.company.name}</p>
      <p><b>Address:</b> {user.address.street}, {user.address.city}</p>
    </div>
  )
}

export default UserDetail