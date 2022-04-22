export const sequentialFadeIn = (className: string) => {
  if (typeof window !== "undefined") {
    Array.prototype.slice
      .call(document.querySelectorAll(`.${className}`))
      .forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove("opacity-0");
          item.classList.remove("-translate-y-10");
        }, 250 * (index + 1));
      });
  }
};
