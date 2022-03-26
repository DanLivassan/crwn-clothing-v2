import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
export const Navigation = () => {
  const routes = [
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Sign In",
      path: "/signin",
    },
  ];
  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <CrwnLogo className="logo"></CrwnLogo>
          </Link>
        </div>
        <div className="nav-links-container">
          {routes.map((route, i) => (
            <Link
              key={i}
              className="nav-link"
              to={`${route.path}`}
            >{`${route.name}`}</Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};
