import React, { useState, useEffect } from 'react';

function PostList() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3010");
        const json = await response.json();
        console.log(`PostList - data: ${JSON.stringify(json)}`);
        setRecords(json.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col">
      <h2>Post List</h2>
      {records.map((record, index) => (
        <div key={index}>
          <h3>{record.postId} - {record.authorId}</h3>
          <p>{record.content}</p>
          <div>Likes: {record.likes}, Dislikes: {record.dislikes}</div>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default PostList;
