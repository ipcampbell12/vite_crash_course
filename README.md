-Tradition module bundlers: 
    -Bundles togehter all JS modules, CSS and other assets, nmp modules
    -Will bundle everything into a single js file, inside the script tag of html
    -Does this every time you make a change, so can be slow as you install more packages
    -i.e. create-react-app

Vite
-Uses native ES modules in browser
-Uses type attribute for script tag
-Built on top of ES build
-dev server, not module bundler
-uses Rollup to actually bundle files for production (npm run build)


create-react-app
-looks at entry point (index.js)
-bundles all files modules into that file
-transpiles code with babble
-sets up web sockets
-bundles everything
-serves to the browser
-bundles every files for every change (gets slow as application gets bigger)


vite:
-uses es build to pre bundle, do code splitting
-start server and see changes in browser immediately
-uses browser to parse es modules
-requests files from server using http

Commands:
npm create vite@latest

build for production: 
npm run build

(works for quickly)

npm run preview (to preview build)


Features: 
-Can add a server property (port 3000) to the vite.config.js file
-index.html is not in public folder - located in root directory
-script tag use type=module
-Hot module replacement
-Use import.ment.env to import environment variables
-can also use sass out of the box