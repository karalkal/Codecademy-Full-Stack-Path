import { useLoaderData } from 'react-router-dom';
import styles from "./GalleryContainer.module.css"
import SubredditInfoBar from './SubredditInfoBar';


const Home = () => {
    // Get results as prop from App.js which is gonna be loaded before it is rendered 
    const followedSubReddits = useLoaderData();

    return (
        <main className={styles.mainContainer}>
            <h1><div className={styles.galleryTitle}>Favourite Subreddits</div>
                <div className={styles.gallerySubtitle}> (think of subtitle)</div></h1>

            <div className={styles.galleryContainer}>
                {followedSubReddits.map(subr =>
                    <SubredditInfoBar subr={subr}
                    />
                )}
            </div>

        </main>
    );
};

export default Home;
