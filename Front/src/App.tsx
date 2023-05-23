import HomePage from "./components/pages/homepage/HomePage";
import React, { useEffect, useContext } from "react";
import {
  Route,
  Routes,
  Navigate,
  Link,
  MemoryRouter,
  matchPath,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./provider/AuthProvider";
import Login from "./components/auth/Login";
import Experts from "./components/pages/experts/Experts";
import { AuthContext } from "./context/AuthContext";
import ResponsiveNavbar from "./components/nav/ResponsiveNabvar";
import "./App.css";
import LandingPage from "./components/pages/lp/LandingPage";
import { Tabs, Tab, Typography } from "@mui/material";
import { StaticRouter } from "react-router-dom/server";

function RequireAuth({ children }) {
  const user = useContext(AuthContext);

  return user ? children : <Navigate to="/login" replace />;
}

function RequireNoAuth({ children }) {
  const user = useContext(AuthContext);

  return !user ? children : <Navigate to="/home" replace />;
}

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(["/home", "/login", "/experts"]);
  const currentTab = routeMatch?.pattern?.path ?? "/home";

  return (
    <Tabs value={currentTab}>
      <Tab label="דף הבית" value="/home" to="/" component={Link} />
      <Tab label="התחברות" value="/login" to="/login" component={Link} />
      <Tab label="מומחים" value="/experts" to="/experts" component={Link} />
    </Tabs>
  );
}

function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <ResponsiveNavbar>
          <MyTabs />
          <Routes>
            <Route
              path="/"
              element={
                <RequireNoAuth>
                  <LandingPage />
                </RequireNoAuth>
              }
            />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <HomePage />
                </RequireAuth>
              }
            />
            <Route
              path="/login"
              element={
                <RequireNoAuth>
                  <Login />
                </RequireNoAuth>
              }
            />
            <Route
              path="/experts"
              element={
                <RequireNoAuth>
                  <Experts />
                </RequireNoAuth>
              }
            />
          </Routes>
        </ResponsiveNavbar>
      </AuthProvider>
    </Router>
  );
}

export default AppRouter;
