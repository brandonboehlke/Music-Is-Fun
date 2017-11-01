function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList) {
    var template = ``
    var songElement = document.getElementById('songs')
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i]
      template += `
      <div class ="panel panel-default col-xs-12 col-md-6 col-lg-4">
      <div class ="panel-body">    
          <div class ="img-container text-center"> 
              <img src="${song.albumArt}"/> 
                  <span class ="glyphicon glyphicon-music align-left" aria-hidden="true"></span>  
                  <span class ="glyphicon glyphicon-music align-left" aria-hidden="true"></span>
                  <span class ="glyphicon glyphicon-music align-left" aria-hidden="true"></span>
                  <span class ="glyphicon glyphicon-music align-right" aria-hidden="true"></span>
                  <span class ="glyphicon glyphicon-music align-right" aria-hidden="true"></span>
                  <span class ="glyphicon glyphicon-music align-right" aria-hidden="true"></span>
        
                      <h4>${song.title}</h4>
                      <h5>${song.artist}</h5>
                      <h5>${song.collection}</h5> 
                      <h6>${song.price}</h6>
       
                       <audio controls preload="none">  
                          <source src = "${song.preview}" type = "audio/mp4">
                      </audio>
           </div>
      </div>
    </div>
      `
    }

    function playOne(container) {
      container.addEventListener("play", function (e) {
        audio_elements = container.getElementsByTagName("audio")
        for (var i = 0; i < audio_elements.length; i++) {
          var audio_element = audio_elements[i]
          if (audio_element !== event.target) {
            audio_element.pause()
          }
        }
      }, true)
    }

    document.addEventListener("DOMContentLoaded", function () {
      playOne(document.body);
    });

    songElement.innerHTML = template
  }
}
