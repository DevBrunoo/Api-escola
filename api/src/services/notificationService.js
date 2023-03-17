const logger = require('../utils/logger');

describe('logger', () => {
  it('should log messages to console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const message = 'Test log message';
    logger.log(message);
    expect(consoleSpy).toHaveBeenCalledWith(message);
    consoleSpy.mockRestore();
  });
});
