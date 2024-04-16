class Tabs {
    constructor(selector, options = {}) {
      this.options = {
        navSelector: options.navSelector || '[data-tab="nav"]',
        contentSelector: options.contentSelector || '[data-tab="content"]',
        titleSelector: options.titleSelector || '[data-tab="title"]',
        activeClass: options.activeClass || 'active',
        contentActiveClass: options.contentActiveClass || 'active-tab',
        updateURL: options.updateURL !== undefined ? options.updateURL : true,
      };
      this.tabsContainer = document.querySelector(selector);
      if (!this.tabsContainer) {
        console.error('Tabs container not found');
        return;
      }
      this.tabNavs = this.tabsContainer.querySelectorAll(this.options.navSelector);
      this.tabContents = this.tabsContainer.querySelectorAll(this.options.contentSelector);
      this.setupARIA();
      this.init();
    }
  
    setupARIA() {
      this.tabsContainer.setAttribute('role', 'tablist');
      this.tabNavs.forEach((nav, index) => {
        const panelId = `tabpanel${index}`;
        const tabId = `tab${index}`;
  
        nav.setAttribute('role', 'tab');
        nav.setAttribute('aria-selected', 'false');
        nav.setAttribute('aria-controls', panelId);
        nav.setAttribute('id', tabId);
        nav.setAttribute('tabindex', '-1'); // Make it focusable
      });
  
      this.tabContents.forEach((content, index) => {
        const tabId = `tab${index}`;
  
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-labelledby', tabId);
        content.setAttribute('aria-hidden', 'true');
        content.setAttribute('id', `tabpanel${index}`);
        content.setAttribute('tabindex', '0'); // Make it focusable
      });
    }
  
    init() {
      this.tabNavs.forEach((nav, index) => {
        nav.addEventListener('click', () => this.activateTab(index));
        nav.addEventListener('keydown', (e) => this.handleKeydown(e, index));
      });
  
      const initialIndex = this.options.updateURL && window.location.hash ? this.findIndexFromHash(window.location.hash) : 0;
      this.activateTab(initialIndex);
    }
  
    handleKeydown(e, index) {
      let newIndex = index;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        newIndex = index === this.tabNavs.length - 1 ? 0 : index + 1;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        newIndex = index === 0 ? this.tabNavs.length - 1 : index - 1;
      }
      this.activateTab(newIndex);
      this.tabNavs[newIndex].focus(); // Move focus to the new tab
    }
  
    findIndexFromHash(hash) {
      return Array.from(this.tabNavs).findIndex(nav => {
        const title = nav.querySelector(this.options.titleSelector);
        return title && `#${this.slugify(title.innerText)}` === hash;
      });
    }
  
    activateTab(index) {
      this.tabNavs.forEach((nav, i) => {
        const isSelected = i === index;
        nav.classList.toggle(this.options.activeClass, isSelected);
        nav.setAttribute('aria-selected', isSelected.toString());
        nav.setAttribute('tabindex', isSelected ? '0' : '-1');
      });
  
      this.tabContents.forEach((content, i) => {
        const isActive = i === index;
        content.classList.toggle(this.options.contentActiveClass, isActive);
        content.setAttribute('aria-hidden', (!isActive).toString());
        if (isActive) fadeIn(content, 500, 'block'); else content.style.display = 'none';
      });
  
      if (this.options.updateURL) {
        const activeNav = this.tabNavs[index];
        const title = activeNav.querySelector(this.options.titleSelector);
        if (title) {
          const slug = this.slugify(title.innerText);
          window.history.replaceState(null, '', `#${slug}`);
        }
      }
    }
  
    slugify(text) {
      return text.toString().toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
    }
  }
  
  const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || "block";
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 10);
  };