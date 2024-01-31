/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"], - tell taiwind to look for all html files in build directory
  theme: {
    extend: {},
  },
  plugins: [],
};

In src/input.css we copy:
@tailwind base;
@tailwind components;
@tailwind utilities;

This will compile all predefined itility classes for our use. If we want to define our own classes we do it in this file as well.

In terminal -  npx tailwindcss -i ./src/input.css -o ./build/css/style.css to create output file in build directory.

It gives us predefined stylesheet to use.
Put link in html file to access it.

In terminal -  npx tailwindcss -i ./src/input.css -o ./build/css/ --watch - to watch for changes and compile them all the time.

In Tailwind CSS webpage search for available classes and preefined settings for them.

Tailwind CSS Intellisense extention to give us available classes.
Inline fold extension minimise classes in html.