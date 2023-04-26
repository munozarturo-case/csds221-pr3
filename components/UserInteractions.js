import styles from '@/styles/UserInteractions.module.css';
import UserCard from './UserCard';

import PublicIcon from '@mui/icons-material/Public';

import React from 'react';

export default function UserInteractions({ user, setUser }) {
    const [showPopup, setShowPopup] = React.useState(false);
    const [postTitle, setPostTitle] = React.useState('');
    const [postBody, setPostBody] = React.useState('');

    const handleShareWithWorld = () => {
        setShowPopup(true);
    };

    const handleCancel = () => {
        setShowPopup(false);
        setPostTitle('');
        setPostBody('');
    };

    const handleConfirm = () => {
        console.log('Title:', postTitle);
        console.log('Body:', postBody);
        setShowPopup(false);
        setPostTitle('');
        setPostBody('');
    };

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <UserCard username={user.username} likeCount={user.likeCount} postCount={user.postCount} />
                </div>
                <div className={styles.container}>
                    <button className={styles.shareWithWorldButton} onClick={handleShareWithWorld}>
                        <PublicIcon className={styles.worldIcon} />
                        Share a thought!
                    </button>
                </div>
            </div>
        </>
    )
}