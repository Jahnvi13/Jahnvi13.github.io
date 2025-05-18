const qualifications = [
  {
    title: "CS/ECE",
    icon: "uil-laptop",
    items: [
      "Theory of Computation (CSE322)",
      "Fundamentals of Database Management Systems (CSE202)",
      "Analysis and Design of Algorithms (CSE222)",
      "Advanced Programming (CSE201)",
      "Operating Systems (CSE231)",
      "Computer Organization (CSE112)",
      "Data Structures and Algorithms (CSE102)",
      "Prototyping Interactive Systems (DES130)",
      "Digital Circuits (ECE111)",
      "Signals and Systems (ECE250)",
      "Introduction to Programming (CSE101)"
    ]
  },
  {
    title: "AI/ML",
    icon: "uil-brain",
    items: [
      "Statistical Machine Learning (CSE342/CSE542)",
      "Convex Optimization (MTH377)",
      "Introduction to Intelligent Systems (CSE140)"
    ]
  },
  {
    title: "Maths",
    icon: "uil-calculator-alt",
    items: [
      "Discrete Mathematics (CSE121)",
      "Multivariable Calculus (MTH203)",
      "Probability and Statistics (MTH201)",
      "Linear Algebra (MTH100)"
    ]
  },
  {
    title: "Online",
    icon: "uil-search-alt",
    items: [
      "Datacamp: Introduction to Natural Language Processing in Python",
      "Coursera: Creative Writing Specialization"
    ]
  }
];

function renderQualifications() {
  const container = document.getElementById('qualifications-root');
  if (!container) return;
  container.innerHTML = `
    <div class="achievements__container container grid">
      <div>
        ${qualifications.slice(0,2).map(q => `
          <div class="achievements__content achievements__close">
            <div class="achievements__header">
              <i class="uil ${q.icon} achievements__icon"></i>
              <div>
                <h1 class="achievements__title">${q.title}</h1>
              </div>
              <i class="uil uil-angle-down achievements__arrow"></i>
            </div>
            <ul class="achievements__list grid">
              ${q.items.map(item => `<li class="achievements__name">${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      <div>
        ${qualifications.slice(2).map(q => `
          <div class="achievements__content achievements__close">
            <div class="achievements__header">
              <i class="uil ${q.icon} achievements__icon"></i>
              <div>
                <h1 class="achievements__title">${q.title}</h1>
              </div>
              <i class="uil uil-angle-down achievements__arrow"></i>
            </div>
            <ul class="achievements__list grid">
              ${q.items.map(item => `<li class="achievements__name">${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  setupQualificationsDropdown();
}

function setupQualificationsDropdown() {
  const contents = document.querySelectorAll('#qualifications-root .achievements__content');
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

document.addEventListener('DOMContentLoaded', renderQualifications);