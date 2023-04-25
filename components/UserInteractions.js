import styles from '@/styles/UserInteractions.module.css';
import UserCard from './UserCard';

export default function userInteractions({ user, setUser }) {
    return (
        <>
            <div className={styles.mainContainer}>
                <UserCard username={user.username} />
            </div>
        </>
    )
}