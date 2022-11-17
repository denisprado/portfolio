export default class ScrollHelpers {
  static scrollTo(element, delay, behavior = "smooth") {
    if (typeof window === "undefined") {
      // console.log("no window");
      return;
    }

    window.requestAnimationFrame(() => {
      let offset = element.offsetTop;
      try {
        const bodyRect = document.body.getBoundingClientRect();
        const bodyStyle = window.getComputedStyle(document.body, null);

        // need to handle the padding for the top of the body
        const paddingTop = parseFloat(
          bodyStyle.getPropertyValue("padding-top")
        );

        const elementRect = element.getBoundingClientRect();
        offset = elementRect.top - paddingTop - bodyRect.top;
      } catch (err) {
        console.log("oh noes!");
      }

      if (delay) {
        setTimeout(() => {
          window.scrollTo({ top: offset, left: 0, behavior });
        }, delay);
      } else {
        window.scrollTo({ top: offset, left: 0, behavior });
      }
    });
  }

  static scrollIntoView(element, delay, behavior = "smooth") {
    if (delay) {
      setTimeout(() => {
        element.scrollIntoView({ behavior });
      }, delay);
    } else element.scrollIntoView({ behavior });
  }

  static setScrollPosition(
    { top = 0, left = 0 } = {},
    delay,
    behavior = "smooth"
  ) {
    if (delay) {
      setTimeout(() => {
        window.scroll({ top, left, behavior });
      }, delay);
    } else {
      window.scroll({ top, left }, behavior);
    }
  }

  static scrollTop(delay, behavior = "smooth") {
    if (typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      if (delay) {
        setTimeout(() => {
          window.scroll({ top: 0, left: 0, behavior });
        }, delay);
      } else window.scroll({ top: 0, left: 0, behavior });
    });
  }
}
