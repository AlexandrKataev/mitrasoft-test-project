import { Col, Placeholder } from 'react-bootstrap';

import { ItemIcon } from 'shared/ui/icons/ImageLoader';

export const CommentLoader = () => {
  return (
    <>
      <div className="m-3 p-3 border rounded-3">
        <div className="d-flex">
          <Col xs={2} sm={1}>
            <ItemIcon width="30px" />
          </Col>
          <Col>
            <Placeholder xs={12} bg="secondary" />
          </Col>
        </div>
        <Placeholder as="p" animation="glow">
          <Placeholder xs={12} bg="secondary" />
          <Placeholder xs={12} bg="secondary" />
        </Placeholder>
      </div>
    </>
  );
};
