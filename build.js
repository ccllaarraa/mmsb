// build.js
const Bundler = require("parcel-bundler")
const path = require("path");
const fs = require("fs");

const entryFiles = "./src/index.html";
// const outDir = process.env.NODE_ENV === "production" ?  "web/dist" : "web/tmp";
outDir = "web/build";

const bundler = new Bundler(entryFiles, {
    outDir,
    https: true
});

bundler.on('bundled', (bundle) => {
    let manifest = {};
    for(let b of bundle.childBundles) {
        manifest[b.entryAsset.relativeName] = path.relative(outDir, b.name);
    }
    fs.writeFileSync(outDir+"/manifest.json", JSON.stringify(manifest));
});

bundler.bundle();