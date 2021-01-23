const lineRequest = (companyName, email, service, deliveryDate, msg) => {
  const body = {
    companyName: companyName,
    email: email,
    service: service,
    deliveryDate: deliveryDate,
    msg: msg,
  };
  const URL =
    "https://19adbajnne.execute-api.us-east-2.amazonaws.com/line-notification";
  const data = {
    method: "POST",
    body: JSON.stringify(body),
  };
  fetch(URL, data).catch((err) => {
    console.log(err);
  });
};

const buttonClicked = () => {
  console.log("CLICKされたよーーーーーーーーん");
  const companyName = document.querySelector("#company-name").value;
  const email = document.querySelector("#email").value;
  const service = document.querySelector("#service").value;
  const deliveryDate = document.querySelector("#delivery-date").value;
  const msg = document.querySelector("#msg").value;
  lineRequest(companyName, email, service, deliveryDate, msg);
};

document.querySelector("#button").addEventListener("click", buttonClicked);
