const path = require('path')

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../package/index.js'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          },
        ]
      },
    ]
  },
}

const configs = [
  Object.assign({}, config, {
    output: {
      filename: 'umd.min.js',
      path: path.resolve(__dirname, '../packaged'),
      libraryTarget: 'umd',
      library: 'CanvasXML',
      libraryExport: 'default'
    },
    optimization: {
      minimize: true
    }
  }),
  Object.assign({}, config, {
    output: {
      filename: 'umd.js',
      path: path.resolve(__dirname, '../packaged'),
      libraryTarget: 'umd',
      library: 'CanvasXML',
      libraryExport: 'default'
    },
    optimization: {
      minimize: false
    }
  }),
  Object.assign({}, config, {
    output: {
      filename: 'cmj.min.js',
      path: path.resolve(__dirname, '../packaged'),
      libraryTarget: 'commonjs'
    },
    optimization: {
      minimize: true
    }
  }),
  Object.assign({}, config, {
    output: {
      filename: 'cmj.js',
      path: path.resolve(__dirname, '../packaged'),
      libraryTarget: 'commonjs'
    },
    optimization: {
      minimize: false
    }
  }),
]

module.exports = configs