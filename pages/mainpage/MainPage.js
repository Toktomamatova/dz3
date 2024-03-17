import React, { Component } from 'react';
import styles from './mainPage.module.css';

class MainPage extends Component {
    render() {
        return (
            <div className={styles.mainPage}>
                {this.props.message}
            </div>
        );
    }
}

export default MainPage;
