  function hamburgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav topnav-fixed-top") {
      x.className += " responsive";
    } else {
      x.className = "topnav topnav-fixed-top";
    }
  }

  $(function () {
    if($(window).width() > 600){
      $(document).scroll(function () {
        var $nav = $(".topnav-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()/2);
      })
    }
  });

  function showStartView(){
		document.getElementById('mainView').style.display = "block";
    document.getElementById('mainView2').style.display = "block";
    document.getElementById('contactView').style.display = "none";
    document.getElementById('filmsView').style.display = "none";
    document.getElementById('scheduleView').style.display = "none";
    document.getElementById('aboutView').style.display = "none";

    document.getElementById('topHome').setAttribute('class', 'active');
    document.getElementById('topContact').setAttribute('class', '');
    document.getElementById('topFilms').setAttribute('class', '');
    document.getElementById('topSchedule').setAttribute('class', '');
    document.getElementById('topAbout').setAttribute('class', '');
	}

  function showContactView(){
		document.getElementById('mainView').style.display = "none";
    document.getElementById('mainView2').style.display = "none";
    document.getElementById('contactView').style.display = "block";
    document.getElementById('filmsView').style.display = "none";
    document.getElementById('scheduleView').style.display = "none";
    document.getElementById('aboutView').style.display = "none";

    document.getElementById('topHome').setAttribute('class', '');
    document.getElementById('topContact').setAttribute('class', 'active');
    document.getElementById('topFilms').setAttribute('class', '');
    document.getElementById('topSchedule').setAttribute('class', '');
    document.getElementById('topAbout').setAttribute('class', '');
	}

  function showFilmsView(){
		document.getElementById('mainView').style.display = "none";
    document.getElementById('mainView2').style.display = "none";
    document.getElementById('contactView').style.display = "none";
    document.getElementById('filmsView').style.display = "block";
    document.getElementById('scheduleView').style.display = "none";
    document.getElementById('aboutView').style.display = "none";

    document.getElementById('topHome').setAttribute('class', '');
    document.getElementById('topContact').setAttribute('class', '');
    document.getElementById('topFilms').setAttribute('class', 'active');
    document.getElementById('topSchedule').setAttribute('class', '');
    document.getElementById('topAbout').setAttribute('class', '');
	}

  function showScheduleView(){
		document.getElementById('mainView').style.display = "none";
    document.getElementById('mainView2').style.display = "none";
    document.getElementById('contactView').style.display = "none";
    document.getElementById('filmsView').style.display = "none";
    document.getElementById('scheduleView').style.display = "block";
    document.getElementById('aboutView').style.display = "none";

    document.getElementById('topHome').setAttribute('class', '');
    document.getElementById('topContact').setAttribute('class', '');
    document.getElementById('topFilms').setAttribute('class', '');
    document.getElementById('topSchedule').setAttribute('class', 'active');
    document.getElementById('topAbout').setAttribute('class', '');
	}

  function showAboutView(){
		document.getElementById('mainView').style.display = "none";
    document.getElementById('mainView2').style.display = "none";
    document.getElementById('contactView').style.display = "none";
    document.getElementById('filmsView').style.display = "none";
    document.getElementById('scheduleView').style.display = "none";
    document.getElementById('aboutView').style.display = "block";

    document.getElementById('topHome').setAttribute('class', '');
    document.getElementById('topContact').setAttribute('class', '');
    document.getElementById('topFilms').setAttribute('class', '');
    document.getElementById('topSchedule').setAttribute('class', '');
    document.getElementById('topAbout').setAttribute('class', 'active');
	}

  function displayFilms(){   
    const filmContainer = document.getElementById("filmContainer");
    fetch('./filmData.json')
      .then(response => response.json())
      .then(data => {
        const markup = data.map(film => 
          "<div class='filmObject' onClick='togglePopUp("+film.id+")'>"+
            "<img src='./Films/"+film.image+"' class='filmImage' style='width:100%' alt='Film Picture of " + film.title + "'/>"+
            "<div class='filmCenter'>"+
              "<div class='filmText filmTitle'>"+film.title+"</div>"+
              "<div class='filmText filmName'>"+film.name+"</div>"+
            "</div>"+
          "</div>"
          )
        for(i in markup){
          filmContainer.innerHTML += markup[i]
        }
     })
  }

  function togglePopUp(id){
    document.body.style.overflow = "hidden";
    fetch('./filmData.json')
      .then(response => response.json())
      .then(data => {
        const films = data
        document.getElementById('popUpImage').src = "./Films/"+films[id].image;
        document.getElementById('popUpTitle').innerHTML = "Title: "+films[id].title;
        document.getElementById('popUpArtist').innerHTML = "Artist: "+films[id].name;
        document.getElementById('popUpNation').innerHTML = "Nation: "+films[id].nation;
        document.getElementById('popUpLength').innerHTML = "Length: "+films[id].length;
        document.getElementById('popUpDescription').innerHTML = "Description: "+films[id].description;
        document.getElementById('filmPopUp').style.display = "block";
      })
  }

  function hidePopUp(){
    document.body.style.overflow = "scroll";
    document.getElementById('filmPopUp').style.display = "none";
  }

  displayFilms();

  showStartView();