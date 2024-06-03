// src/components/ChatComponent.jsx
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import './ChatComponent.scss';

const ChatComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="chat-container">
      <div className="message bot">
        <div className="avatar">🤖</div>
        <div className="text">Hi, today I had a terrible day</div>
      </div>
      <div className="message bot">
        <div className="avatar">🤖</div>
        <div className="text">I understand, my friend. Tell me, what things happened to you today?</div>
      </div>
      <div className="message user">
        {user ? (
          <img src={user.photoURL} alt="User Avatar" className="avatar user-avatar" />
        ) : (
          <div className="avatar">👨‍🎓</div>
        )}
        <div className="text">I had two important exams and also a presentation</div>
      </div>
      <div className="message bot">
        <div className="avatar">🤖</div>
        <div className="text">...</div>
      </div>
      <div className="message user">
        {user ? (
          <img src={user.photoURL} alt="User Avatar" className="avatar user-avatar" />
        ) : (
          <div className="avatar">👨‍🎓</div>
        )}
        <div className="text">...</div>
      </div>
    </div>
  );
};

export default ChatComponent;
