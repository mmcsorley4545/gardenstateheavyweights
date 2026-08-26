/* ==========================================================================
   Garden State Heavyweights - main.js
   Handles: mobile nav, home slideshow, photo album filters, roster filters
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initNav();
  initSlideshow();
  initPhotoAlbum();
  initRoster();
  initPosters();
  initTrainers();
  initLightbox();
});

/* ---------------- Mobile Nav ---------------- */
function initNav() {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  // Highlight active page link
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current) {
      a.classList.add('active');
    }
  });
}

/* ---------------- Home Slideshow ---------------- */
function initSlideshow() {
  var track = document.querySelector('.slides-track');
  if (!track) return;


// slide show pictures 
  var slides = [
    { img: 'assets/images/pic2.jpg' },
    { img: 'assets/images/team-photo.jpg' },
    { img: 'assets/images/team-huddle.jpg' }, 
    { img: 'assets/images/HighSchoolDef.jpg'}, 
    { img: 'assets/images/4thGradeDripple.jpg'}, 
    { img: 'assets/images/8thGradeTripleThreat.jpg'}
  ];

  slides.forEach(function (s, i) {
    var div = document.createElement('div');
    div.className = 'slide slide-photo' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = "url('" + s.img + "')";
    track.appendChild(div);
  });

  var dotsWrap = document.querySelector('.slide-dots');
  slides.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', function () { goToSlide(i); });
    dotsWrap.appendChild(dot);
  });

  var current = 0;
  var slideEls = track.querySelectorAll('.slide');
  var dotEls = dotsWrap.querySelectorAll('.dot');
  var timer;

  function goToSlide(idx) {
    slideEls[current].classList.remove('active');
    dotEls[current].classList.remove('active');
    current = (idx + slideEls.length) % slideEls.length;
    slideEls[current].classList.add('active');
    dotEls[current].classList.add('active');
  }

  function next() { goToSlide(current + 1); }
  function prev() { goToSlide(current - 1); }

  document.querySelector('.slide-next').addEventListener('click', function () {
    next();
    restart();
  });
  document.querySelector('.slide-prev').addEventListener('click', function () {
    prev();
    restart();
  });

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }
  restart();
}

/* ---------------- Photo Album ---------------- */
function initPhotoAlbum() {
  var grid = document.getElementById('gallery-grid');
  if (!grid) return;

  var seasonSelect = document.getElementById('season-select');
  var yearSelect = document.getElementById('year-select');
  var allPhotos = (typeof GALLERY_PHOTOS !== 'undefined') ? GALLERY_PHOTOS : [];

  function render() {
    var season = seasonSelect.value;
    var year = yearSelect.value;
    grid.innerHTML = '';

    var matches = allPhotos.filter(function (p) {
      return p.season === season && String(p.year) === String(year);
    });

    if (matches.length === 0) {
      var empty = document.createElement('div');
      empty.className = 'gallery-empty';
      empty.textContent = 'No photos posted yet for ' + season + ' ' + year + '. Check back soon!';
      grid.appendChild(empty);
      return;
    }

    matches.forEach(function (p) {
      var tile = document.createElement('div');
      tile.className = 'gallery-tile gallery-tile-photo';
      tile.innerHTML =
        '<img class="lightbox-img" src="' + p.src + '" alt="' + (p.caption || (season + ' ' + year + ' photo')) + '">';
      grid.appendChild(tile);
    });
  }

  seasonSelect.addEventListener('change', render);
  yearSelect.addEventListener('change', render);
  render();
}

