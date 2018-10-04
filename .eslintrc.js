/*eslint linebreak-style: ["error", "windows"]*/
module.exports = {
    "extends": "airbnb-base",
    rules:{
        "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
        "comma-dangle":0
      }
};