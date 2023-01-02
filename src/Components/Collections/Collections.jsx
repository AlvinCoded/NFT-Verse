import styles from "./Collections.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Collects from '../../Jsons/Collections.json';


// Header component
const Collections = () => {
  return (
    <div className={styles["collections-section"]} id="collections">
        <p>Collections</p>
        <h1>Featured Collections</h1>
        <div className={styles["collection-list"]}>
            <div className={styles["card-list"]}>

                {
                    Collects && Collects.map( collect => {
                        return(
                            <article className={styles["card"]} key={ collect.id }>
                                { collect.image_list && collect.image_list.map( data => {
                                    return(
                                    <figure className={styles["card-image"]} key={ collect.id }>
                                        <div className="row mb--15" style={{marginBottom: "15px"}}>
                                            <div className="col-6">
                                                <a href="explore-one.html" className="thumbnail-lg">
                                                    <img src={data.src_1} alt="Nft_collection"/>
                                                </a>
                                            </div>
                                            <div className="col-6">
                                                <a href="explore-one.html" className="thumbnail-lg">
                                                    <img src={data.src_2} alt="Nft_collection"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                                <a href="explore-one.html" className="thumbnail-sm">
                                                    <img src={data.src_3} alt="Nft_collection"/>
                                                </a>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                                <a href="explore-one.html" className="thumbnail-sm">
                                                    <img src={data.src_4} alt="Nft_collection"/>
                                                </a>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                                <a href="explore-one.html" className="thumbnail-sm">
                                                    <img src={data.src_5} alt="Nft_collection"/>
                                                </a>
                                            </div>
                                        </div>
                                    </figure>
                                )
                                }) }
                                <div className={styles["card-header"]}>
                                    <a href="#0" title={collect.collection_name}>{collect.collection_name}</a>
                                    <button className={styles["icon-button"]}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" display="block" id="Heart">
                                            <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
                                        </svg>

                                    </button>
                                </div>
                                <div className={styles["card-footer"]}>
                                    { collect.user_details && collect.user_details.map( data => {
                                        return(
                                        <div className={styles["card-meta card-meta--views"]} key={ collect.id }>
                                            <span className={styles["img-cont"]}>
                                                <img src={data.src} alt="" />
                                            </span>
                                            <span className={styles["coll_name"]}>{data.name}</span>
                                        </div>
                                        )}
                                    )}
                                    <div className={styles["card-meta"]}>
                                        <span className={styles["card-meta--items"]}>{collect.item_no} Items</span>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }

                
            </div>

        </div>
    </div>

        
        
  )
}

export default Collections