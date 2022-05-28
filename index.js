const url =
  'https://raw.githubusercontent.com/sindresorhus/html-tags/main/html-tags.json';

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((data) => {
      eval(`const ${data} = () => {

      }`);
    });
  })
  .catch((err) => {
    console.error(error);
  });
