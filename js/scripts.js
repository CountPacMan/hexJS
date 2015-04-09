function binaryTranslator(binary) {
  var decimal = 0;

  for (var i = 0; i < binary.length; i++) {
    decimal *= 2;
    decimal += parseInt(binary[i]);
  }

  return decimal;
}


jQuery(document).ready(function() {
  $("#binary").focus();
  $("#binary-form").submit(function(event) {

    var binary = $("#binary").val();
    var decimal = binaryTranslator(binary);

    $("#decimal").text(decimal);
    $("#result").show();
    event.preventDefault();
  });
});
