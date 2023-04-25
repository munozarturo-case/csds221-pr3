import styles from '@/styles/UserInteractions.module.css';
import UserCard from './UserCard';

import PublicIcon from '@mui/icons-material/Public';

export default function UserInteractions({ user, setUser }) {
    return (
        <>
            <div className={styles.container}>
                <UserCard username={user.username} likeCount={user.likeCount} postCount={user.postCount} />
            </div>
            <button>A button</button>
        </>
    )
}