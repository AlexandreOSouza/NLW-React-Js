import styles from './styles.module.scss';

import logoImage from '../../assets/logo.svg';

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImage} alt="logo" />
            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>texto da mensagem</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/AlexandreOSouza.png" alt="alexandre"/>
                        </div>
                        <span>Alexandre</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>texto da mensagem</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/AlexandreOSouza.png" alt="alexandre"/>
                        </div>
                        <span>Alexandre</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>texto da mensagem</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/AlexandreOSouza.png" alt="alexandre"/>
                        </div>
                        <span>Alexandre</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}