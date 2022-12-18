import React from 'react';
import ChatBox from './chatbox/index.jsx';
import Messenger from './messenger/index.jsx';
import { styles } from './styles.js';
import Zalo from './zalo/index.jsx';

export default function SocialContact() {
  return (
    <div style={styles.wrapper}>
      <ChatBox />
      <Zalo />
      <Messenger />
    </div>
  )
}
