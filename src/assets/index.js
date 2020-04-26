/* webpack only */

const requireAll = require.context('.', true, /^(.+)\.png$/);
const assets = requireAll.keys().reduce((accumulator, imageName) => {
  const [, /* fullMatch */ key] = imageName.match(/^\.\/(.+)\.png$/);
  accumulator[key] = requireAll(imageName);
  return accumulator;
}, {});

export default Object.freeze(assets);
