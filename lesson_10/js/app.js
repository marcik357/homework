(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window.addEventListener("scroll", headerChange);
    function headerChange(e) {
        let header = document.querySelector("#header");
        if (window.scrollY > 10) header.classList.add("sticky"); else header.classList.remove("sticky");
    }
    let tabsNav = document.querySelector(".tabs__nav");
    tabsNav.addEventListener("click", activateTab);
    function activateTab(e) {
        let tabs = document.querySelectorAll(".tabs__title");
        let tabsContent = document.querySelectorAll(".tabs__item");
        if (e.target.closest(".tabs__nav")) {
            document.querySelector(".tabs__title--active").classList.remove("tabs__title--active");
            e.target.classList.add("tabs__title--active");
        }
        tabs.forEach(((tab, index) => {
            if (tab.classList.contains("tabs__title--active")) {
                tabsContent.forEach((tab => tab.classList.remove("benefit-tab--active")));
                tabsContent[index].classList.add("benefit-tab--active");
            }
        }));
    }
    window["FLS"] = true;
    isWebp();
})();