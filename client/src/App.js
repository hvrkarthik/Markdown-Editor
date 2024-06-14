import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const convertMarkdownToHtml = async () => {
      try {
        const response = await axios.post('http://localhost:5000/convert', { markdown });
        setHtml(response.data.html);
      } catch (error) {
        console.error('Error converting markdown to HTML:', error);
      }
    };

    convertMarkdownToHtml();
  }, [markdown]);

  return (
    <div className="App">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your markdown here..."
        className="markdown-input"
      ></textarea>
      <div
        className="html-output"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}

export default App;