$("#toShow").hide();

$('#submit').click(function() {
    // Calculates purity
    var sinList = document.querySelectorAll('input[type="checkbox"]:checked');
    var sins = sinList.length;
    var purity = sins;

    // Shows the score in the h1
    $('#score').html(purity);
    
    // Shows the score and hides the checks
    $("#toShow").show();
    $("#toHide").hide();
});

// On click of the reset button: 
$('#reset').click(function() {
    $('input:checkbox').prop('checked', false);
});