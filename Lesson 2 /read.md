Do nmp init -y to install package.json
In here we can put taiwind script to watch for changes instead of writing the comand in terminal.

Do npm i -D prettier-plugin-taiwindcss for have prittier plugin.

# sripts in package.json
"scripts": {
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch",
    "prettier": "npx prettier --write **/*.html"
  },

  We need prettier to format classes in certain order as recommended by Tailwind.

  Run npm run tailwind to get CSS folder in build.

  Emojipedia site for emojies.
  Unicode table - for unicodes to use in html.