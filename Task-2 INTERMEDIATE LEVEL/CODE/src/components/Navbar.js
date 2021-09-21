import styles from "./Navbar.module.css";
// import Button from "./Button";

const Navbar = (props) => {
    return(
    <div className={styles.nav}>
        <a  className={styles.navbrand} >Shibu.Co</a>
        <div className={styles.links}>
        <a >Home</a>
        <a >About</a>
        <a >Contact</a>
        </div>
    </div>
    );
};

export default Navbar;