import { createElement } from "../../helpers/createElement.js";
import TableHeaderInfo from "./TableHeaderInfo.js";

export function TableHeader() {
  const TableHeaderImage = createElement("img", {
    src: "./src/assets/images/leagues/premier-league.png",
    alt: "Premier League",
    class: "header__logo",
  });

  return createElement(
    "header",
    {},
    TableHeaderImage,
    TableHeaderInfo({
      title: "Premier League",
      description: "Season 2022 - 2023",
    })
  );
}
