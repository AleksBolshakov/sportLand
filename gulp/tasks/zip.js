import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
    del(`${project}.zip`);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Zip",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(zipPlugin(`finabank.zip`))
        .pipe(app.gulp.dest(`${app.path.buildFolder}`));
}