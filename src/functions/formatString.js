export function capitalizeWithWhiteSpace(str = "") {

  return str.replace(/-([a-z])/g, (_, char) => ` ${char.toUpperCase()}`)
    .replace(/^\w/, char => char.toUpperCase());
}


export function lowercaseWithHyphen(str = "") {

  return str.replaceAll(/\s+/g, "-").toLowerCase();
}