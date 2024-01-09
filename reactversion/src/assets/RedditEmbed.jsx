import React, { useEffect } from 'react';

function RedditEmbed({ post }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.redditmedia.com/widgets/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <blockquote className="reddit-card" data-card-created="1613731823">
        <a href={`https://www.reddit.com${post.permalink}`}>View post on reddit</a>
      </blockquote>
    </div>
  );
}

export default RedditEmbed;
