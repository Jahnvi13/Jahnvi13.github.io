const devProjects = [
  {
    title: "Avaas",
    image: "assets/img/avaas-bg.jpg",
    period: "Feb. 2021 - Apr. 2021",
    description: "Built a database management software which provides an end-to-end solution for housing from bidding to allocation.",
    tech: "MySql, Flask, HTML-CSS, Python",
    link: "https://github.com/ayush19030/AVAAS",
    linkText: "See code",
    team: "Team Size: 5"
  },
  {
    title: "Colour Switch",
    image: "assets/img/color-switch.jpeg",
    period: "Nov. 2020 - Dec. 2020",
    description: "A JavaFX replica of the popular game Color Switch made using principles of Object Oriented Programming and Design Patterns",
    tech: "Java, JavaFX, Scene-Builder",
    link: "https://github.com/ManviGoel26/ColorSwitch",
    linkText: "See code",
    team: "Team Size: 2"
  },
  {
    title: "FitLight Forearm Band",
    image: "assets/img/fitlight-forearm.jpg",
    period: "Sep. 2019 - Oct. 2019",
    description: "A health band for elderly which monitors the heart-rate and temperature. It messaged to a safe number if readings were abnormal or if the person fell.",
    tech: "Arduino Nano, Sensors, ThingSpeak(IoT), MITAppInventor",
    link: "https://sites.google.com/view/fitlight--forearmband/home",
    linkText: "See demo",
    team: "Team Size: 3"
  },
  {
    title: "Crazy Bee",
    image: "assets/img/crazy-bee.png",
    period: "Aug. 2019 - Sep. 2019",
    description: "An interactive multiplayer game in which players dodged obstacles using gestures.",
    tech: "Arduino, Processing",
    link: "https://github.com/Jahnvi13/PIS-Crazy-Bee",
    linkText: "See code",
    team: "Team Size: 3"
  },
  {
    title: "Portfolio Website",
    image: "assets/img/portfolio.png",
    period: "Aug. 2019 - May. 2021",
    description: "I made this website long ago and kept refining it as and when I learnt something new.",
    tech: "HTML-CSS, Javascript",
    link: "https://github.com/Jahnvi13/Jahnvi13.github.io",
    linkText: "See code",
    team: "Team Size: 1"
  },
  {
    title: "Poppy - Video Chat Application",
    image: "assets/img/poppy-image.png",
    period: "Jun 2021",
    description: "Built a full stack video chat application using Object Oriented Programming and Design Patterns",
    tech: "WebRTC, Peer-to-PeerJS, NodeJS, Express servers and React hooks",
    link: "https://github.com/Jahnvi13/Poppy-j/tree/main",
    linkText: "See code",
    team: "Team Size: 1"
  },
];

const mlProjects = [
  {
    title: "Image to Latex Conversion",
    image: "assets/img/maths-equation.png",
    period: "May 2021 - Jul 2021",
    description: "Built a Deep learning model to convert images of mathematical equations to Latex using Visual Attention. Improved the Word Error Rate (WER) from 24% to 14% using transformers, visual attention and beam search.",
    tech: "Python, Google Colab., Tensorflow, Keras etc.",
    link: "https://github.com/Jahnvi13/Image-to-Latex",
    linkText: "See project",
    team: "Team Size: 1"
  },
  {
    title: "DisenCDR",
    image: "assets/img/recommender-img.png",
    period: "Feb 2023 - Apr 2023",
    description: "Built a k-domain representation model of user-item interaction for cross-domain recommendation. Incorporated sentiments as edge weights using Amazon review dataset and developed a sentiment based loss function to compare with existing models.",
    tech: "DL, Tensorflow, Python",
    link: "https://github.com/Jahnvi13/Image-to-Latex",
    linkText: "See project",
    team: "Team Size: 5"
  },
  {
    title: "EmojiPred",
    image: "assets/img/emoji-pred.png",
    period: "May 2021 - Jul 2021",
    description: "Built a Deep learning model to convert images of mathematical equations to Latex using Visual Attention. Improved the Word Error Rate (WER) from 24% to 14% using transformers, visual attention and beam search.",
    tech: "Python, Google Colab., Tensorflow, Keras etc.",
    link: "https://github.com/Jahnvi13/Image-to-Latex",
    linkText: "See project",
    team: null
  },
  {
    title: "fAIrConnect",
    image: "assets/img/fairconnect.png",
    period: "May 2021 - Jul 2021",
    description: "Built a Deep learning model to convert images of mathematical equations to Latex using Visual Attention. Improved the Word Error Rate (WER) from 24% to 14% using transformers, visual attention and beam search.",
    tech: "Python, Google Colab., Tensorflow, Keras etc.",
    link: "https://github.com/Jahnvi13/Image-to-Latex",
    linkText: "See project",
    team: null
  },
  {
    title: "GAN",
    image: "assets/img/gan.png",
    period: "May 2021 - Jul 2021",
    description: "Built a Deep learning model to convert images of mathematical equations to Latex using Visual Attention. Improved the Word Error Rate (WER) from 24% to 14% using transformers, visual attention and beam search.",
    tech: "Python, Google Colab., Tensorflow, Keras etc.",
    link: "https://github.com/Jahnvi13/Image-to-Latex",
    linkText: "See project",
    team: null
  },
  {
    title: "IPL Match Analysis",
    image: "assets/img/Batting.webp",
    period: "May 2021 - Jul 2021",
    description: "Built a Machine Learning pipeline to predict the winner of an IPL cricket match obtaining an accuracy of 92%. Experimented with multiple models like SVMs and Decision Trees and leveraged player’s historic performance.",
    tech: "ML, Tensorflow, Python ",
    link: "https://github.com/Jahnvi13/Image-to-Latex",
    linkText: "See project",
    team: null
  },
  
];

function renderProjects(projects, rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.innerHTML = projects.map((p, i) => `
    <div class="projects__content" style="background-image: url('${p.image}');">
      <div>
        <i class="uil uil-arrow projects__icon"></i>
        <h3 class="projects__title">${p.title}</h3>
      </div>
      <span class="button button--flex button--small button--link projects__button" onclick="document.getElementById('${rootId}-modal-${i}').classList.add('active-modal')">
        View More 
        <i class="uil uil-arrow-right button__icon"></i>
      </span>
      <div class="projects__modal" id="${rootId}-modal-${i}">
        <div class="projects__modal-content">
          <h4 class="projects__modal-title">${p.title}</h4>
          <i class="uil uil-times projects__modal-close" onclick="document.getElementById('${rootId}-modal-${i}').classList.remove('active-modal')"></i>
          <ul class="projects__modal-projects grid">
            <li class="projects__modal-project">
              <i class="uil uil-calendar-alt projects__modal-icon"></i>
              <p>${p.period}</p>
            </li>
            <li class="projects__modal-project">
              <i class="uil uil-file-question projects__modal-icon"></i>
              <p>${p.description}</p>
            </li>
            <li class="projects__modal-project">
              <i class="uil uil-atom projects__modal-icon"></i>
              <p>Technologies used: ${p.tech}</p>
            </li>
            ${p.team ? `<li class="projects__modal-project">
              <i class="uil uil-users-alt projects__modal-icon"></i>
              <p>${p.team}</p>
            </li>` : ""}
            <li class="projects__modal-project">
              <i class="uil uil-github-alt projects__modal-icon"></i>
              <a href="${p.link}" target="_blank">${p.linkText}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
  renderProjects(devProjects, 'dev-projects-root');
  renderProjects(mlProjects, 'ml-projects-root');
});