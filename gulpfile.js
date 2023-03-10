// Base module
import gulp from "gulp";

// Import Pahts
import { path } from "./gulp/config/paths.js";
import { plugins } from "./gulp/config/plugins.js";

// Import tasks
import { html } from "./gulp/tasks/html.js";
import { reset } from "./gulp/tasks/reset.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { scss } from "./gulp/tasks/scss.js";
import { server } from "./gulp/tasks/server.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    isWidget: true,
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Watcher
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, scripts);
    gulp.watch(path.watch.images, images);    
}

// Parallels
const mainTask =  gulp.parallel(html, scss, scripts, images, fonts);
const serverWatcher = gulp.parallel(watcher, server);

// Series
export const dev = gulp.series(reset,  mainTask, serverWatcher );
export const build = gulp.series(reset, mainTask );

gulp.task('default', dev);
