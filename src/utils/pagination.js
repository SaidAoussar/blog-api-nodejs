const paginatedResults = (model) => {
  return async (req, res, next) => {
    const page =
      req.query.page && req.query.page > 0 ? parseInt(req.query.page) : 1;
    const pageSize = 10;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const result = {};

    //get total of item
    const totalItem = await model.count();
    result.totalPage = Math.ceil(totalItem / pageSize);
    result.totalItem = totalItem;

    if (endIndex < totalItem) {
      result.next = page + 1;
    }

    result.currentPage = page;
    if (startIndex > 0) {
      result.previous = page - 1;
    }

    try {
      result.items = await model.find({}).limit(pageSize).skip(startIndex);
      res.paginatedResults = result;
      next();
    } catch (e) {
      console.log(e);
    }
  };
};

module.exports.paginatedResults = paginatedResults;
