import { Navigate, Route, Routes } from 'react-router-dom';

import { AboutPage, HomePage, UserPage } from 'pages/index';

export const Routing = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<AboutPage />} path="/user/:userId" />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
