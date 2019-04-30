function increasesize() {
    var size = $('#maintext').css('font-size');
    if (size != '50px') {
        size = parseFloat(size);
        size = size + 1;
        size = size + 'px';
        $('#maintext').css('font-size', size);
    } else {
        $('#up').removeClass('btn-outline-primary');
        $('#up').addClass('btn-danger');
        $('#up').text('Too Big');
    }
}

function decreasesize() {
    var size = $('#maintext').css('font-size');
    if (size == '20px') {
        $('#down').removeClass('btn-outline-primary');
        $('#down').addClass('btn-danger');
        $('#down').text('Too Small');

    } else {
        size = parseFloat(size);
        size = size - 1;
        size = size + 'px';
        $('#maintext').css('font-size', size);
    }
}
