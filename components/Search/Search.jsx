import React, {
  lazy, Suspense, useCallback, useEffect, useRef, useState,
} from 'react';
import { debounce, throttle } from 'throttle-debounce';
import { Transition } from '@headlessui/react';

import { normaliseResults, normaliseMetaResults } from './../../helpers/functions/normaliseData';
import {
  classNameIsMenu,
  classNamePreventHandleScroll,
  classNameIsTransitionActive,
  classNameIsScrollingDown,
  classNameIsScrollingUp,
} from './../../helpers/functions/classname';
import { navElement } from './../../helpers/functions/domElements';

import CloseButton from './CloseButton';
import Input from './Input';

const Pagination = lazy(() => import(/* webpackChunkName: "search-pagination" */ './Pagination'));
const Results = lazy(() => import(/* webpackChunkName: "search-results" */ './Results'));

const Search = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [resultsMeta, setResultsMeta] = useState({});
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isError, setIsError] = useState(false);

  const inputElement = useRef(null);
  const resultsListElement = useRef(null);
  const resultsListContainer = useRef(null);

  const resetState = () => {
    setSearchQuery('');
    setResultsMeta({});
    setResults([]);
    setNoResults(false);
    setIsError(false);
    setIsNavigating(false);
  };

  const closeWithEscape = useCallback((e) => {
    if (e.keyCode === 27 && showSearchModal) setShowSearchModal(!showSearchModal);
  });

  useEffect(() => {
    document.querySelectorAll('.searchIcon').forEach((searchIcon) => {
      searchIcon.addEventListener('click', () => setShowSearchModal(!showSearchModal));
    });

    return () => {
      document
        .querySelectorAll('.searchIcon')
        .forEach((searchIcon) => {
          searchIcon.removeEventListener('click', setShowSearchModal(!showSearchModal));
        });
    };
  }, []);

  useEffect(() => {
    if (resultsListElement?.current) resultsListElement.current.scrollTo(0, 0);

    if (resultsListElement?.current && resultsListContainer?.current) {
      resultsListElement.current.addEventListener(
        'scroll',
        () => {
          setIsNavigating(true);
          inputElement.current.blur();
        },
        { once: true },
      );
    }
  }, [results]);

  const fetchFromApi = async (query, startIndex = null) => {
    const apiBaseUrl = `https://customsearch.googleapis.com/customsearch/v1?sort=date&cx=c86017e1c456d2dba&q=${query}&key=AIzaSyCB3K3celOJCdfXVuXOOfol7piFQ70I4E4${
      startIndex ? `&start=${startIndex}` : ''
    }`;

    setIsLoading(true);
    setNoResults(false);
    setIsError(false);

    if (!startIndex || startIndex === 1) setIsNavigating(false);

    try {
      const res = await fetch(apiBaseUrl);

      if (res.ok) {
        const parsedRes = await res.json();

        if (parsedRes?.items?.length) {
          const normalisedData = normaliseResults(parsedRes.items);
          const normalisedMetaResults = normaliseMetaResults(parsedRes);
          if (normalisedMetaResults.count > 90) {
            normalisedMetaResults.count = 90;
          }
          if (normalisedMetaResults?.currentStartIndex >= 81) {
            normalisedMetaResults.currentStartIndex = 81;
            normalisedMetaResults.nextStartIndex = 81;
            normalisedMetaResults.previousStartIndex = 71;
          }
          setResultsMeta(normalisedMetaResults);
          setResults(normalisedData);
        } else {
          setNoResults(true);
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Making use of useCallback here makes sure there's only one instance of both the debounced and
  // throttled functions
  const debouncedApiCall = useCallback(debounce(300, fetchFromApi), []);
  const throttledApiCall = useCallback(throttle(250, debouncedApiCall), []);

  const handleInputChange = ({ target }) => {
    const searchValue = target.value.trim();
    setSearchQuery(searchValue);

    if (searchValue.length && searchValue !== resultsMeta.query) throttledApiCall(searchValue);
    if (!searchValue) resetState();
  };

  const handleRemoveTextClick = () => {
    resetState();

    inputElement.current.value = '';
    inputElement.current.focus();
  };

  return (
    <Transition
      className="h-screen w-full flex flex-col fixed top-0 z-100"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(0.25rem)',
        WebkitBackdropFilter: 'blur(0.25rem)',
      }}
      show={showSearchModal}
      enter="transition-opacity duration-100 ease-in"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200 ease-in"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      beforeEnter={() => {
        const lastScrollTop = document.documentElement.scrollTop;

        if (lastScrollTop > 0) {
          document.body.dataset.lastScrollTop = lastScrollTop;
          document.body.style.top = `-${lastScrollTop}px`;
        }

        document.body.classList.add(classNameIsMenu);
        document.addEventListener('keydown', closeWithEscape);
      }}
      afterEnter={() => inputElement.current.focus()}
      beforeLeave={() => {
        document.body.classList.remove(classNameIsMenu);
        document.body.style.top = '';

        if ('lastScrollTop' in document.body.dataset) {
          if (document.body.dataset.lastScrollTop > 0) {
            document.body.classList.add(classNamePreventHandleScroll);
          }

          document.documentElement.scrollTop = document.body.dataset.lastScrollTop;

          if (document.body.dataset.lastScrollTop > 0) {
            setTimeout(() => {
              document.body.classList.remove(classNamePreventHandleScroll);
            }, 15);
          }

          delete document.body.dataset.lastScrollTop;
        }

        document.removeEventListener('keydown', closeWithEscape);
      }}
      afterLeave={() => resetState()}
    >
      <CloseButton
        showSearchModal={showSearchModal}
        isNavigating={isNavigating}
        setShowSearchModal={setShowSearchModal}
      />

      <Input
        ref={inputElement}
        searchQuery={searchQuery}
        searchSuccessful={!!results.length || noResults}
        isNavigating={isNavigating}
        isLoading={isLoading}
        handleInputChange={handleInputChange}
        handleRemoveTextClick={handleRemoveTextClick}
      />

      <Suspense fallback={null}>
        <Results
          ref={{
            resultsListElement,
            resultsListContainer,
          }}
          results={results}
          noResults={noResults}
          resultsMeta={resultsMeta}
          isLoading={isLoading}
          isNavigating={isNavigating}
        />
      </Suspense>

      <Suspense fallback={null}>
        {!!results.length && resultsMeta.count > 10 && (
          <Pagination resultsMeta={resultsMeta} handleOnClick={fetchFromApi} />
        )}
      </Suspense>

      {isError && <h4>Whoops, something went wrong</h4>}
    </Transition>
  );
};

export default Search;
