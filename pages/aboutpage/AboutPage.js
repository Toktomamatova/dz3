import styles from './aboutPage.module.css';

const AboutPage = ({ data }) => {
    return (
        <div className={styles.aboutPage}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
    );
}

export default AboutPage;