describe('pageflow.browser.Agent', function() {
  var Agent = pageflow.browser.Agent;

  describe ('#matchesSafari11AndAbove', function() {
    it('returns false for Safari 10', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3)' +
        'AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8'
      );

      expect(agent.matchesSafari11AndAbove()).to.eq(false);
    });

    it('returns true for Safari 11', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) ' +
        'AppleWebKit/604.1.28 (KHTML, like Gecko) Version/11.0 Safari/604.1.28'
      );

      expect(agent.matchesSafari11AndAbove()).to.eq(true);
    });

    it('returns true for Safari 12', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) ' +
        'AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15'
      );

      expect(agent.matchesSafari11AndAbove()).to.eq(true);
    });

    it('returns false for anything only containing a matching version string', function() {
      var agent = new Agent(
        'Version/11.0 something else'
      );

      expect(agent.matchesSafari11AndAbove()).to.eq(false);
    });

    it('returns false for Chrome', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
      );

      expect(agent.matchesSafari11AndAbove()).to.eq(false);
    });

    it('returns false for Edge', function() {
      var agent = new Agent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
      );

      expect(agent.matchesSafari11AndAbove()).to.eq(false);
    });
  });
});
