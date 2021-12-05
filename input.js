   var tag = document.createElement('script');
   tag.src = "https://www.youtube.com/player_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   var player, player1, player2, player3, player4;
   function onYouTubePlayerAPIReady() {
     player = new YT.Player('cdrg', {
      height: '360',
      width: '640',
      videoId: 'SrnvvWDm73k'
	  });
	  player1 = new YT.Player('wbst', {
      height: '315',
      width: '560',
      videoId: 'h6lT_5CTTSc'
	  });
  }
  