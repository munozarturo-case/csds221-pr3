import styles from '@/styles/Thought.module.css';

export default function Thought({ title, body, setTitle, setBody, handleConfirm, handleCancel }) {
    return <>
        <div className={styles.thoughtContainer}>
            <div className={styles.thoughtTitle}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What's on your mind?" />
            </div>
            <div className={styles.thoughtBody}>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Elaborate..." />
            </div>
            <div className={styles.thoughtButtons}>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleConfirm}>Share</button>
            </div>
        </div>
    </>
}