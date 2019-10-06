function getStyles(styles, values) {
  let str = "";
  styles.forEach((style, idx) => {
    if (values[idx]) {
      str += `${style}${values[idx]}`;
    } else {
      str += `${style}`;
    }
  });
  return str;
}

function div(styles, ...values) {
  return `<div style="${getStyles(styles, values)}"></div>`;
}

function section(styles, ...values) {
  return `<section style="${getStyles(styles, values)}"></section>`;
}

function dollar(strings, ...values) {
  var str = "";
  strings.forEach((string, idx) => {
    if (values[idx]) {
      str += `
        ${string}
        ${typeof values[idx] === "number" ? `$${values[idx]}` : values[idx]}
      `;
    } else {
      str += `${string}`;
    }
  });

  return str;
}

export { div, section, dollar };
