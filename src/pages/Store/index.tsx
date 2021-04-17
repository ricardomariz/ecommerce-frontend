
import { useAuth } from "../../providers/authProvider"

export function Store() {
  const { user } = useAuth()


  return (
    <h1>{user.user?.email}</h1>
  )

}