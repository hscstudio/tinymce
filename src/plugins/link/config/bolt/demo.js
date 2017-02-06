configure({
  configs: [
    './prod.js'
  ],
  sources: [
    source('amd', 'tinymce.plugins.link.demo', '../../src/demo/js', function (id) {
      return mapper.hierarchical(id).replace(/^tinymce\/plugins\/link\//, '');
    })
  ]
});

