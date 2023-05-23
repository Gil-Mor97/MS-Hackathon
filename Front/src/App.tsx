import HomePage from "./components/pages/homepage/HomePage";
import React, { useContext } from "react";
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
import ResponsiveNavbar from "./components/nav/ResponsiveNavbar";
import "./App.css";
import LandingPage from "./components/pages/lp/LandingPage";
import { Tabs, Tab } from "@mui/material";
import { StaticRouter } from "react-router-dom/server";
import { ReactComponent as ExpertsIcon } from "./assets/icons/experts.svg";
import { ReactComponent as ArticlesIcon } from "./assets/icons/articles.svg";
import { ReactComponent as InfluencersIcon } from "./assets/icons/influencers.svg";
import { ReactComponent as GamesIcon } from "./assets/icons/games.svg";
import { ReactComponent as HomeIcon } from "./assets/icons/homepage.svg";

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
      <Tab
        icon={<HomeIcon />}
        // label="דף הבית"
        value="/home"
        to="/"
        component={Link}
        style={{ minWidth: "70px" }}
      />
      <Tab
        icon={<ExpertsIcon />}
        // label="מומחים"
        value="/experts"
        to="/experts"
        component={Link}
        style={{ minWidth: "70px" }}
      />
      <Tab
        icon={<GamesIcon />}
        // label="משחקים"
        value="/games"
        to="/games"
        component={Link}
        style={{ minWidth: "70px" }}
      />
      <Tab
        icon={<ArticlesIcon />}
        // label="כתבות"
        value="/articles"
        to="/articles"
        component={Link}
        style={{ minWidth: "70px" }}
      />
      <Tab
        icon={<InfluencersIcon />}
        // label="אושיות"
        value="/influencers"
        to="/influencers"
        component={Link}
        style={{ minWidth: "70px" }}
      />
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
