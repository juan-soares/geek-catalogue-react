export default function stringToUrl(string) {
  let urlString = string
    .toLowerCase()
    .replaceAll(/: | /gu, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "");
  return urlString;
}
