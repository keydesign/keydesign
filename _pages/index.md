---
layout: default
permalink: /
sponsors:
- ActivAngel
- AeroPress
- BluElement
- Cesium
- Fivestars
- FlameKing
- GE
- Golden Trees
- Graco
- Griffin
- Hansnap
- Hartmann
- Jame Technology
- Lennox
- Lilly
- LiveCopper
- NaturesCooling
- Neotop
- Newgy
- Optari
- Osmo
- Patchworks
- Puregear
- Smartbee
- Somnarus
- TiltFive
- Tovbot
- Victorinox
- Zagg
- Zuslab
---
<div style="height: var(--size-unit-3);" id="work"></div>
{% include project_grid.html items=site.projects order=site.project_order %}
<span class="separator separator-text">CONCEPTS</span>
{% include project_grid.html items=site.ideas order=site.idea_order %}
<span class="separator separator-text">CLIENTS</span>
<div
  class="grid grid-10-small"
  style="gap: var(--size-unit-2); padding-bottom: var(--size-unit-5);"
>
  {% for sponsor in page.sponsors %}
    <div class="grid-item" style="overflow: hidden; aspect-ratio: 1.6;">
      <img style="object-fit: contain;" src="{{ site.baseurl }}/assets/images/clients/{{ sponsor }}.jpg">
    </div>
  {% endfor %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    let isAutoScrolling = false;

    function getElementHeight(elementId) {
      const element = document.getElementById(elementId);
      if (!element) return 0;
      return element.offsetHeight;
    }

    const sections = [
      { id: 'work', link: document.querySelector('a[href="#work"]') },
      { id: 'contact', link: document.querySelector('a[href="#contact"]') },
    ];

    function updateActiveMenuItem() {
      if (isAutoScrolling) return;
      const heights = sections.map(({ id }) => getElementHeight(id));
      const cumulativeHeights = heights.reduce((acc, height, index) => {
        acc.push((acc[index - 1] || 0) + height);
        return acc;
      }, []);
      const totalHeight = cumulativeHeights[cumulativeHeights.length - 1];
      const cumulativePercentages = cumulativeHeights.map((height) => height / totalHeight);
      const scrollPosition = document.documentElement.scrollTop;
      const scrollPercentage =
        scrollPosition / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      sections.forEach(({ link }, index) => {
        if (
          (index === 0 && scrollPercentage < cumulativePercentages[index]) ||
          (scrollPercentage > cumulativePercentages[index - 1] && scrollPercentage <= cumulativePercentages[index])
        ) {
          link?.classList.add('active');
        } else {
          link?.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveMenuItem);
    updateActiveMenuItem();

    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    navLinks.forEach((link) => {
      if (link.href.includes('#')) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          const target = document.getElementById(link.getAttribute('href').substring(1));
          if (!target) return;
          let offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 64;
          if (link.getAttribute('href').substring(1) == 'contact')
            offsetPosition = document.documentElement.scrollHeight;
          isAutoScrolling = true;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          navLinks.forEach((item) => item.classList.remove('active'));
          link.classList.add('active');
          setTimeout(() => {
            isAutoScrolling = false;
          }, 1000);
        });
      }
    });

    const match = window.location.href.match(/\/#([^\/]+)/);
    if (match) {
      const target = document.getElementById(match[1]);
      if (!target) return;
      let offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 64;
      if (match[1] == 'contact') offsetPosition = document.documentElement.scrollHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      history.replaceState(null, null, '/');
    }
  });
</script>
