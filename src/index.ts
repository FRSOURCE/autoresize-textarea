const ATTRIBUTE_NAME = "data-frs-autoresize-textarea";

export const attach = (element: HTMLTextAreaElement) => {
  if (element.getAttribute(ATTRIBUTE_NAME)) return;
  element.setAttribute(ATTRIBUTE_NAME, "true");

  let prevHeight = "";
  const inputHandler = () => {
    if (
      element.scrollHeight > element.clientHeight ||
      prevHeight === element.style.height
    ) {
      element.style.height = "auto";
      element.style.height = prevHeight =
        element.scrollHeight +
        (element.offsetHeight - element.clientHeight) +
        "px";
    }
  };

  element.style.overflow = "hidden";
  element.style.boxSizing = "border-box";

  inputHandler();

  element.addEventListener("input", inputHandler);

  return {
    detach() {
      element.removeEventListener("input", inputHandler);
    },
  };
};
