// ProcessLasso CLI helper
// Usage: node tools/cli.js --help
const product = 'ProcessLasso';
const keyword = 'process lasso';

function main(argv) {
  if ((argv || []).includes('--help')) {
    console.log(product + ' — ' + keyword);
    return 0;
  }
  console.log(JSON.stringify({ product, keyword, ok: true }));
  return 0;
}

if (require.main === module) {
  process.exit(main(process.argv.slice(2)));
}

module.exports = { main };
