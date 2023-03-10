import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщение (подсказок)
import browserSync from "browser-sync";
import newer from "gulp-newer";
import gulpIf from "gulp-if";

export const plugins = {
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: gulpIf
}