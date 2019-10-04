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

export { div, section };
