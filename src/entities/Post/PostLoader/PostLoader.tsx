import { Placeholder, Row, Col } from 'react-bootstrap';
import { ItemIcon } from 'shared/ui/icons/ImageLoader';

export const PostLoader = () => {
  return (
    <div className="mb-3 p-4 rounded-3 bg-white border">
      <div className="mb-3">
        <Row>
          <Col xs={2} sm={1}>
            <ItemIcon width="64px" />
          </Col>
          <Col className="ms-4">
            <Placeholder as="h2" animation="glow" className="mt-2">
              <Placeholder xs={12} bg="secondary" />
              <Placeholder xs={4} bg="secondary" />
            </Placeholder>
          </Col>
        </Row>
      </div>

      <Placeholder as="p" animation="glow">
        <Placeholder xs={12} bg="secondary" />
        <Placeholder xs={12} bg="secondary" />
      </Placeholder>
      <div>
        <div>
          <Placeholder.Button
            xs={2}
            aria-hidden="true"
            className="my-1 btn-sm"
            variant="outline-primary"
          />
        </div>
      </div>
    </div>
  );
};
