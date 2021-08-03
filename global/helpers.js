export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const contactBodyIsValid = ({ name, email, message }) => {
  return (
    name &&
    email &&
    message &&
    name.trim() !== "" &&
    email.trim() !== "" &&
    message.trim() !== "" &&
    emailRegex.test(email)
  );
};

export const generateEmailHtml = (name, phone, email, subject, message, services) => {
  let html = `<p>You have a new contact form submission from sourceup website</p><br>
    <p><strong>Name: </strong> ${name} </p><br>
    ${phone ? `<p><strong>Phone: </strong> ${phone} </p><br>` : ""}
    <p><strong>Email: </strong> ${email} </p><br>
    ${subject ? `<p><strong>Subject: </strong> ${subject} </p><br>` : ""}
    <p><strong>Message: </strong> ${message} </p><br>
    ${services && services.length ? "<p><strong>Services: </strong>" : ""}
    `;

  if (services && services.length) {
    for (const service of services) {
      html += `<span>${service} - </span>`;
    }
  }
  html += "</p>";

  return html;
};
