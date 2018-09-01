import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://github.com/jasonseminara">Jason Seminara</a>
        </p>
        <p>
          <a className="icon" href="https://github.com/jasonseminara/react-skeleton-api">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </div>
    </div>
  </footer>
);
