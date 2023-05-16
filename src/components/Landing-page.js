import React from 'react';
import NewPost from './New-post'; // Import the NewPost component

function LandingPage() {
  return (
    <div>
      <h2>Landing Page</h2>
      <p>Welcome to the landing page!</p>
      <p>Here, you can display the posts from the NewPost component:</p>
      {/* Render the posts from NewPost component */}
         <NewPost />
    </div>
  );
}

export default LandingPage;
