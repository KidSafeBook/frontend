import React, { useState, useEffect } from "react";

/**
 * PostList component.
 * 
 * @returns {*} - JSX component.
 */
const PostList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    /**
     * Fetch data from the backend.
     */
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3010");
        const json = await response.json();
        console.log(`PostList - data: ${JSON.stringify(json)}`);
        setRecords(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col">
      <h2>Post List</h2>
      {records.map((record, index) => (
        <div key={index} className="mt-4">
          <input type="hidden" value={record.postId} />
          <input type="hidden" value={record.authorId} />
          <h4>{record.title}</h4>
          <p className="p-2 " style={{ border: "3px solid grey", borderStyle: "inset" }}>{record.content}</p>
          <div>Likes: {record.likes}, Dislikes: {record.dislikes}</div>
          <hr />
        </div>
      ))}
    </section>
  );
};

export default PostList;
