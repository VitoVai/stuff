const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const imageSchema = new Mongoose.Schema({
  src: {
    type: 'string',
    unique: true,
  },
}, {
  timestamps: true,
});

imageSchema.plugin(uniqueValidator);

const UserModel = Mongoose.model('Image', imageSchema);

module.exports = UserModel;




// {
//   "images" : [
//       { 
//         src: "https://i.pinimg.com/736x/fd/42/33/fd42332f74dfd2a8408accc8503f0476.jpg",
//         main: false,
//       },
//       { 
//         src: "https://www.ancienttreearchive.org/wp-content/uploads/champion-sponsor-350x400.jpg",
//         main: false,
//       },
//       { 
//         src: "https://i.pinimg.com/474x/e9/05/cc/e905ccb2ea77eac49dd900dcd55f382a.jpg",
//         main: true,
//       },
//       { 
//         src: "https://i.pinimg.com/474x/e9/05/cc/e905ccb2ea77eac49dd900dcd55f382a.jpg",
//         main: false,
//       },
//       { 
//         src: "https://i.pinimg.com/474x/e9/05/cc/e905ccb2ea77eac49dd900dcd55f382a.jpg",
//         main: false,
//       },
//       { 
//         src: "https://i.pinimg.com/736x/fd/42/33/fd42332f74dfd2a8408accc8503f0476.jpg",
//         main: false,
//       }
//   ]
// }

// {
//   "images": [
//     {
//       "src": "https://m.media-amazon.com/images/I/51bBz55W1oL.jpg",
//       "main": false
//     },
//     {
//       "src": "https://image.posterlounge.com/img/products/620000/615476/615476_poster_l.jpg",
//       "main": false
//     },
//     {
//       "src": "https://m.media-amazon.com/images/I/61Uqov5H9xL._AC_.jpg",
//       "main": true
//     },
//     {
//       "src": "https://stignace.com/wp-content/uploads/2019/08/fall-colors.jpg",
//       "main": false
//     },
//     {
//       "src": "https://www.pensivly.com/wp-content/uploads/2020/08/012-2-The-Last-Vestiges-of-Autumn.jpg",
//       "main": false
//     },
//     {
//       "src": "https://cdn0.wideopencountry.com/wp-content/uploads/2017/09/cooper-lakes-state-park.jpg",
//       "main": false
//     },
//     {
//       "src": "https://live.staticflickr.com/1853/43899231425_3ae328b3d8.jpg",
//       "main": false
//     }
//   ]
// }