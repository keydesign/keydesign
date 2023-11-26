---
layout: default
styles:
  - "/assets/css/index.css"
permalink: /
---
<div class="content">
    <p id="statement" class="section statement">
        Committed to creating success through <br class="hideWhenSmallScreen">innovative, beautiful, and empathetic design
    </p>
    {% include project_grid.html section_id="work" items=site.projects order=site.project_order %}
    {% include project_grid.html section_id="ideas" items=site.ideas order=site.idea_order %}
    <div id="clients" class="section" style="padding-bottom: 35pt">
        <div class="clientGrid">
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_ActivAngel.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_AeroPress.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Fivestars.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_FlameKing.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_GE.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Golden Trees.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Graco.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Griffin.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Hartmann.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Jame Technology.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Lennox.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Lilly.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_LiveCopper.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_NaturesCooling.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Neotop.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Newgy.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Optari.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Osmo.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Somnarus.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_TiltFive.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Tovbot.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Victorinox.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Zagg.jpg"></div>
            <div class="item"><img class="lazy-load" src="{{ site.baseurl }}/assets/images/clients/logo_Zuslab.jpg"></div>
        </div>
    </div>
</div>

<script>
    const revealPoint = window.innerHeight / 2;
    const sectionMap = {};
    const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
    const navLinks = Array.from(document.querySelectorAll(".nav-link")).reverse();
    const linkCount = navLinks.length;

    // Cache section offsets
    navLinks.forEach(function (navLink) {
        const href = navLink.getAttribute("href");
        if (href && href.startsWith("#")) {
            const section = document.getElementById(href.slice(1));
            if (section) {
                sectionMap[navLink] = section.offsetTop;
            }
        }
    });

    function revealSection() {
        const isActive = Array(linkCount).fill(false);
        const windowOffsetY = window.pageYOffset;

        if (windowOffsetY < 20) {
            // Handle special case when scrolling to the top
        } else if (documentHeight - windowOffsetY - window.innerHeight <= 50) {
            // Handle special case when scrolling to the bottom
            isActive[0] = true;
        } else {
            for (let index = 0; index < linkCount; index++) {
                const link = navLinks[index];
                const sectionOffset = sectionMap[link];
                if (sectionOffset && windowOffsetY > sectionOffset - revealPoint) {
                    isActive[index] = true;
                    break;
                }
            }
        }

        navLinks.forEach(function (link, index) {
            if (isActive[index]) {
                link.classList.add("active");;
            } else {
                link.classList.remove("active");;
            }
        });
    }

    function scrollToSection(event) {
        event.preventDefault();
        const target = document.getElementById(this.getAttribute("href").substring(1));
        target.scrollIntoView({ behavior: "smooth" });
    }

    navLinks.forEach(function (link) {
        if (link.href.includes('#')) {
            link.addEventListener("click", function (event) {
                scrollToSection.call(this, event);
                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                });
                this.classList.add("active");
            });
        }
    });

    window.addEventListener("scroll", revealSection);
</script>