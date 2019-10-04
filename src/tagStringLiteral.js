function html(strings, ...values) {
  // here i is the iterator for the strings array
  return strings.reduce((result, string, i) => {
    return `${result}${string} <cite>${values[i] || ""}</cite>`;
  }, "");
}

export { html };
