module.exports = idx => {

  return ((idx % 2) === 0) ?
    'orient-left content-align-left image-position-right' :
    'orient-right content-align-right image-position-left';
};
