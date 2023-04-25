import styles from '@/styles/Post.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

import UserAvatar from '@/components/UserAvatar';

export default function Post({ post }) {
    const formatDate = (date) => {
        const dateObject = new Date(date);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = dateObject.getFullYear();
        const month = months[dateObject.getMonth()];
        const day = dateObject.getDate();
        let hours = dateObject.getHours();
        let minutes = dateObject.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const timeString = hours + ':' + minutes + ' ' + ampm;
        return `${day} ${month} ${year}, ${timeString}`;
    };

    const formatLikes = (likes) => {
        const likesNumber = parseInt(likes);

        if (likesNumber < 1000) {
            return likesNumber;
        } else if (likesNumber < 1000000) {
            return `${(likesNumber / 1000).toFixed(1)}K`;
        } else {
            return `${(likesNumber / 1000000).toFixed(1)}M`;
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>
                    <UserAvatar seed={post.user} />
                </div>
                <div className={styles.cardUsername}>
                    <h2 className={styles.cardTitle}>@{post.user}</h2>
                    <p className={styles.cardDate}>{formatDate(post.date)}</p>
                </div>
            </div>
            <div className={styles.cardBody}>
                <p className={styles.cardText}>{post.body}</p>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.cardLikes}>
                    <span>{formatLikes(post.likes)}</span>
                    <button className={styles.cardLikeButton}>
                        <FavoriteIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}