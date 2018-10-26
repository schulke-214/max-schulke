import Document, { Head, Main, NextScript } from 'next/document';
import variables from '../frontend/styles/var';

let initStyles = `
    .loading {
        display: none;
    }

    .pl-hide {
        display: block;
        ${ /* overflow: hidden; */ ""}
    }

    .pl-hide.logo {
        width: 20px;
        height: 10px;
    }

    #pl {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        padding: ${ variables.spacing.layout.marginOut + 'vw' };
    }

    #pl-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        background-color: ${ variables.colors.highlight };
    }

    #pl-count-wrap {
        display: block;
        width: 25px;
        height: 25px;
        z-index: 1000;
        position: absolute;
        top: calc( 50vh - 12.5px );
        left: calc( 50vw - 12.5px );
        text-align: center;
    }

    #pl-count {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: ${ variables.colors.main };
        font-family: "Spectral";
        text-align: center;
    }

    @media screen and ( max-width: ${ variables.breakpoints.tablet }px ) {
        #pl {
            padding: 50px;
        }
    }

    @media screen and ( max-width:  ${ variables.breakpoints.phone }px ) {
        #pl {
            padding: 37.5px;
        }
    }
`;

class AppDocument extends Document {
    render() {
        return (
            <html lang="de">
                <Head>
                    <link rel="shortcut icon" type="image/png" href="/static/icons/logo-dark-48.png"/>
                    <link rel="manifest" href="/static/manifest.json" />
                    <link rel="stylesheet" href="/static/fonts/fonts.css" />
                    <style>{initStyles}</style>

                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <meta name="description" content="Im a creative developer based in bielefeld, germany!" /* REMINDER FOR FUTURE ME: CHANGE THIS*/ />
                    <meta name="theme-color" content={ variables.colors.main } />
                     
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineLite.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSPlugin.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/easing/EasePack.min.js"></script>                    
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.7.1/pixi.min.js"></script>

                    <script>PIXI.utils.skipHello();</script>
                    <noscript>
                        <meta httpEquiv="Refresh" content="0; URL=https://domain.com/lightweight/" /* REMINDER FOR FUTURE ME: CHANGE THIS*/ />
                    </noscript>
                </Head>
                <body className="loading" >
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default AppDocument;