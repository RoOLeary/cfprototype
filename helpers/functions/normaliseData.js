import format from 'date-fns/format';

export const normaliseResults = (items) => items.map(({
  title, link, cacheId, snippet, pagemap,
}) => {
  const formatDate = (date) => format(new Date(date), 'MMM d, yyyy');
  // The API returns some flaky results in regards to article publish dates, hence
  // these 4 options for now.
  let publishDate = null;

  if (pagemap?.article?.[0]?.datePublished) {
    publishDate = formatDate(pagemap.article[0].datePublished);
  } else if (pagemap?.metatags?.[0]?.pubdate) {
    const rawPublishDate = pagemap.metatags[0].pubdate.toString();

    const parsedPublishDate = [
      parseInt(rawPublishDate.slice(4, 6), 10),
      parseInt(rawPublishDate.slice(6, 8), 10),
      parseInt(rawPublishDate.slice(0, 4), 10),
    ].join('/');

    publishDate = formatDate(parsedPublishDate);
  } else if (pagemap?.metatags?.[0]?.['article:published_time']) {
    publishDate = formatDate(pagemap.metatags[0]['article:published_time']);
  } else if (pagemap?.metatags?.[0]?.['article:modified_time']) {
    publishDate = formatDate(pagemap.metatags[0]['article:modified_time']);
  }

  return {
    id: cacheId,
    title,
    linkArticle: link,
    snippet: snippet.split('... ')[1],
    thumbnail:
        pagemap?.cse_thumbnail?.[0].src
        || pagemap?.thumbnail?.[0].src
        || pagemap?.cse_image?.[0].src,
    author: pagemap?.metatags?.[0].author,
    publishDate,
  };
});

export const normaliseMetaResults = (results) => ({
  query: results.queries.request[0].searchTerms,
  count: parseInt(results.searchInformation.totalResults, 10),
  countFormatted: results.searchInformation.formattedTotalResults,
  countPerPage: results.queries.request[0].count,
  previousStartIndex: results.queries.previousPage?.[0].startIndex,
  currentStartIndex: results.queries.request?.[0].startIndex,
  nextStartIndex: results.queries?.nextPage?.[0].startIndex,
});
