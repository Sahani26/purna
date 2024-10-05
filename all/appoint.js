// Builds the correct URL to pass into the Advanced Embed Code
const buildURL = () => {
    var teamPage = 'acme-company-sales-team';
    var eventType = document.getElementById('event-type-selection').value;
    return generatedURL = 'https://calendly.com/'+teamPage+'/'+eventType;
  };

  // Show Hide the Custom Form
  const hideForm = () => {
    document.getElementById('main-container').style.display = "none";
  };

  const showCalendly = () => {

    // Call the "Build URL" function
    buildURL();

    // Call the "Hide Form" function
    hideForm();

      // Initialize Calendly Embed
    Calendly.initInlineWidget({
      url: generatedURL,
      prefill: {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
      }
    });

  };