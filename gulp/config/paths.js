import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = 'dist';
const srcFolder = 'src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/img/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        favicon: `${buildFolder}/`,
        assets: `${buildFolder}/`,
    },
    src: {
        js: `${srcFolder}/assets/js/index.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp, svg}`,
        svg: `${srcFolder}/assets/img/**/*.svg`,
        scss: `${srcFolder}/assets/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        fonts: `${srcFolder}/assets/fonts/*`,
        favicon: `${srcFolder}/favicon/`,
        assets: `${srcFolder}/**/*.json`,
    },
    watch: {
        js: `${srcFolder}/assets/js/**/*.js`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        html: `${srcFolder}/**/*.html`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
};