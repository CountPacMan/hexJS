describe('getDecimal', function() {
  it("returns 0 for input of 0", function() {
    expect(getDecimal('0')).to.equal(0);
  });

  it("returns 7 for input of 7", function() {
    expect(getDecimal('7')).to.equal(7);
  });

  it("returns 11 for input of b", function() {
    expect(getDecimal('b')).to.equal(11);
  });

  it("returns 323 for input of 143", function() {
    expect(getDecimal('143')).to.equal(323);
  });

  it("returns 21432 for input of 53b8", function() {
    expect(getDecimal('53b8')).to.equal(21432);
  });
});
