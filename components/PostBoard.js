import Post from './Post'
import styles from '@/styles/PostBoard.module.css'

export default function PostBoard( {posts} ) {
    return (
        <div>
            <div className={styles.mainContainer}>
                {posts.map(post => <Post key={post._id} post={post}/>)}
            </div>
        </div>
    )
}