// import styles of this component
import styles from "./Nav.module.css"

// import other components
import Button from "../Elements/Button/Button"

// import other react pkg to use
import { HambergerMenu } from "iconsax-react"

// import the Link component from the react-scroll package.
import { Link } from "react-scroll";

// Nav component
const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`} id="nav">
        <h1 className={styles["nav-title"]}>NFT-Verse</h1>
        <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
            <li className={`${styles["nav-item"]} ${styles.active}`}>
                <Link
                    
                    to="nav"
                    spy={true}
                    smooth={true}
                    className={styles['nav-link']}
                >
                    Home
                </Link>
            </li>
            <li className={styles["nav-item"]}>
                <Link
                    
                    to="gallery"
                    spy={true}
                    smooth={true}
                    className={styles['nav-link']}
                >
                    Gallery
                </Link>
            </li>
            <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
            <Link
                    
                    to="collections"
                    spy={true}
                    smooth={true}
                    className={styles['nav-link']}
                >
                    Collections
                </Link>
            </li>
            <li className={styles["nav-item"]}>
            <Link
                    
                    to="ranking"
                    spy={true}
                    smooth={true}
                    className={styles['nav-link']}
                >
                    Ranking
                </Link>
            </li>
        </ul>
        <div className={`flex ${styles["navbar-buttons"]}`}>
            <Button theme="transparent">Login</Button>
            <Button theme="matrix">Sign up</Button>
        </div>
        <div className={styles["navbar-responsive-menu"]}>
            <Button theme="transparent">
                <HambergerMenu size="32" color="var(--white-100)"/>
            </Button>
        </div>
    </nav>
  )
}

export default Nav