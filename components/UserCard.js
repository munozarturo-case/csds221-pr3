import React from 'react';
import styles from '@/styles/UserCard.module.css';

import UserAvatar from './UserAvatar';

const UserCard = ({ username }) => {
    return (
        <div className={styles.card}>
            <div className={styles.avatarContainer}>
                <UserAvatar seed={username} />
            </div>
            <div className={styles.detailsContainer}>
                <p className={styles.username}>{username}</p>
            </div>
        </div>
    );
};

export default UserCard;
