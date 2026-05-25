var DIGIOH_LOADER = DIGIOH_LOADER || {};
(function (digioh_loader) {
    if (digioh_loader.loaded) { return; }
    digioh_loader.loaded = true;
    digioh_loader.loads = digioh_loader.loads || {};
    function getPromise (doc) {
        let ld = digioh_loader.loads;
        if (ld[doc]) {
            return ld[doc];
        }
        let p = {};
        p.promise = new Promise((res, rej) => {
            p.resolveCallback = res;
            p.rejectCallback = rej;
        });
        ld[doc] = p;
        return p;
    }
    digioh_loader.getPromise = getPromise;
    const srcPath = "//www.zeropartyforms.com/w37htfhcq2/vendor/ce4ef440-25b1-4e08-a7b2-ab767d4f9915/";

    function createScriptElement(src, id) {
        var e = document.createElement('script');
        e.type = 'text/javascript';
        e.async = true;
        e.fetchPriority = "high";
        e.src = src;
        if (id) { e.id = id; }
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
    }

    function loadScript(doc, filename, cb) {
        if (!digioh_loader.loads[doc]) {
            getPromise(doc);
            let src = `${srcPath}${filename}?cb=${cb}`;
            createScriptElement(src);
        }
    };

    function sendPV() {
        try {
            window.SENT_LIGHTBOX_PV = true;

            var hn = 'empty';
            if (window && window.location && window.location.hostname) {
                hn = window.location.hostname;
            }

            var i = document.createElement("img");
            i.width = 1;
            i.height = 1;
            i.src = ('https://www.zeropartyforms.com/w37htfhcq2/z9g/digibox.gif?c=' + (new Date().getTime()) + '&h=' + encodeURIComponent(hn) + '&e=p&u=45970');
        }
        catch (e) {
        }
    };

    function jsonp(src, callback) {
        const id = "__dgo" + Math.random().toString(36).replace(/^0\./, "");
        const prefix = src.includes("?") ? "&" : "?";
        src += `${prefix}callback=${id}`;
        window[id] = (data) => {
            document.querySelector(`#${id}`)?.remove();
            delete window[id];
            callback(data);
        };
        createScriptElement(src, id);
    }

    function initApi() {
        let c = localStorage.getItem("dgdr") || sessionStorage.getItem("dgdr");
        if (c) {
            if (c.match(/^{.*"env_ver":\s?"digioh-.*}$/i)) {
                const json = JSON.parse(c);
                if (!json.expires || json.expires > Date.now()) {
                    return;
                }
            }
            else {
                return;
            }
        }
        let p = getPromise("dgdr");
        let hostname = window?.location?.hostname || 'empty';
        let uri = `https://www.zeropartyforms.com/a4flkt7l2b/z9gd/ce4ef440-25b1-4e08-a7b2-ab767d4f9915/${hostname}/jsonp/z?cb=${Date.now()}`;
        if (/^true$/.test("false")) {
            uri += "&skip_geo=true";
        }
        jsonp(uri, p.resolveCallback);
    }

    sendPV();
    initApi();

    const qaMode = (window.sessionStorage.getItem('xdibx_boxqamode') == 1 || window.location.href.indexOf('boxqamode') > 0);
    if (qaMode) {
        loadScript("user", "user_qa.js", "639111095055208309");
    loadScript("custom", "custom_qa.js", "99D4B539CBE6F5EDDF872B09D98C8291");
    loadScript("main", "main_qa.js", "2C0AFD7F289158DE0554AB278FDD359E");
    }
    else {
        loadScript("user", "user.js", "639111095055208309");
    loadScript("custom", "custom.js", "FAB5C6AD258056CE4CE79A083D7EB152");
    loadScript("main", "main.js", "0036016EDAA80E99066F39CFE5BC2BF2");
    }

})(DIGIOH_LOADER);