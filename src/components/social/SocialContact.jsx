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
      <df-messenger
        intent="WELCOME"
        chat-title="LapDarker xin chào"
        agent-id="e0621a4b-7b11-4e49-a0bb-10cfcef7dadf"
        language-code="vi"
      ></df-messenger>
    </div>
  )
}
