import paginator from '../src';
import assert from 'assert';
import snapshot from 'snap-shot-it';

describe('Paginator', () => {
  for (let totalPages = 1; totalPages <= 20; ++totalPages) {
    for (let currentPage = 1; currentPage <= totalPages; ++currentPage) {
      it('should handle page ' + currentPage + ' of ' + totalPages, () => {
          snapshot(paginator({current: currentPage, totalPages}));
      })
    }
  }
});

