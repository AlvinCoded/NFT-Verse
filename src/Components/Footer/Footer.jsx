import styles from "./Footer.module.css";
import { Link } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


// Header component
const Footer = () => {
  return (
    <div className={styles["bg-shape-footer-2"]}>
        <div className={styles["copy-right-area"]}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles["copy-right"]}>
                            <div className={styles["copy-right-text"]}>
                                <p><span>© {new Date().getFullYear()} NFT-Verse </span></p>
                            </div>
                            <div className={styles["copy-right-link"]}>
                                <ul>
                                    <li>
                                        <Link
                            
                                            to="nav"
                                            spy={true}
                                            smooth={true}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                        
                                            to="gallery"
                                            spy={true}
                                            smooth={true}
                                        >
                                            Gallery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                        
                                            to="collections"
                                            spy={true}
                                            smooth={true}
                                        >
                                            Collections
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                        
                                            to="ranking"
                                            spy={true}
                                            smooth={true}
                                        >
                                            Ranking
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        
  )
}

export default Footer