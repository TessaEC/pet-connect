import React from 'react';

export default function NewPost() {
  return (
    <div>
      <h2>New Post</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
