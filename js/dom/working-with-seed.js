import seed from "./seed.js";
import Bible from "./bible.js";

export default function workingWithSeed() {
  const data = seed();

  console.info(data);
  const bible = new Bible("592420522e16049f-01", "Reina Valera 1909", "RVR09");
  bible.getBible();
  bible.getName();
}
