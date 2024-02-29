import seed from "./seed.js";
import Bible from "./bible.js";

export default function workingWithSeed() {
  const data = seed();
  console.info(data);

  const rvr09 = new Bible(
    "592420522e16049f-01",
    "Reina Valera 1909",
    "Biblia Reina Valera 1909",
    "RVR09"
  );
  rvr09.getName();
  rvr09.getDescription();
  rvr09.getAbb();
  console.info(rvr09);
}
