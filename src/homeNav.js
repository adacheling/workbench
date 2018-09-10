const home = [
  { File: '' },
  { Edit: '' },
  { View: '' },
  { Catalog: '' },
  {
    Solution: [
      { Build: '/solution/build' },
      { Operate: '/solution/operate' },
      { Visualize: '/solution/visualize' },
    ],
  },
  { Metrics: '' },
  { Tools: '' },
  { Scripts: '' },
  { Help: '' },
];

const build = [
  { File: '' },
  { Edit: '' },
  { View: '' },
  {
    Build: [
      { Elicit: '/solution/build/elicit' },
      { Search: '/solution/build/search' },
      { Discover: '/solution/build/discover' },
      { Reuse: '/solution/build/reuse' },
      { Adapt: '/solution/build/adapt' },
      { Deploy: '/solution/build/deploy' },
    ],
  },
  { Operate: '' },
  { Visualize: '' },
  { Help: '' },
];

const operate = [
  { File: '' },
  { Edit: '' },
  { View: '' },
  { Build: '' },
  { Operate: '' },
  { Visualize: '' },
  { Help: '' },
];

const visualize = [
  { File: '' },
  { Edit: '' },
  { View: '' },
  { Build: '' },
  { Operate: '' },
  { Visualize: '' },
  { Help: '' },
];

module.exports = (key) => {
  switch (key) {
	case 'solution':
	case 'solution/workspace':
    case '/solution/build':
    case '/solution/build/search':
    case '/solution/build/elicit':
    case '/solution/build/discover':
	case '/solution/build/discoverreview':
    case '/solution/build/reuse':
    case '/solution/build/adapt':
    case '/solution/build/deploy':
	case '/solution/operate':
	case '/solution/operaterun':
	case 'solution/visualize':
	case 'solution/visreview':
      return build;

    default:
      return home;
  }
};
