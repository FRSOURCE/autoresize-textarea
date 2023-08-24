const ATTRIBUTE_NAME = "data-frs-autoresize-textarea";

const cacheParentsScrollTop = (element: Element) => {
  const scrollTopMap = new Map<Element | HTMLElement, number>();

  do {
    scrollTopMap.set(element, element.scrollTop);
  } while ((element = element?.parentNode as Element) instanceof Element);

  return () => {
    for (const [element, scrollTop] of scrollTopMap) {
      if ("style" in element) {
        const currentValue = element.style.scrollBehavior;
        element.style.scrollBehavior = "auto";
        element.scrollTop = scrollTop;
        element.style.scrollBehavior = currentValue;
      } else element.scrollTop = scrollTop;
    }
  };
};

export const attach = (element: HTMLTextAreaElement) => {
  if (element.getAttribute(ATTRIBUTE_NAME)) return;
  element.setAttribute(ATTRIBUTE_NAME, "");

  let prevHeight = "";
  const inputHandler = () => {
    if (
      element.scrollHeight > element.clientHeight ||
      prevHeight === element.style.height
    ) {
      const resetScrollTops = cacheParentsScrollTop(element);
      element.style.height = "auto";

      const currentValue = element.style.overflow;
      element.style.overflow = "hidden";
      element.style.height = prevHeight = `${
        element.scrollHeight + (element.offsetHeight - element.clientHeight)
      }px`;
      element.style.overflow = currentValue;

      resetScrollTops();
    }
  };

  element.style.boxSizing = "border-box";

  inputHandler();

  element.addEventListener("input", inputHandler);

  const elementPrototype = Object.getPrototypeOf(element);
  const descriptor = Object.getOwnPropertyDescriptor(elementPrototype, "value");
  Object.defineProperty(element, "value", {
    ...descriptor,
    set() {
      descriptor?.set?.apply(
        this,
        // eslint-disable-next-line prefer-rest-params
        arguments as unknown as [unknown],
      );
      inputHandler();
    },
  });
  return {
    detach() {
      element.removeAttribute(ATTRIBUTE_NAME);
      element.removeEventListener("input", inputHandler);
    },
    update: inputHandler,
  };
};
