window.addEventListener("DOMContentLoaded", () => {
    var animation = document.getElementsByTagName('html')[0];
    var loadedScript = null;
    var hasRefreshed = false;


    function toggle() {
        if (animation.classList.contains("dark")) {
            loadScript("statics/js/flower.js");
        } else if (animation.classList.contains("light")) {
            loadScript("statics/js/snow.js");
        }
    }

    function loadScript(src) {
        if (loadedScript) {
            loadedScript.remove();
        }

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = src;

        script.onload = function() {
            loadedScript = script;
        };

        document.head.appendChild(script);
    }


    toggle();
});