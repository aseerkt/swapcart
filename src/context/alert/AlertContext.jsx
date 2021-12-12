import { createContext, useContext, useEffect, useState } from 'react';
import { FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import './AlertContext.css';

const AlertContext = createContext();

function AlerProvider({ children }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) setTimeout(() => setMessage(''), 2000);
  }, [message]);

  return (
    <AlertContext.Provider value={{ message, setMessage }}>
      {children}
      <div className={`message-container ${!!message ? 'show' : ''}`}>
        <FaInfoCircle />
        <span>{message}</span>
        <FaTimesCircle onClick={() => setMessage('')} className='times' />
      </div>
    </AlertContext.Provider>
  );
}

export const useAlert = () => useContext(AlertContext);

export default AlerProvider;
