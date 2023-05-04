import { createElement } from "../../helpers/createElement.js";

export default function ClubPoinds({ stats = {} }) {
  const PoindsNodes = Object.values(stats).map((stat) =>
    createElement("h4", { class: "club__content" }, stat)
  );
  return createElement("div", { class: "club__points" }, ...PoindsNodes);
}
