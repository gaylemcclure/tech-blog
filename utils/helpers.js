const Handlebars = require("handlebars");

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  title_input: (value) => {
    const val = Handlebars.escapeExpression(value);
    return new Handlebars.SafeString(
      "<input class='form-input' id='post-title' type='text' value='" + val + "'/>"
    );
  },

  content_input: (value) => {
    const val = Handlebars.escapeExpression(value);
    return new Handlebars.SafeString(
      "<textarea class='form-input' id='post-content' >" + val + "</textarea>"
    );

  }
};
