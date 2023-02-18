import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <div className="text-center">
        <h2>404 - Pagina Non trovata</h2>
        <Link to="/">Torna alla home</Link>
      </div>
    </Container>
  );
};

export default NotFound;
