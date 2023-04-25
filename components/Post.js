import styles from '@/styles/Post.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

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
        <div class={styles.card}>
            <div class={styles.cardHeader}>
                <h2 class={styles.cardTitle}>{post.title}</h2>
                <p class={styles.cardDate}>{formatDate(post.date)}</p>
            </div>
            <div class={styles.cardBody}>
                <p class={styles.cardText}>{post.body}</p>
            </div>
            <div class={styles.cardFooter}>
                <p class={styles.cardUser}>@{post.user}</p>
                <div class={styles.cardLikes}>
                    <span>{formatLikes(post.likes)}</span>
                    <button class={styles.cardLikeButton}>
                        <FavoriteIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}