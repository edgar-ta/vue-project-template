function install() {
    npm install;
}

function remove() {
    str-sprim "
    |README.md
    |READMEDEV.md
    |tailwind.config.js
    |vite.config.js
    |scripts.sh
    |" >> ./.gitignore
}

function unstub() {
    for directory in executable images do
        rm "./$directory/.stub"
    done
}

function gitalize() {
    ginit;
    gadd .;
    gommit "Initial commit";
}

function go-vue() {
    install;
    echo "Finished installing node modules"
    remove;
    echo "Finished removing unnecessary files from the project (they were added to the .gitignore)"
    unstub;
    echo "Finished removing stub from empty directories"
    gitalize;
    echo "Finished creating git project"
    echo "Now run `npm run tail` and `npm run dev` in different shells to start development"
}
