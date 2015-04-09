describe('getWordOrder', function() {
  it("returns 0 for input of 0", function() {
    expect(binaryTranslator('0')).to.equal(0);
  });

  it("returns 1 for input of 1", function() {
    expect(binaryTranslator('1')).to.equal(1);
  });

  // it("returns  for input of ", function() {
  //   expect(binaryTranslator('')).to.equal(['']);
  // });


});
