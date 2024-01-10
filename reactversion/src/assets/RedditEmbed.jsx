import React, { useEffect } from 'react';

function RedditEmbed({ post }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.redditmedia.com/widgets/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Function to extract path from the permalink
  const getPathFromPermalink = (permalink) => {
    // Check if the permalink is a complete URL
    const isCompleteURL = permalink.startsWith('http');

    // If it's a complete URL, extract the path
    if (isCompleteURL) {
      try {
        const url = new URL(permalink);
        return url.pathname;
      } catch (error) {
        console.error('Error parsing URL:', error);
        return permalink;
      }
    }

    return permalink;
  };

  // Get the path from the permalink
  const path = getPathFromPermalink(post.permalink);

  return (
    <div>
      <blockquote className="reddit-card" data-card-created="1613731823">
        <a href={`https://www.reddit.com${path}`}>View post on reddit</a>
      </blockquote>
    </div>
  );
}

export default RedditEmbed;
