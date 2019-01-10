export const SELECT_BOOK = 'SELECT_BOOK';

export function selectBook(title) {
  return {
    type: SELECT_BOOK,
    title
  };
}