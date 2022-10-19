# Read Me Dev

## First Steps

1. Install all of the dependencies:
    ```sh
    npm install
    ```

2. Remove readmes and config files from the project:
    ```
    echo "
    README.md
    READMEDEV.md
    tailwind.config.js
    vite.config.js
    " >> .gitignore
    ```

3. Remove the `.stub` files:
    ```sh
    for directory in executable images do rm "./$directory/.stub"; done
    ```

## Commands

- `npm run dev`
  
    Run the project locally

- `npm run tail`
  
    Run the tailwind watcher

- `npm run build`
  
    Build the project (checkout if it
    did output to `./executable`)
