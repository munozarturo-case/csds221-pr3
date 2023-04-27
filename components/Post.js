import styles from '@/styles/Post.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

import UserAvatar from '@/components/UserAvatar';

import React from 'react';

const toastr = require('toastr');

export default function Post({ post, user, posts, setPosts, fetchPosts, setUser }) {
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

    const [userGeneratedPost, setUserGeneratedPost] = React.useState(post.user === user.username);
    const [liked, setLiked] = React.useState(false);
    
    React.useEffect(() => {
        if (post.hasOwnProperty('likedBy') && post.likedBy.includes(user.username)) {
            setLiked(true);
        }
    }, []);

    const [hovering, setHovering] = React.useState(false);

    const handleDelete = (id) => {
        fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        const newPosts = posts.filter(post => post._id !== id);
        setPosts(newPosts);

        setUserGeneratedPost(false);

        toastr.success('Your post has been deleted.');

        setUser({ ...user, posts: user.posts - 1 });

        setTimeout(() => {
            fetchPosts();
        }, 3000);

        setTimeout(() => {
            fetchPosts();
        }, 5000);
    };

    const handleLike = () => {
        if (liked) {
            fetch(`/api/posts/${post._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({action: 'unlike', user: user.username,}),
                });

            post.likes -= 1;
        } else {
            fetch(`/api/posts/${post._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({action: 'like', user: user.username,}),
                });
    
            post.likes += 1;
        }

        setLiked(!liked);

        setTimeout(() => {
            fetchPosts();
        }, 2000);
    }
    
    return (
        <div className={styles.card} 
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>
                    <UserAvatar seed={post.user} />
                </div>
                <div className={styles.cardUsername}>
                    <h2 className={styles.cardTitle}>{`@${post.user}${post.user === user.username ? ' (You)' : ''}`}</h2>
                    <p className={styles.cardDate}>{formatDate(post.date)}</p>
                </div>
                {userGeneratedPost && hovering && post._id !== undefined && (
                    <button onClick={() => handleDelete(post._id)} className={styles.cardDeleteButton}>
                        Delete
                    </button>
                )}
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardSubtitle}>{post.title}</h3>
                <p className={styles.cardText}>{post.body}</p>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.cardLikes}>
                    <span>{formatLikes(post.likes)}</span>
                    <button className={liked ? styles.cardLikeButtonLiked : styles.cardLikeButton} onClick={handleLike}>
                        <FavoriteIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}