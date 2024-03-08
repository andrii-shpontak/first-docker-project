import { useState } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  const sendTest = async () => {
    try {
      const response = await fetch('http://localhost:3003/test');
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setResponse('Error fetching data');
    }
  };

  const handleClear = () => setResponse('');

  const sendBroke = async () => {
    try {
      const response = await fetch('http://localhost:3003/broke');
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setResponse('Error fetching data');
    }
  };

  return (
    <div className="app">
      <div className="buttonWrapper">
        <button className="test" onClick={sendTest}>
          Test
        </button>
        <button className="broke" onClick={sendBroke}>
          Broke
        </button>
      </div>
      <div className="responseWrapper">
        {!!response && (
          <>
            <div className="response">{response}</div>
            <button className="clear" onClick={handleClear}>
              Clear response
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
