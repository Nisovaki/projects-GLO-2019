$(document).ready(function() {
    var button = $('#button');
    var modal = $('#modal');
    

    button.on('click', function() {
        modal.addClass('modal_active');
    });
})