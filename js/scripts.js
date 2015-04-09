function binaryTranslator(binary) {
  var decimal = 0;
  var values = 2;
  for (var i = binary.length - 1; i >= 0; i--) {
    decimal = parseInt(binary[i]);
    values *= 2;
  }




  return decimal;
}


jQuery(document).ready(function() {
  $("#words").focus();
  $("#word-order").submit(function(event) {

    $("#result").show();
    event.preventDefault();
  });
});
