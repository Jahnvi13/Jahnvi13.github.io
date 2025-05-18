const achievements = [
  {
    title: "Competitive Programming",
    icon: "uil-brackets-curly",
    items: [
      "Specialist in Codeforces with rating of 1597",
      "Highest rating of 1635 on LeetCode",
      "Highest rating of 1923 in Codechef",
      "162 global rank in Reply Challenge Standard Edition out of 2800+ teams in 2022",
      "166 global rank in Reply Challenge Standard Edition out of 2990+ teams in 2021",
      "364 rank in Code Jam to I/O 2021 out of 6600+ participants",
      "48 in 800+ participants in 2021 Project Her1.0",
      "29 out of 300+ participants in 2021 Coderita2.0 by GeeksForGeeks",
      "721st in 4300+ participants in round H of KickStart 2020",
      "971st in 5100+ participants in round F of KickStart 2020",
      "Secured rank 1456 in Global Coding Challenge by Credit-Suisse"
    ]
  },
  {
    title: "Academics",
    icon: "uil-books",
    items: [
      "8.84 GPA in college.",
      "10 GP in Information Retrieval, Natural Language Processing, Machine Learning, Artificial Intelligence and Data Mining subjects.",
      "97.2% in CBSE class XII securing IIIrd rank at DPS Dwarka",
      "10 GPA in Class X",
      "Among 20 students in Delhi to qualify for state level VVM Camp."
    ]
  },
  {
    title: "Co-curricular",
    icon: "uil-music",
    items: [
      "Awarded vGHC'21 scholarship",
      "Mentee in Microsoft Engage'21",
      `Taught Computer Science to class IX students for 3 months at SVM Education Centre. Uploaded <a href="https://www.youtube.com/channel/UCydPo3aYSieEA4RbbFOHukA">videos </a>on YouTube also.`,
      "I have a 1st year degree in Classical Indian Singing certified by Prayag Sangeet Samiti",
      "Won 3rd prize in Intra-college Just a Minute conducted by ONGC in Vigilance Week",
      `Have written <a href="https://docs.google.com/presentation/d/1LBalCm-wlazaXXrAXQLChfhnQAU_9s4oyQL4bBHmqt4/edit?usp=sharing"> 20+ short stories </a> as part of Creative Writing Specialization on Coursera`
    ]
  },
  {
    title: "Positions of Responsibility",
    icon: "uil-graduation-cap",
    items: [
      "Co-ordinator (and earlier Content Writer) at LeanIn IIIT-Delhi",
      "Branch representative in Student Senate",
      "AI/ML Lead GDSC, IIITD",
      "Volunteer in college fests- Esya and Odyssey"
    ]
  }
];

function renderAchievements() {
  const container = document.getElementById('achievements-root');
  if (!container) return;
  container.innerHTML = `
    <div class="achievements__container container grid">
      <div>
        ${achievements.slice(0,2).map(a => `
          <div class="achievements__content achievements__close">
            <div class="achievements__header">
              <i class="uil ${a.icon} achievements__icon"></i>
              <div>
                <h1 class="achievements__title">${a.title}</h1>
              </div>
              <i class="uil uil-angle-down achievements__arrow"></i>
            </div>
            <ul class="achievements__list grid">
              ${a.items.map(item => `<li class="achievements__name">${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      <div>
        ${achievements.slice(2).map(a => `
          <div class="achievements__content achievements__close">
            <div class="achievements__header">
              <i class="uil ${a.icon} achievements__icon"></i>
              <div>
                <h1 class="achievements__title">${a.title}</h1>
              </div>
              <i class="uil uil-angle-down achievements__arrow"></i>
            </div>
            <ul class="achievements__list grid">
              ${a.items.map(item => `<li class="achievements__name">${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  setupAchievementsDropdown();
}

function setupAchievementsDropdown() {
  const contents = document.querySelectorAll('.achievements__content');
  contents.forEach(content => {
    const header = content.querySelector('.achievements__header');
    if (header) {
      header.onclick = () => {
        content.classList.toggle('achievements__open');
        content.classList.toggle('achievements__close');
      };
    }
  });
}

document.addEventListener('DOMContentLoaded', renderAchievements);