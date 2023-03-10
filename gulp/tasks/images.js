import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import imageminWebp from 'imagemin-webp';


export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Images",
                message: "Error <%= error.message %>"
            }))
        )
        


        // .pipe(imagemin({
        //                 progressive: true,
        //                 svgPlugins: [{ removeViewBox: false }],
        //                 interlaced: true,
        //                 optimizationLevel: 3,
        //     plugins: [
        //         imageminWebp({quality: 50})
        //     ]
        // }))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.gulp.src(app.path.src.images))
        .pipe(imagemin({
                        progressive: true,
                        svgPlugins: [{ removeViewBox: false }],
                        interlaced: true,
                        optimizationLevel: 3
        }))


        //.pipe(app.plugins.newer(app.path.build.images))

        
        // .pipe(
        //     app.plugins.if(
        //         app.isBuild,
        //         app.gulp.dest(app.path.build.images)
        //     )
        // )
        // .pipe(
        //     app.plugins.if(
        //         app.isBuild,
        //         app.gulp.src(app.path.src.images)
        //     )
        // )
        // .pipe(
        //     app.plugins.if(
        //         app.isBuild,
        //         app.plugins.newer(app.path.build.images)
        //     )
        // )
        // .pipe(
        //     app.plugins.if(
        //         app.isBuild,
        //         imagemin({
        //             progressive: true,
        //             svgPlugins: [{ removeViewBox: false }],
        //             interlaced: true,
        //             optimizationLevel: 3
        //         })
        //     )
        // )
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
}