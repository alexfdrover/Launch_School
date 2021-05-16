$.ajax({
  url: '/my-blog-post',
  type: 'GET',
  dataType: 'json',
}).done(function(json) {
  console.log(json);
});