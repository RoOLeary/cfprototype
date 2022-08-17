import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

const SearchItem = ({
  title, linkArticle, snippet, thumbnail, author, publishDate,
}) => {
  const [imagePreloaded, setImagePreloaded] = useState(false);
  return (
    <li className="c-listArticle">
      <figure className="c-listArticle__image">
        <a href={linkArticle} className="o-media md:o-media--16:9">
          {/* TODO: Add fallback image in defaultProps */}
          {!!thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              onLoad={() => setImagePreloaded(true)}
              className={`transition-opacity duration-300 ease-in-out opacity-0 ${
                imagePreloaded ? 'opacity-100' : ''
              }`}
              style={{ borderRadius: 'unset' }}
            />
          )}
        </a>
      </figure>

      <div className="c-listArticle__text">
        <h4 className="c-listArticle__heading">
          <a href={linkArticle} className="title-link">
            {title}
          </a>
        </h4>

        {/* {snippet && <p className="c-listArticle__intro max-md:hidden">{snippet}</p>} */}

        {(author || publishDate) && (
          <ul className="c-meta">
            {author && <li className="c-meta__item">{author}</li>}
            {publishDate && <li className="c-meta__item">{publishDate}</li>}
          </ul>
        )}
      </div>
    </li>
  );
};

export default memo(SearchItem);

SearchItem.propTypes = {
  title: PropTypes.string.isRequired,
  linkArticle: PropTypes.string.isRequired,
  snippet: PropTypes.string,
  thumbnail: PropTypes.string,
  author: PropTypes.string,
  publishDate: PropTypes.string,
};

SearchItem.defaultProps = {
  snippet: null,
  thumbnail: null,
  author: null,
  publishDate: null,
};
