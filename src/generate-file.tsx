import React from 'react';
import Book from './Book';
import { renderToString } from 'react-dom/server';
import { readFileSync, writeFile } from 'fs';
import { glob } from 'glob';
import htmlTemplate from './helpers/template';

glob("./recipes/**/recipe.json", function (err, files) {
  const renderedFiles = files.slice(0, 10);
  const recipes = renderedFiles.map((file: string) => JSON.parse(readFileSync(file, 'utf8')));

  const jsx = (<Book recipes={recipes} />);
  const reactDom = renderToString(jsx);
  const res = htmlTemplate(reactDom);

  writeFile('./build/book.html', res, (err) => {
    if (err) {
      console.log(err);
    }

    console.log('The book was generated!');
  });
});
