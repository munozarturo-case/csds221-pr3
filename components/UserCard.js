import React from 'react';
import styles from '@/styles/UserCard.module.css';

import UserAvatar from './UserAvatar';

const UserCard = ({ username, postCount, likeCount }) => {
    const formatNumber = (number) => {
        const likesNumber = parseInt(number);

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
            <div className={styles.avatarContainer}>
                <UserAvatar seed={username} />
            </div>
            <div className={styles.detailsContainer}>
                <p className={styles.username}>{`@${username}`}</p>

                <div className={styles.statsContainer}>
                    <p className={styles.stat}>
                        <strong>{formatNumber(postCount)}</strong> posts
                    </p>
                    <p className={styles.stat}>
                        <strong>{formatNumber(likeCount)}</strong> likes
                    </p>
                </div>

            </div>
        </div>
    );
};

export default UserCard;
