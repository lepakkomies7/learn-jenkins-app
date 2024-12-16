module.exports = {
    reporters: [
      'default',
      ['jest-junit', {
        outputDirectory: 'test-results',
        outputName: 'junit.xml',
        suiteName: 'Jest Tests'
      }]
    ]
  };
  