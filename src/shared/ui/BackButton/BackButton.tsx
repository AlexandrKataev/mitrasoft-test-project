import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const BackButton = () => {
  return (
    <Link to="/">
      <Button className="my-3 text-dark" variant="light">
        Назад
      </Button>
    </Link>
  );
};
