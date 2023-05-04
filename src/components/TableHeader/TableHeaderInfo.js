import { createElement } from "../../helpers/createElement.js";

export default function TableHeaderInfo({ title, description }) {
  const TableInfoTitle = createElement("h2", { class: "title" }, title);

  const TableInfoDiscription = createElement("p", {}, description);

  return createElement(
    "div",
    { class: "header__info" },
    TableInfoTitle,
    TableInfoDiscription
  );
}
