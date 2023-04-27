import Post from './Post'
import styles from '@/styles/PostBoard.module.css'

export default function PostBoard( {posts, user, setPosts, fetchPosts, setUser} ) {
    return (
        <div>
            <div className={styles.mainContainer}>
                {posts.map(post => <Post key={post._id} post={post} user={user} posts={posts} setPosts={setPosts} fetchPosts={fetchPosts} setUser={setUser}/>)}
            </div>
        </div>
    )
}