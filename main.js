const input = document.getElementById("input");
const dummyInput = document.getElementById("dummy-input");
const output = document.getElementById("output");
const clearButton = document.getElementById("clear");
const charmaps = {
  utf: "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ",
  lat: "abgdevzTiklmnopJrstufqRySCcZwWxjh",
};
const convertEncoding = function (subject, fromChars, toChars) {
  var re = "";
  for (i = 0; i < fromChars.length; i++) {
    re = new RegExp(fromChars[i], "gm");
    if (re.test("")) {
      subject = subject.replace(re, "");
      continue;
    }
    subject = subject.replace(re, toChars[i]);
  }
  return subject;
};

input.addEventListener("input", () => {
  dummyInput.value = convertEncoding(input.value, charmaps.lat, charmaps.utf);
  output.value = dummyInput.value;
});

clearButton.addEventListener("click", () => {
  output.value = "";
  input.value = "";
});
