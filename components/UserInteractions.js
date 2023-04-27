import styles from '@/styles/UserInteractions.module.css';
import UserCard from './UserCard';

import PublicIcon from '@mui/icons-material/Public';

import React from 'react';

import Thought from './Thought';

const toastr = require('toastr');

export default function UserInteractions({ user, setUser, posts, setPosts, fetchPosts }) {
    const [showPopup, setShowPopup] = React.useState(false);
    const [postTitle, setPostTitle] = React.useState('');
    const [postBody, setPostBody] = React.useState('');

    const handleShareWithWorld = () => {
        setShowPopup(!showPopup);
    };

    const handleCancel = () => {
        setShowPopup(false);
        setPostTitle('');
        setPostBody('');
    };

    const handleConfirm = () => {
        if (postTitle === '' && postBody === '') {
            toastr.info("You can't share an empty thought.");
        } else {
            const newPost = {
                user: user.username,
                title: postTitle,
                body: postBody,
                date: new Date(),
                likes: 0,
            };

            if (postTitle === '' || postBody === '') {
                if (postTitle === '') {
                    toastr.info("You can't share a thought without a title.");
                } else {
                    toastr.info("You can't share a thought without a body.");
                }
            } else {
                fetch('/api/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newPost),
                });
        
                setPosts([newPost, ...posts]);
                setUser({ ...user, posts: user.posts + 1 });

                setShowPopup(false);
                setPostTitle('');
                setPostBody('');
        
                setTimeout(() => {
                    fetchPosts();
                }, 2000);
            }
        }
    };

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <UserCard username={user.username} likeCount={user.likeCount} postCount={user.postCount} />
                </div>
                <div className={styles.container}>
                    {(!showPopup && <button className={styles.shareWithWorldButton} onClick={handleShareWithWorld}>
                        <PublicIcon className={styles.worldIcon} />
                        Share a thought!
                    </button>)}
                </div>
                {(showPopup && <div className={styles.thoughtContainer}>
                    <Thought 
                        title={postTitle}
                        body={postBody}
                        setTitle={setPostTitle}
                        setBody={setPostBody} 
                        handleConfirm={handleConfirm}
                        handleCancel={handleCancel}
                    />
                </div>)}
            </div>
        </>
    )
}