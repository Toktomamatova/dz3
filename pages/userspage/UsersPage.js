import styles from './usersPage.module.css';

const UsersPage = ({ users }) => {
    return (
        <div className={styles.usersPage}>
            <h2>Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}, Age: {user.age}</li>
                ))}
            </ul>
        </div>
    );
}

export default UsersPage;