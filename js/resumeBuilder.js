// Bio object definition.
var bio = {
  'name': 'Leah Hovig',
  'role': 'Front End Web Developer',
  'contacts': {
    'mobile': '<a href="tel:949-491-5888">949-491-5888</a>',
    'email': '<a href=mailto:leah@leahhovig.com>leah@leahhovig.com</a>',
    'github': '<a href=http://bit.ly/github-lhovig target="_blank">shinyotaku</a>',
     'twitter': '<a href=http:twitter.com/shinyotaku target="_blank">@shinyotaku</a>',
    'location': '<a href=http://bit.ly/irvine-california target="_blank">Irvine, CA</a>'
  },
  'welcomeMessage': 'Highly-motivated and passionate Front End Web Developer Ninja. Passion for Japanese Otaku culture, enjoy going to Black Hat, DEFCON, Comic-Con, review new tech products & interview über-geeks.',
  'skills': [
    'HTML5, CSS3, Problem Solving, Python, JavaScript, JQuery, JSON, SQL',
    'Adobe Creative Cloud, Photoshop, Illustrator, Premier Pro, Adobe Social  ',
    'Google Analytics, WordPress, SEO/SEM, Geofencing, Triton Digital',
  ],
  'bioPic': 'images/lhovig.png'
};

// Bio object methods.
bio.display = function() {
  this.displayNameAndRole();
  this.displayContacts();
  this.displayPicAndWelcomeMessage();
  this.displaySkills();
  };
bio.displayNameAndRole = function() {
  var formattedName = HTMLheaderName.replace('%data%', this.name);
  var formattedRole = HTMLheaderRole.replace('%data%', this.role);
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
};

bio.displayContacts = function() {
  for (var contact in this.contacts) {
    var formattedContact = HTMLcontactGeneric.replace('%contact%', contact);
    formattedContact = formattedContact.replace('%data%', this.contacts[contact]);
    $('#topContacts, #footerContacts').append(formattedContact);
  }
};

bio.displayPicAndWelcomeMessage = function() {
  // Bio pic.
  var formattedPic = HTMLbioPic.replace('%data%', this.bioPic);
  $('#header').append(formattedPic);

  // Welcome message.
  var formattedWelcome = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
  $('#header').append(formattedWelcome);
};

bio.displaySkills = function() {
  var len = this.skills.length;
  if (len) {
    $('#header').append(HTMLskillsStart);
    for (var i = 0; i < len; i++) {
      var formattedSkill = HTMLskills.replace('%data%', this.skills[i]);
      $('#skills').append(formattedSkill);
      
    }
  }
};


// Work object definition.
var work = {
  'jobs': [
    {
      'employer': 'CBS Radio',
      'title': 'Manager of Digital Content & Operations',
      'location': 'Las Vegas, NV',
      'dates': 'June 2007 - May 2015',
      'description': 'Managed content creation and digital marketing for over 5 radio stations. ' +
                      'Specialized in leading projects across Programming, Engineering, Promotions, Video Operations, Digital Sales and Business Development. ' +
                      'Lead a team that designed, developed and incorporated blogs, photo sharing, event calendars, news posts, newsletters, social media and live events ' +
                      'Increased digital video views by 31% (2014 vs. 2013) on owned and operated digital properties through A/B tests, iterative and data-based programming strategies, cross-functional leadership, and evangelizing best practices to senior leadership at CBS Radio ' +
                      'Defined projects, drove collaboration across internal engineering teams for live streaming, managed partnerships (Google, AOL, Radio.com, Facebook & Twitter), sponsored campaigns and directed 25 internal staff members to grow social media views by 26% (2015 vs. 2014 ' +
                      'Built Digital Operations team by recruiting nine full-time employees; fostered a data-based culture focused on driving digital growth, and utilized CBS’s management training program to advocate cross-functional collaboration and mentor professional development ' +
                      'Responsible for design of communication plan, construction of data pipeline, coding of HTML/CSS email templates, and execution of marketing campaigns. Resulted in improved open rates by 15% and Click-thru Rate (CTR) by 2% ' +
                      'Developed Digital Sales Tool Kit – an internal WordPress site to enable the sales team to access all company material designed to assist in the sales process ' +
                      'Awarded certificate of commendation from Senator Harry Reid and the Green Award from the Las Vegas Business Press for best green marketing campaign, “Viva Green Vegas',
    },
    {
      'employer': 'Ventura Web Design',
      'title': 'Store Developer & Designer',
      'location': 'Las Vegas, NV',
      'dates': 'June 2007 - August 2007',
      'description': 'Designed, developed and implemented client websites for ecommerce stores on Yahoo Merchant Solutions ® platform. ' +
                      'Managed online store platform, included feature functionality, user experience, landing page optimization, promotions and site refreshes ' +
                      'sAssisted the Ecommerce Content & Production Manager in the set up of product records and online promotions on the Yahoo Merchant Solutions ® platform',
    },
    {
      'employer': 'Securitas Security Services',
      'title': 'Branch Manager',
      'location': 'Las Vegas, NV',
      'dates': 'June 2006 - June 2007',
      'description': 'Reported directly to Vice President and managed day-to-day operations of Las Vegas branch office to achieve service and profitability objectives. Initiated and directed new client contracts. Recruited, trained and retained high-performing field managers and supervisors. Ensured scheduling was handled effectively to meet client requirements, while balancing labor and operational overhead' +
                      'Responsible for development and management of $7.6 million budget that encompassed all business activities for southern Nevada; Directly supervised 12 account managers and over 100 security officers ' +
                      'Grew and managed diverse portfolio of corporate, retail, luxury residential and master planned communities, such as Cartier, NV Energy, Turnberry Towers and Red Rock Country Club',
    },
    {
      'employer': 'Securitas Security Services at Cisco Systems ',
      'title': 'Client Service Specialist',
      'location': 'San Jose, CA',
      'dates': 'May 2004 - June 20076',
      'description': 'Responsible for monitoring campus-wide safety in cooperation with security operation center staff: managed security inquiries and badging requests submitted via Internet applications and e-mail; administered the associated databases and websites' +
                      'Collaborated with White House and Secret Service to provide internal, web-based information platform and electronic security infrastructure for the week of President Bush’s Panel on the American Competitiveness Initiative ' +
                      'Organized security requests at the executive level for Global Security Department, including CEO, John Chambers; managed corporate conferences for high profile events such as Annual Shareholders Meeting, Cisco Live and the Data and Analytics Conference'
    }
  ]
};

