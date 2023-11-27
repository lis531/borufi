# Astro Starter Kit: Basics

```sh
https://github.com/lis531/borufi.git
```

## 🚀 Project Structure

```text
├── public/
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── player/
│   │   └── Player.astro
│   ├── playlist/
│   │   └── Playlist.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.