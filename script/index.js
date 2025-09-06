const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
  const url = `https:// openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data));
};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  // wordContainer.innerHTML = "";

  words.forEach((word) => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
    <p> cat </p>
    `;
    wordContainer.append(card);
  });
};

const displayLesson = (lessons) => {
  // 1. get the container & make empty

  const levelContainer = document.getElementById("level-container");

  // 2. get into every lessons

  for (let lesson of lessons) {
    // 3. create element

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button onclick="loadLevelWord(${lesson.level_no})"  class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
    `;
    // append into container

    levelContainer.appendChild(btnDiv);
  }
};

loadLessons();
