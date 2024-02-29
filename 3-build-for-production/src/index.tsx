import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
// import { DatePicker } from 'antd';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <div>
    A React Page compiled by Farm. 
    <App />
    {/* antd DatePicker: <DatePicker /> */}
  </div>
);
  