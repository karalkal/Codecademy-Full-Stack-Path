import { nanoid } from "nanoid";
import styles from "../components/GalleryContainer.module.css"
import SubredditInfoBar from '../components/SubredditInfoBar';


const Home = ({ followedSubReddits }) => {
    return (
        <main className={styles.mainContainer}>
            <h1><div className={styles.galleryTitle}>Selected Subreddits</div>
                <div className={styles.gallerySubtitle}> (best / top / hot / controversial posts for a subreddit)</div></h1>

            <div className={styles.galleryContainer}>
                {followedSubReddits.map(subr =>
                    <SubredditInfoBar subr={subr} key={subr.display_name} />
                )}
            </div>

        </main>
    );
};


export default Home;