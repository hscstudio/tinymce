configure({
  sources: [
    source('amd', 'tinymce.plugins.lists', '../../src/main/js', function (id) {
      return mapper.hierarchical(id).replace(/^tinymce\/plugins\/lists\//, '');
    })
  ]
});