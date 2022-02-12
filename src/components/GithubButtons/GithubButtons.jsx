import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/therajesh24/resume"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork therajesh24/resume on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/therajesh24/resume"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star therajesh24/resume on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
