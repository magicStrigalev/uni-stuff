import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { sha256 } from 'crypto-hash';

const FirstWeek: React.FC = () => {
  const [greeting, setGreeting] = useState('');
  const [hashedName, setHashedName] = useState('');
  return (
    <Route exact path='/week-1'>
      <div>
        <form action='https://google.com/search' target='_blank'>
          <input type='text' name='q' />
          <input type='submit' value='GO' />
        </form>
      </div>
      <div>
        <div style={{ marginTop: 100 }}>
          <input
            type='text'
            value={greeting}
            onChange={(e) => {
              setGreeting(e.target.value);
            }}
          />
          <button
            defaultValue='clear'
            onClick={() => {
              setGreeting('');
            }}>
            Очистить
          </button>
          {greeting && <p>Hi, {greeting}</p>}
        </div>
      </div>
      <div>
        <div style={{ marginTop: 100 }}>
          <input
            type='text'
            value={hashedName}
            onChange={(e) => {
              setHashedName(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const hashingName = await sha256(hashedName);
              setHashedName(hashingName);
            }}>
            Хэшим имя
          </button>
          <button
            defaultValue='clear'
            onClick={() => {
              setHashedName('');
            }}>
            Очистить
          </button>
          {hashedName && <p>Hi, {hashedName}</p>}
        </div>
      </div>
    </Route>
  );
};

export default FirstWeek;
