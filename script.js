function telephoneCheck() {
  let str = document.getElementById("toConvert").value;

  const validPatterns = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /1\(\d{3}\)\d{3}-\d{4}/
  ];

  document.getElementById("answerDiv").style.display = "block";

  if (validPatterns.some((pattern) => pattern.test(str))) {
    return document.getElementById("answer").innerHTML = "It is a VALID phone number"
  } else {
    return document.getElementById("answer").innerHTML = "It is NOT a valid phone number"
  }
}

document.getElementById("convert").onclick = function () { telephoneCheck(); };
document.getElementById("answerDiv").style.display = "none";