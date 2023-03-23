import sass from 'sass';
import gulpSass from 'gulp-sass';
import groupmedia from "gulp-group-css-media-queries";
import purgecss from "gulp-purgecss";
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';

const plugins = [
    autoprefixer(),
    cssnano()
];

const sassGulp = gulpSass(sass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Scss",
                message: "Error <%= error.message %>"
            }))
        )
        .pipe(sassGulp({
            outputStyle: 'expanded'
        }))
        
        // .pipe(
        //     app.plugins.if(
        //         app.isBuild,
        //         purgecss({
        //             content: ['src/**/*.html'],
        //             keyframes: true,
        //             variables: true,
        //             fontFace: true,
        //             safelist: [
        //                 'modal-backdrop',
        //                 'show',
        //                 'fixed',
        //                 'is-show',
        //                 'sub__open',
        //                 'visible',
        //                 'transition',
        //                 'caret',
        //                 'check',
        //                 'header__fixed',
        //                 /close+/g,
        //                 /collaps?(e|ing)+/g,
        //                 /^card/,
        //                 /^col/,
        //                 /^glider/
        //             ]
        //         })
        //     )
        // )
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupmedia()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                postcss(plugins)
            )
        )
        
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}