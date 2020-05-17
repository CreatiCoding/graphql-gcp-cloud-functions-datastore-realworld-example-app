const newPost = require("../models/post/resolver");
module.exports = function ({ store }) {
  const self = {};
  self.resolver_list = {
    post: newPost({ store }),
  };
  self.getQuery = () => {
    return {
      ...self.resolver_list.post,
    };
  };
  return self;
};
