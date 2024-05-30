const Handlebars = require("handlebars");

module.exports = {
  //Date format helper function
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  //Adds in the existing value to the edit post page
  title_input: (value) => {
    const val = Handlebars.escapeExpression(value);
    return new Handlebars.SafeString(
      "<input class='form-input' id='post-title' type='text' value='" + val + "'/>"
    );
  },
  //Adds in the existing value to the edit post page
  content_input: (value) => {
    const val = Handlebars.escapeExpression(value);
    return new Handlebars.SafeString(
      "<textarea class='form-input' id='post-content' >" + val + "</textarea>"
    );

  }
};
