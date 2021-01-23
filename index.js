const lineRequest = (msg, email) => {
  const body = {
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
  const companyName = document.querySelector("#company").value;
  const email = document.querySelector("#email").value;
  lineRequest(email);
};

document.querySelector("#button").addEventListener("click", buttonClicked);
