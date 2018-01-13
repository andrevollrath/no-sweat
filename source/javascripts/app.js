$(document).ready(function() {
  $('#merge').on('click', function (e) {
    var o = $('#original').val();

    var a = $('#one').val();
    var b = $('#two').val();
    var c = $('#three').val();
    var d = $('#four').val();

    var m = o.replace('@@',a).replace('##',b).replace('$$',c).replace('%%',d);
    $('#merged').val(m);


  });
});