$(document).ready(function() {
    main();
    assignListenersByClass();
});


var main = function() {

};

var assignListenersByClass = function(event,cb,name) {
  $(name).each(function() {
    $(this).on(event, cb($(this)));
  });
};
