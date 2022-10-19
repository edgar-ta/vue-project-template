import { resolve } from "path";

/** @type {import('vite').UserConfig} */
export default {
    build: {
        // make ./executable the output directory, as explained in 
        // the link below: 
        // https://vitejs.dev/config/build-options.html#build-outdir
        outDir: "executable",
    }
};