/* ---------------- Roster ---------------- */
function initRoster() {
  var coachPanel = document.getElementById('coach-panel');
  var tableBody = document.getElementById('roster-body');
  if (!coachPanel || !tableBody) return;

  var gradeSelect = document.getElementById('grade-select');
  var genderSelect = document.getElementById('gender-select');
  var levelSelect = document.getElementById('level-select');

  function getTeamData(grade, gender, level) {
    var key = grade + '-' + gender + '-' + level;
    var data = (typeof ROSTER_DATA !== 'undefined') ? ROSTER_DATA[key] : null;
    if (data) return data;

    // Fallback in case a combination is missing from roster-data.js
    return {
      label: 'Gr. ' + grade + ' ' + gender + ' ' + level,
      headCoach: { name: 'To Be Announced', phone: '(555) 010-0100' },
      assistantCoaches: [{ name: 'To Be Announced', phone: '(555) 010-0101' }],
      players: []
    };
  }

  function render() {
    var grade = gradeSelect.value;
    var gender = genderSelect.value;
    var level = levelSelect.value;
    var data = getTeamData(grade, gender, level);

    var assistantsHtml = data.assistantCoaches.map(function (c) {
      return '<div class="coach-card">' +
        '<h4>Assistant Coach</h4>' +
        '<div class="name">' + c.name + '</div>' +
        '<div class="phone">' + c.phone + '</div>' +
        '</div>';
    }).join('');

    coachPanel.innerHTML =
      '<div class="coach-card head">' +
      '<h4>Head Coach &mdash; ' + data.label + '</h4>' +
      '<div class="name">' + data.headCoach.name + '</div>' +
      '<div class="phone">' + data.headCoach.phone + '</div>' +
      '</div>' + assistantsHtml;

    tableBody.innerHTML = data.players.map(function (p) {
      return '<tr>' +
        '<td>#' + p.number + '</td>' +
        '<td>' + p.name + '</td>' +
        '</tr>';
    }).join('');
  }

  gradeSelect.addEventListener('change', render);
  genderSelect.addEventListener('change', render);
  levelSelect.addEventListener('change', render);
  render();
}

/* ---------------- Posters / Announcements ---------------- */
function initPosters() {
  var grid = document.getElementById('posters-grid');
  if (!grid) return;

  var posters = (typeof POSTERS !== 'undefined') ? POSTERS : [];

  grid.innerHTML = posters.map(function (p) {
    var thumb = p.image
      ? '<img class="lightbox-img" src="' + p.image + '" alt="' + p.title + '">'
      : (p.icon || '📌');
    return '<div class="poster-card">' +
      '<div class="poster-thumb">' + thumb + '</div>' +
      '<div class="poster-body">' +
      '<h3>' + p.title + '</h3>' +
      '<p>' + p.text + '</p>' +
      '</div>' +
      '</div>';
  }).join('');
}

/* ---------------- Trainers ---------------- */
function initTrainers() {
  var grid = document.getElementById('trainers-grid');
  if (!grid) return;

  var trainers = (typeof TRAINERS !== 'undefined') ? TRAINERS : [];

  grid.innerHTML = trainers.map(function (t) {
    var tagsHtml = (t.specialties || []).map(function (s) {
      return '<span class="specialty-tag">' + s + '</span>';
    }).join('');

    return '<div class="trainer-card">' +
      '<div class="trainer-photo"><img src="' + t.photo + '" alt="' + t.name + '"></div>' +
      '<div class="trainer-body">' +
      '<h3>' + t.name + '</h3>' +
      '<div class="trainer-experience">' + t.experience + '</div>' +
      '<p class="trainer-blurb">' + t.blurb + '</p>' +
      '<div class="trainer-specialties">' + tagsHtml + '</div>' +
      '<div class="trainer-contact">' + t.phone + '</div>' +
      '</div>' +
      '</div>';
  }).join('');
}

/* ---------------- Lightbox (click a photo to enlarge) ---------------- */
function initLightbox() {
  // Only set up the lightbox if this page actually has clickable photos
  if (!document.querySelector('.lightbox-img')) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<div class="lightbox-content"><img src="" alt=""></div>';
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector('img');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function open(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('open');
  }

  function close() {
    overlay.classList.remove('open');
    overlayImg.src = '';
  }

  // Event delegation so this works for photos added dynamically (gallery tiles)
  document.addEventListener('click', function (e) {
    var target = e.target;
    if (target.classList && target.classList.contains('lightbox-img')) {
      open(target.src, target.alt);
    }
  });

  closeBtn.addEventListener('click', close);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
}
