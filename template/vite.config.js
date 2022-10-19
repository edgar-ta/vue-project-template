import { resolve } from "path";

/** @type {import('vite').UserConfig} */
export default {
    build: {
        // make ./executable the output directory, as explained in 
        // the link below: 
        // https://vitejs.dev/config/build-options.html#build-outdir
        outDir: "executable",
        rollupOptions: {
            input: {
                // this configuration is intended to possibilitate
                // multi page apps, but i use it to change the
                // entry point of mine:
                // https://vitejs.dev/guide/build.html#multi-page-app
                main: resolve(__dirname, "main.html")
            }
        }
    }
};
