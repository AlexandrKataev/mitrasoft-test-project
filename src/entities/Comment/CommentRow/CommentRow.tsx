import { FC } from 'react';

import { Image } from 'react-bootstrap';

import { IComment } from 'shared/models';

export const CommentRow: FC<IComment> = ({ email, body }) => {
  return (
    <>
      <div className="m-3 p-3 border rounded-3">
        <div className="d-flex">
          <Image
            width="30px"
            height="30px"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf56a020234087.562e7e854f620.jpg"
            roundedCircle
          />
          <div className="ms-2">{email}</div>
        </div>
        <div className="mt-2">{body}</div>
      </div>
    </>
  );
};
