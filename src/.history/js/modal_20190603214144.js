$(document).ready(function() {
    var button = $('#button');
    var modal = $('#modal');
    varclose=$('#close')

    button.on('click', function() {
        modal.addClass('modal_active');
    });
})