# docs.planetscale.com

<img width="1413" alt="CleanShot 2021-07-21 at 16 20 19@2x" src="https://user-images.githubusercontent.com/623670/126571869-a90c4abe-b1e1-4b75-a335-9f4ffe0e0d8f.png">

## Internals

- [NextJS](https://nextjs.org/)
- [Stitches](https://stitches.dev/)
- [Radix](https://radix-ui.com/)

## Local development setup

### MacOS

- Install homebrew (https://brew.sh/)
- Install node and npm
- Git clone this repository (`git@github.com:planetscale/docs.planetscale.com.git`)
- Switch to repository's folder
- Install package dependencies with `npm install`
- Execute `npx next dev` or `npm run develop` to start a local nextJS server
- Access development server at `http://localhost:3000`. Check terminal to find the actual port being used by your nextJS local server.

## How to

### Add a new document

- All pages in the documentation are markdown (.mdx) files with a frontmatter block on the top. The frontmatter block defines the title and (optionally) a subtitle and/or banner for the page.
- When creating a new document, also create a corresponding entry in `meta.json` to define the category and position of the document's link in the navigation list.

### Add a theme sensitive asset (image)

- An image can be added with corresponding `light` and `dark` equivalents by having two assets: `ASSET_NAME_light.png` and `ASSET_NAME_dark.png`.
- The image link to be used in a `.mdx` document needs to be the `light` version of the asset i.e. `ASSET_NAME_light.png`.

## Notes

- Search is powered by [DocSearch](https://docsearch.algolia.com/). PlanetScale's configuration on DocSearch can be viewed [here](https://github.com/algolia/docsearch-configs/blob/master/configs/planetscale.json)
- Sitemap is only generated during a build and is not checked in to the repo.
