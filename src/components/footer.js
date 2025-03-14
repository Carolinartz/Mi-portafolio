export const Footer = () => {
    const footerElement = document.createElement("footer");
    footerElement.setAttribute("class","footer");
    footerElement.innerHTML = `<p> Carolina Ortiz </p><p>| Science & Dev| 2025 ©</p>`;
    return footerElement;
  }