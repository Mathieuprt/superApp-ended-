var mobileTrigger = document.getElementsByClassName('menu-toggler');
var mobileMenu = document.getElementsByClassName('menu-header');

$(mobileTrigger).click(function(){
    $(mobileMenu).toggleClass('opened')
    $(mobileTrigger).toggleClass('active')
})