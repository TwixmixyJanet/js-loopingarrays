var programmingLanguages = [
  "JavaScript (Vanilla)",
  "JS React",
  "Advanced CSS",
  "Wordpress/PHP",
  "Ruby",
  "Python",
  "Coldfusion",
  "SQL",
  "Salesforce",
  "CSPO",
  "Scrum Master"
];
console.log(programmingLanguages);

for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}`);
}

programmingLanguages.forEach(function (language, index) {
  console.log(
    `The ${language.toUpperCase()} language has a priority of ${index + 1}.`
  );
});

var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});
console.log(updatedLanguages);
