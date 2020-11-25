# Recipe book generator

Features:

* Render recipes with:
    * Picture
    * List of ingredients
    * Cooking times
    * Steps
* Table of contents with links to recipes.
* Ingrendients index

Install deps:

    yarn install

## Preview book in browser

Run:

    yarn start

## Build book

Place recipes in the `recipes` directory at the root of the project.

    * One folder per recipe.
    * Each folder contains one `recipe.json` file and a picture.

Generate book as HTML file:

    yarn generate

Build PDF book with [PrinceXML](https://www.princexml.com/):

    bin/prince -o build/book.pdf build/book.html

## TODO

* [ ] Code cleanup (TypeScript)
