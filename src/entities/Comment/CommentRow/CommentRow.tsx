import { FC } from 'react';

import { UserIcon } from 'shared/icons';

import { IComment } from 'shared/models';

export const CommentRow: FC<IComment> = ({ email, body }) => {
  return (
    <>
      <div className="m-3 p-3 border rounded-3">
        <div className="d-flex">
          <UserIcon width="20px" />
          <div className="ms-2">{email}</div>
        </div>
        <div className="mt-2">{body}</div>
      </div>
    </>
  );
};
