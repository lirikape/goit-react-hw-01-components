import React from 'react';

import styles from './FriendList.module.css'; // Імпортуємо стилі з CSS-модуля

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}> 
    <span className={styles.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);
export default FriendListItem;