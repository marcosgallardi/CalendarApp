import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage,RegisterPage } from "../Auth";
import { CalendarPage } from "../Calendar";

export const AppRouter = () => {
  const AuthStatus = "autenthicated";

  return (
    <>
      <Routes>
        {AuthStatus === "no-autenthicated" ? (
          <Route path="/auth/*" element={<LoginPage />} />
        ) : (
          <Route path="/*" element={<CalendarPage />} />
        )}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/register" element={<RegisterPage />}/>
      </Routes>
    </>
  );
};
