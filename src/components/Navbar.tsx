// Libraries imports
import { Link } from "react-router-dom";
// Styles imports
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.siteLogo}>
          <img src="/image/bear.png" alt="A little bear" />
          <h1>Beary Store</h1>
        </div>
        <div className={styles.routesDiv}>
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/products"}>Products</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
