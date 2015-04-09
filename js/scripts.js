function getDecimal(hex) {
  var decimal = 0;
  var hex_letters = "abcdef";
  var hex_values = {'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15};

  for (var i = 0; i < hex.length; i++) {
    decimal *= 16;
    if (hex_letters.indexOf(hex[i]) === -1) {
      decimal += parseInt(hex[i]);
    } else {
      decimal += hex_values[hex[i]];
    }
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
