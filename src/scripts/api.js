var API = {
  server: "https://react-blogging-app.onrender.com/api/blogs",

  create: function (url, blog, successCB, errorCB = null) {
    $.ajax({
      url: url,
      type: "POST",
      data: JSON.stringify(blog),
      contentType: "application/json",
      success: successCB,
      error:
        errorCB ||
        function (error) {
          console.error("blog: Failed to create blog", error);
        },
    });
  },

  readAll: function (url, successCB, errorCB = null) {
    $.ajax({
      url: url,
      type: "GET",
      contentType: "application/json",
      success: successCB,
      error:
        errorCB ||
        function (error) {
          console.error("blog: Failed to fetch blogs", error);
        },
    });
  },

  findOne: function (name, successCB, errorCB = null) {
    $.ajax({
      url: `https://blog-server-rbk.herokuapp.com/api/blogs/${name}`,
      type: "GET",
      contentType: "application/json",
      success: successCB,
      error:
        errorCB ||
        function (error) {
          console.error("blog: Failed to fetch blogs", error);
        },
    });
  },
};

export default API;
