import { generateForm } from "./formUtils";

function showSearchForm() {
  const {form} = generateForm()
}
export function displaySearchResults() {
  console.log('show searched tasks');
  showSearchForm()
}


