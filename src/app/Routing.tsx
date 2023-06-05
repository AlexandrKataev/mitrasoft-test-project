import { Navigate, Route, Routes } from 'react-router-dom';

import { AboutPage, HomePage, UserPage } from 'pages';

export const Routing = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<UserPage />} path="/user/:userId" />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
