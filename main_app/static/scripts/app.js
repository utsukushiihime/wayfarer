
$('#app_post').on('click', function(){
    console.log("click");
    $('.ui.post.modal').modal('show');
});

$('#app_login').on('click', function(){
    console.log("click");
    $('.login.modal').modal('show');
});

$('#app_signup').on('click', function(){
    console.log("click");
    $('.signup.modal').modal('show');
});

$('.carousel').slick({
    slidesToShow: 1,
    dots:false, 
    arrows: true
});
$('#app_post_delete').on('click', function(){
    console.log("click");
    $('.small.modal').modal('show');
});

