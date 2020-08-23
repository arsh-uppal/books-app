const fetchBooks = async (
  subject: string = "subject:science",
  maxResults: string = "10"
) => {
  const res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" +
      subject +
      "&orderBy=relevance&maxResults=" +
      maxResults
  );
  const data = await res.json();
  if (data.totalItems !== 0) {
    return data.items;
  } else {
    return [];
  }
};

export default fetchBooks;

const fetchBookData = async (url: string) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export { fetchBookData };
