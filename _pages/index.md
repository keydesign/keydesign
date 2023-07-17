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
    <div id="work" class="section bottomBorder" style="padding-top: 0;">
        <div class="wrapper">
        {% assign projects = site.projects | where: "active", true %}
        {% for project in projects %}
        <a href="{{ project.url | prepend: site.baseurl }}">
            <div class="item zoom-container">
                <img src="{{ project.main_image | prepend: site.baseurl }}" alt="{{ project.title }}: Main image" class="zoom-image">
                <div class="caption"><span>{{ project.title }}</span><span>{{ project.client }}</span></div>
            </div>
        </a>
        {% endfor %}
        </div>
    </div>
    <div id="ideas" class="section bottomBorder">
        <div class="wrapper">
            {% assign ideas = site.ideas | where: "active", true %}
            {% for idea in ideas %}
            <a href="{{ idea.url | prepend: site.baseurl }}">
                <div class="item zoom-container">
                    <img src="{{ idea.main_image | prepend: site.baseurl }}" alt="{{ idea.title }}: Main image" class="zoom-image">
                <div class="caption"><span>{{ idea.title }}</span><span>{{ idea.client }}</span></div>
                </div>
            </a>
            {% endfor %}
        </div>
    </div>
    <div id="clients" class="section" style="padding-bottom: 35pt">
        <div class="clientGrid">
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_ActivAngel.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_AeroPress.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Fivestars.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_FlameKing.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_GE.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Golden Trees.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Graco.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Griffin.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Hartmann.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Jame Technology.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Lennox.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Lilly.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_LiveCopper.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_NaturesCooling.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Neotop.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Newgy.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Optari.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Osmo.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Somnarus.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_TiltFive.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Tovbot.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Victorinox.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Zagg.jpg"></div>
            <div class="item"><img src="{{ site.baseurl }}/assets/images/clients/logo_Zuslab.jpg"></div>
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
        } else if (documentHeight - windowOffsetY - window.innerHeight <= 20) {
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