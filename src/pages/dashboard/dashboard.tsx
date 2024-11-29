import { useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, setUserDetails } from "../../store/authSlice";
import Header from "../../common/Layout/Header/Header";
import ScrollToTop from "../../common/Components/ScrollToTop/ScrollToTop";
import classes from "./dashboard.module.scss";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token); 
  const containerRef = useRef<HTMLDivElement | null>(null); 
  const navigate = useNavigate();

  const setCredentialsFromLocal = () => {
    if (!token) {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      let userDetails = {};

      try {
        const storedUserDetails = localStorage.getItem("userDet");
        if (storedUserDetails) {
          userDetails = JSON.parse(storedUserDetails);
        }
      } catch (e) {
        console.log("Failed to parse user details from localStorage:", e);
      }

      if (token) {
        dispatch(setCredentials({ user, token }));
        dispatch(setUserDetails(userDetails));
      }
    }
  };

  useEffect(() => {
    setCredentialsFromLocal();
  }, [token]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <ScrollToTop containerRef={containerRef} />
      <div className={classes.desktopUi} ref={containerRef}>
        <div className={classes.bodyWrap}>
          <Header />
          <main className={classes.dashboard}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
