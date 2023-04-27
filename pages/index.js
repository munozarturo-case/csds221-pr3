import React from 'react';
import Head from 'next/head'
import Image from 'next/image'

import PostBoard from '@/components/PostBoard'
import UserInteractions from '@/components/UserInteractions';

import styles from '@/styles/Home.module.css'

import UserUtil from '@/utils/user';

import SyncIcon from '@mui/icons-material/Sync';

export default function Home() {
  const [posts, setPosts] = React.useState([]);
  const [user, setUser] = React.useState({ username: '', likeCount: 0, postCount: 0 });

  React.useEffect(() => {
    setUser({ username: UserUtil.getRandomUsername(), likeCount: 0, postCount: 0 });
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);

    setUser(prevState => ({
      ...prevState,
      likeCount: 0,
      postCount: 0
    }));

    posts.forEach(post => {
      if (post.user === user.username) {
        setUser(prevState => ({
          ...prevState,
          likeCount: prevState.likeCount + post.likes,
          postCount: prevState.postCount + 1
        }));
      }
    });
  }

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const handleFeedRefresh = () => {
    fetchPosts();
  }

  return (
    <>
      <Head>
        <title>{`Thought Share - @${user.username}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brain.png"></link>
      </Head>
      <header className={styles.mainHeader}>
        <Image
          src="/brain.png"
          width={50}
          height={50}
        />
        <h1>Thought Share</h1>
        <button onClick={handleFeedRefresh} className={styles.refreshButton}>
          <SyncIcon className={styles.refreshFeedIcon} />
        </button>
      </header>
      <main className={styles.pageContent}>
        <div className={styles.content}>
          <div className={styles.userInteractions}>
            <UserInteractions user={user} setUser={setUser} posts={posts} setPosts={setPosts} fetchPosts={fetchPosts} />
          </div>
          <div className={styles.postsContent}>
            <PostBoard posts={posts} user={user} setPosts={setPosts} setUser={setUser} fetchPosts={fetchPosts} />
          </div>
        </div>
      </main>
    </>
  )
}
