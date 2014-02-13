define(["eventemiter","log"],function(g,h){return AudioManager=g.extend({init:function(){function a(){b.log.info("Loading music files...");var a=e.length;_.each(e,function(c){b.loadMusic(c,function(){a--;b.trigger("music:ready",[c]);a||(b.trigger("ready"),b.log.info("Music loading complete"))})})}var b=this,c=["combo_hit","big_bomb","achievement"],e=["Lee_Rosevere_-_03_-_Plateau"];this._super();this.log=new h;this.sounds=[];this.music=[];this.basePath="res/";this.soundsDir="sounds/";this.musicDir=
"music/";this.extension=this.canPlayMP3()?"mp3":"ogg";this.enabled=!0;(function(){b.log.info("Loading sound files...");var d=c.length;_.each(c,function(c){b.loadSound(c,function(){d--;b.trigger("sound:ready",[c]);d||(a(),b.log.info("Sound loading complete"))})})})()},canPlayMP3:function(){return!!document.createElement("audio").canPlayType("audio/mpeg;")},toggle:function(){this.enabled=!this.enabled;this.log.debug("Toogle audio: ",this.enabled);this.enabled&&this.currentMusic?this.playMusic(this.currentMusic.name):
this.resetMusic(this.currentMusic)},isEnabled:function(){return this.enabled},load:function(a,b,c,e){var a=a+b+"."+this.extension,d=document.createElement("audio"),f=this;d.addEventListener("canplaythrough",function(){f.log.info(b,"is ready to play.");this.removeEventListener("canplaythrough",arguments.callee,!1);_((e||0)-1).times(function(){f.sounds[b].push(d.cloneNode(!0))});c&&c(b)},!1);d.addEventListener("error",function(){f.log.error("Error: "+b+" could not be loaded.");f.sounds[b]=null},!1);
d.preload="auto";d.autobuffer=!0;d.src=a;d.load();this.sounds[b]=[d]},loadSound:function(a,b){a instanceof Array||(a=[a,4]);this.load(this.basePath+this.soundsDir,a[0],b,a[1])},loadMusic:function(a,b){this.load(this.basePath+this.musicDir,a,b,1);var c=this.sounds[a][0];c.loop=!0;c.addEventListener("ended",function(){c.play()},!1)},getSound:function(a){if(!this.sounds[a])return null;var b=_.find(this.sounds[a],function(a){return a.ended||a.paused});b&&b.ended?b.currentTime=0:b||(b=this.sounds[a][0]);
return b},playSound:function(a){a=this.getSound(a);this.enabled&&a&&a.play()},playMusic:function(a){var b=this.getSound(a);if(this.enabled&&b)b.play(),this.currentMusic={sound:b,name:a}},resetMusic:function(a){if(a&&a.sound)a.sound.pause(),a.sound.currentTime=0},isMusicPlay:function(){return this.currentMusic&&this.currentMusic.sound&&!this.currentMusic.sound.paused?!0:!1}})});