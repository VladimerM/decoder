const input = document.getElementById("input");
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
  output.value = convertEncoding(input.value, charmaps.lat, charmaps.utf);
});

clearButton.addEventListener("click", () => {
  output.value = "";
  input.value = "";
});
