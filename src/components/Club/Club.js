import { createElement } from "../../helpers/createElement.js";
import ClubInfo from "./ClubInfo.js";

export default function Club({ clubData }) {
  const ClubTitle = createElement(
    "h4",
    { class: "club__content" },
    clubData?.position ?? "-"
  );
  return createElement(
    "div",
    { class: "club" },
    ClubTitle,
    ClubInfo({ name: "Arsenal", image: "ARS" })
  );
}