// Work object methods.
work.display = function() {
  var len = this.jobs.length;
  for (var i = 0; i < len; i++) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer =
      HTMLworkEmployer.replace('%data%', this.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', this.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace('%data%', this.jobs[i].dates);
    $('.work-entry:last').append(formattedDates);

    var formattedDescription =
      HTMLworkDescription.replace('%data%', this.jobs[i].description);
    $('.work-entry:last').append(formattedDescription);
  }
};

// Projects object definition.
var projects = {
  'projects': [
    
    {
      'title': 'Portfolio Site',
      'dates': '2015',
      'description': 'Project to build a responsive portfolio website. I developed a responsive website that displays images, descriptions and links. Feel free to look around and connect with me. This project was built using HTML and CSS. You will see I have demonstrated my ability to properly implement the above tools in order to create a responsive website. Making a responsive website you can easily view on a mobile devices or desktop. Click the link below to be redirected to my Portfolio site. <a href="http://shinyotaku.github.io/Portfolio/" target="_blank">CLICK HERE</a> ',
      'images': [
        'images/portfolio.png',
      ]

    }
  ]
};

// Projects object methods.
projects.display = function() {
  var len = this.projects.length;
  for (var i = 0; i < len; i++) {
    $('#projects').append(HTMLprojectStart);

    var formattedTitle =
      HTMLprojectTitle.replace('%data%', this.projects[i].title);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates =
      HTMLprojectDates.replace('%data%', this.projects[i].dates);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription =
      HTMLprojectDescription.replace('%data%', this.projects[i].description);
    $('.project-entry:last').append(formattedDescription);

    for (var image in projects.projects[i].images) {
      var formattedImage =
        HTMLprojectImage.replace('%data%', this.projects[i].images[image]);
      $('.project-entry:last').append(formattedImage);
    }
  }
};

// Education object definition.
var education = {
  'schools': [
    
    {
      'name': 'San Jose State University',
      'location': 'San Jose, CA',
      'degree': 'B.S.',
      'majors': ['Biological Science'],
      'date': 2004,
      'url': 'http://www.sjsu.edu/'
    },
    {
      'name': 'Art Institute of California',
      'location': 'San Francisco, CA',
      'degree': 'A.S.',
      'majors': ['Web Design and Interactive Media'],
      'date': 2001,
      'url': 'https://www.artinstitutes.edu/san-francisco'
    },
  ],
  'onlineCourses': [
    {
      'title': 'Intro to HTML and CSS',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud304'
    },
    {
      'title': 'Responsive Web Design Fundamentals',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud893'
    },
    {
      'title': 'Responsive Images',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud882'
    },
    {
      'title': 'JavaScript Basics',
      'school': 'Udacity',
      'date': 2015,
      'url': 'http://www.udacity.com/course/ud804'
    },
  ]
};

// Education object methods.
education.display = function() {
  this.displaySchools();
  this.displayOnlineCourses();
};
education.displaySchools = function() {
  var len = this.schools.length;
  for (var i = 0; i < len; i++) {
    $('#education').append(HTMLschoolStart);

    var formattedNameAndDegree =
      HTMLschoolName.replace('%data%', this.schools[i].name);
    formattedNameAndDegree = formattedNameAndDegree +
      HTMLschoolDegree.replace('%data%', this.schools[i].degree);
    $('.education-entry:last').append(formattedNameAndDegree);

    var formattedDates =
      HTMLschoolDates.replace('%data%', this.schools[i].date);
    $('.education-entry:last').append(formattedDates);

    var mLen = this.schools[i].majors.length;
    for (var j = 0; j < mLen; j++) {
      var formattedMajor =
        HTMLschoolMajor.replace('%data%', this.schools[i].majors[j]);
      $('.education-entry:last').append(formattedMajor);
    }

    var formattedLocation =
      HTMLschoolLocation.replace('%data%', this.schools[i].location);
    $('.education-entry:last').append(formattedLocation);
  }
};

education.displayOnlineCourses = function() {
  var len = this.onlineCourses.length;
  if (len > 0) {
    $('#education').append(HTMLonlineClasses);
    for (var i = 0; i < len; i++) {
      $('#education').append(HTMLschoolStart);

      var formattedTitleAndSchool =
        HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title);
      formattedTitleAndSchool = formattedTitleAndSchool +
        HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
      $('.education-entry:last').append(formattedTitleAndSchool);

      var formattedDates =
        HTMLonlineDates.replace('%data%', this.onlineCourses[i].date);
      $('.education-entry:last').append(formattedDates);

      var formattedUrl =
        HTMLonlineURL.replace('%data%', this.onlineCourses[i].url);
      $('.education-entry:last').append(formattedUrl);
    }
  }
};

// Display info from all objects.
bio.display();
work.display();
projects.display();
education.display();

// Load the Google map.
$('#mapDiv').append(googleMap);
