import React, { useEffect } from 'react';

function LinkedInBadge({ profile }) {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement('script');
    // Use given LinkedIn script
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
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
  const path = getPathFromPermalink(profile.permalink);

  // Extract the vanity name from the path
  const vanityName = path.split('/').pop();

  return (
    <div>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity={vanityName}
        data-version="v1"
      >
      </div>
    </div>
  );
}

export default LinkedInBadge;
