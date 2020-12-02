import React from 'react'
import {Pagination} from 'react-bootstrap'

const PaginationButtons = ({currentPage, currentURL, numberOfPages}) => {
  const showNumbers = 3;

  let prevLink = false;
  let nextLink = false;
  let idx;
  let baseURL;

  if (currentPage !== 1) {
    idx = currentURL.indexOf("/page=")
    baseURL = currentURL.slice(0, idx)
    prevLink = baseURL + '/page=' + (currentPage - 1);
    console.log(baseURL)
  }
  if(currentPage === 1){
    baseURL = currentURL
 }
  if (currentPage === 2) {
    prevLink = baseURL;
  }
  if (currentPage !== numberOfPages) {
    nextLink = baseURL + '/page=' + (currentPage + 1);
  }

  return (
    <div className="pagination-wrapper">
      {numberOfPages > 1 ? (
        <Pagination>
          {prevLink ? (
            <Pagination.Prev href={prevLink} />
          ) : (
            ''
          )}
          {Array.from({ length: numberOfPages }).map((_, i) => {
            let pageNum = i + 1;

            if (
              pageNum >= Math.max(1, currentPage - showNumbers) &&
              pageNum <= Math.min(currentPage + showNumbers, numberOfPages)
            ) {
              if (pageNum === currentPage) {
                return (
                  <Pagination.Item key={pageNum} active={pageNum} href={currentURL}>
                  {pageNum}
                </Pagination.Item>
                );
              } else {
                let link;
                pageNum === 1 ? (link = baseURL) : (link = baseURL + '/page=' + pageNum);
                return (
                  <Pagination.Item key={pageNum} href={link}>
                    {pageNum}
                </Pagination.Item>
                );
              }
            } else {
              return '';
            }
          })}
          {nextLink ? (
            <Pagination.Next href={nextLink}/>
          ) : (
            ''
          )}
        </Pagination>
      ) : (
        ''
      )}
    </div>
  );
};

export default PaginationButtons;