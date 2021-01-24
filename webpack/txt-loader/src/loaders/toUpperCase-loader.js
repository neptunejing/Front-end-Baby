// // async
// function loader(source) {
//   const callback = this.async();
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(source.toUpperCase());
//     }, 1000);
//   }).then((source) => callback(null, `console.log('${source}')`));
// }

// module.exports = loader;

// sync
function loader(source) {
  source = source.toUpperCase();
  return `console.log('${source}')`;
}

module.exports = loader;