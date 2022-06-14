const ATTRIBUTE_NAME = "data-frs-autoresize-textarea";

export const attach = (element: HTMLTextAreaElement) => {
  if (element.getAttribute(ATTRIBUTE_NAME)) return;
  element.setAttribute(ATTRIBUTE_NAME, "");

  let prevHeight = "";
  const inputHandler = () => {
    if (
      element.scrollHeight > element.clientHeight ||
      prevHeight === element.style.height
    ) {
      const currentOverflow = element.style.overflow;
      element.style.height = "auto";
      element.style.overflow = "hidden";
      element.style.height = prevHeight = `${
        element.scrollHeight + (element.offsetHeight - element.clientHeight)
      }px`;
      element.style.overflow = currentOverflow;
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
      descriptor?.set?.apply<unknown, unknown[], unknown>(
        this,
        // eslint-disable-next-line prefer-rest-params
        arguments as unknown as unknown[]
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
