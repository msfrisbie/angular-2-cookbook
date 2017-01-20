module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: [
      'jasmine'
    ],
    files: [
      'src/*.spec.js'
    ],
    plugins : [
      'karma-webpack',
      'karma-jasmine', 
      'karma-phantomjs-launcher'
    ],
    preprocessors: {
      'src/*.spec.js': ['webpack']
    }
  })
}