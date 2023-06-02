import styles from "./styles/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.siteLogo}>
          <img src="/image/bear.png" alt="A little bear" />
          <h1>Beary Store</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
