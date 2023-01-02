import styles from "./Rankings.module.css";
import Ranks from '../../Jsons/Ranking.json';


// Header component
const Rankings = () => {
  return (
    <div className={styles["rank-section"]} id="ranking">
        <p>Ranking</p>
        <h1>Top Creators This Week</h1>
        <div className={styles["leaderboard"]}>
            
            <table>
                <thead>
                <tr>
                    <th className={styles["rank"]}></th>
                    <th className={styles["profile-img"]}></th>
                    <th className={styles["contrib-name"]}>Name</th>
                    <th className={styles["collection_no"]}>Collections</th>
                    <th className={styles["sold_no"]}>Sold</th>
                </tr>
                </thead>
                <tbody>
                    {
                        Ranks && Ranks.map( rank => {
                            return(
                                <tr key={rank.id}>
                                    <td className={styles["rank rankVal"]}>{rank.ranko}</td>
                                    <td className={styles["profile-img"]}><img src={rank.src} alt="" /></td>
                                    <td className={styles["contrib-name"]}>{rank.name}</td>
                                    <td className={styles["collection_no"]}>{rank.collections}</td>
                                    <td className={styles["sold_no"]}>{rank.sold}</td>
                                </tr>
                                )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
        
        
  )
}

export default Rankings