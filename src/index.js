

const noop = v => v;

/*
 * @params {Integer} current
 * @params {Integer} totalPages
 * @params {Integer} delta
 * @returns {Integer[]}
 */
export default ({current, totalPages, delta = 2, render = noop}) => {
  const left = Math.max(current - delta, 0),
        right = Math.min(current + delta, totalPages);

  const pagesToShow = Math.min(right - left + delta, totalPages);

  const {pages} = Array.from({ length: pagesToShow }).reduce(({prevPage, pages}, _, v) => {
    let page;
    if (v === 0) { page = 1; } // always show first page
    else if (v === pagesToShow - 1) { page = totalPages; } // always show last page
    else if (current > pagesToShow - delta && pagesToShow !== totalPages) { page = v + current - delta - 1; }
    else { page = v + 1 };

    // If page is 10, and prev page is 8, just fill in 9
    if(page - prevPage === 2) {
      return {prevPage: page, pages: pages.concat(render(page - 1), render(page))}
    } else if (page - prevPage > 2) {
      return {prevPage: page, pages: pages.concat(render('...'), render(page))}
    } else {
      return {prevPage: page, pages: pages.concat(render(page))}
    }
  }, { prevPage: 1, pages: [] });

  return pages;
}
