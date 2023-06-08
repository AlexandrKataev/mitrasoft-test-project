import { Badge } from 'react-bootstrap';

export const MyBadge = ({ title }: { title: string }) => {
  return (
    <Badge bg="secondary" className="me-1">
      {title}
    </Badge>
  );
};
