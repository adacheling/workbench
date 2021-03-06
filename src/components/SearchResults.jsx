import React   from 'react';


export default props => props.results.map(result => (
  <article className="media">
    <figure className="media-left">
      <p className="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </p>
    </figure>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>Lymph Meter</strong> <small>@johnsmith</small> <small>31m</small>
          <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item">
            <span className="icon is-small"><i className="fas fa-reply" /></span>
          </a>
          <a className="level-item">
            <span className="icon is-small"><i className="fas fa-retweet" /></span>
          </a>
          <a className="level-item">
            <span className="icon is-small"><i className="fas fa-heart" /></span>
          </a>
        </div>
      </nav>
    </div>
    <div className="media-right">
      <button className="delete" />
    </div>
  </article>

));
