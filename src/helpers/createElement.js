export function createElement(tagName, props = {}, ...childrens) {
  const tag = document.createElement(tagName);

  Object.keys(props).forEach((prop) => {
    tag.setAttribute(prop, props[prop]);
  });
  childrens.forEach((child) => {
    tag.append(child);
  });

  return tag;
}
