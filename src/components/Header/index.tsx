import { useAuth } from "../../providers/authProvider";
import { Container } from "./styles";

export function Header() {
  const { user, userLogout } = useAuth()
  return (
    <Container>
      <h2>Ecommerce</h2>
      <div>
        <h5>{user.user?.email}</h5>
        <button type="button" onClick={userLogout}>Logout</button>
      </div>

    </Container>
  )
}