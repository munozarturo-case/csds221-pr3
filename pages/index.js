import React from 'react';
import Head from 'next/head'
import Image from 'next/image'

import PostBoard from '@/components/PostBoard'
import UserInteractions from '@/components/UserInteractions';

import styles from '@/styles/Home.module.css'

import UserUtil from '@/utils/user';

export default function Home() {
  const posts = [
    {
      "_id": "1",
      "user": "JohnDoe21",
      "title": "The Art of Writing Clean Code",
      "body": "Writing clean code requires discipline, patience, and attention to detail. It's a skill that takes time and practice to develop, but it's worth it in the end. Clean code is easier to read, easier to maintain, and less prone to bugs.",
      "date": "2020-11-01T00:00:00.000Z",
      "likes": "100"
    },
    {
      "_id": "2",
      "user": "JaneSmith34",
      "title": "The Importance of Exercise",
      "body": "Exercise is important for maintaining physical health and mental wellbeing. It helps to reduce stress, improve mood, and increase energy levels. Incorporating exercise into your daily routine can have a positive impact on all areas of your life.",
      "date": "2020-11-02T00:00:00.000Z",
      "likes": "2500"
    },
    {
      "_id": "3",
      "user": "SamWilson87",
      "title": "The Benefits of Meditation",
      "body": "Meditation is a powerful tool for reducing stress, improving focus, and promoting relaxation. It has been shown to have a positive impact on mental health and overall wellbeing. Whether you're new to meditation or an experienced practitioner, there are many benefits to be gained from incorporating it into your daily routine.",
      "date": "2020-11-03T00:00:00.000Z",
      "likes": "10000"
    },
    {
      "_id": "4",
      "user": "EmilyChen92",
      "title": "The Power of Positive Thinking",
      "body": "Positive thinking can have a profound impact on your life. It can help you to overcome challenges, improve relationships, and achieve your goals. By focusing on the positive aspects of your life, you can increase your sense of happiness and wellbeing.",
      "date": "2020-11-04T00:00:00.000Z",
      "likes": "7685000"
    },
    {
      "_id": "5",
      "user": "JamesDavis45",
      "title": "The Benefits of Learning a New Language",
      "body": "Learning a new language can open up a world of opportunities. It can improve your career prospects, enhance your travel experiences, and even delay the onset of dementia. Plus, it's a fun and rewarding challenge!",
      "date": "2020-11-05T00:00:00.000Z",
      "likes": "250"
    },
    {
      "_id": "6",
      "user": "LilaPatel78",
      "title": "The Importance of Sleep",
      "body": "Getting enough sleep is essential for good health and wellbeing. It helps to improve your memory, concentration, and productivity, as well as boosting your immune system and reducing your risk of chronic diseases.",
      "date": "2020-11-06T00:00:00.000Z",
      "likes": "750"
    },
    {
      "_id": "7",
      "user": "MichaelLee65",
      "title": "The Benefits of Volunteering",
      "body": "Volunteering is a great way to give back to your community, meet new people, and gain valuable experience. It can also boost your self-confidence, reduce stress, and improve your mental health.",
      "date": "2020-11-07T00:00:00.000Z",
      "likes": "1200"
    },
    {
      "_id": "8",
      "user": "NatalieNguyen21",
      "title": "The Power of Gratitude",
      "body": "Practicing gratitude can have a profound impact on your life. It can improve your relationships, increase your happiness, and reduce your stress levels. By focusing on the good things in your life, you can cultivate a positive mindset and attract more positivity into your life.",
      "date": "2020-11-08T00:00:00.000Z",
      "likes": "4300"
    },
    {
      "_id": "9",
      "user": "WilliamJohnson55",
      "title": "The Benefits of Travel",
      "body": "Travel can broaden your horizons, expose you to new cultures, and create lifelong memories. It can also improve your problem-solving skills, boost your creativity, and increase your sense of independence.",
      "date": "2020-11-09T00:00:00.000Z",
      "likes": "3200"
    },
    {
      "_id": "10",
      "user": "OliviaTaylor28",
      "title": "The Importance of Self-Care",
      "body": "Self-care is essential for maintaining good mental health and wellbeing. It involves taking time for yourself, doing things you enjoy, and prioritizing your needs. By practicing self-care, you can reduce stress, increase your energy levels, and improve your overall quality of life.",
      "date": "2020-11-10T00:00:00.000Z",
      "likes": "870"
    },
    {
      "_id": "11",
      "user": "DavidBrown62",
      "title": "The Benefits of Mindfulness",
      "body": "Mindfulness is a powerful practice that involves being present in the moment and fully engaged with your surroundings. It can reduce stress, improve focus and concentration, and increase feelings of happiness and contentment.",
      "date": "2020-11-11T00:00",
      "likes": "1267"
    }
  ]

  const [user, setUser] = React.useState({username: ""});

  React.useEffect(() => {
    setUser({username: UserUtil.getRandomUsername()});
  }, []);

  return (
    <>
      <Head>
        <title>Picshure</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="@/public/camera.png"></link>
      </Head>
      <header className={styles.mainHeader}>
        <Image 
          src="/camera.png"
          width={50}
          height={50}
        />
        <h1>Picshure</h1>
      </header>
      <main className={styles.pageContent}>
        <div className={styles.content}>
          <div className={styles.userInteractions}>
            <UserInteractions user={user} setUser={setUser} />
          </div>
          <div className={styles.postsContent}>
            <PostBoard posts={posts} />
          </div>
        </div>
      </main>
    </>
  )
}
