function itemSlideCount(page, resultCount) {
  let itemSlide;
  if (resultCount - ((page - 1) * 10) >= 10) {
    itemSlide = 10;
  } else {
    itemSlide = resultCount - ((page - 1) * 10);
  }
  return itemSlide;
}

module.exports = itemSlideCount
