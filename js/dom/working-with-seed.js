import Bible from "./bible.js";
import Biblia from "./biblia.js";

async function getData() {
  let response = await fetch("js/dom/data.json");
  let json = await response.json();
  return json;
}

export default async function getBiblesData() {
  let data = await getData();
  let bibles = data.bibles;
  bibles.forEach((el) => {
    let bible = new Biblia(el.id, el.name, el.description, el.abbreviation);
    bible.setType = el.type;
    console.info(bible.toString);
  });
}
