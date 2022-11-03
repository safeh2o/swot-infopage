/**
 * Video Block
 * 
 * Using "Plyr.js ( 3.6.9 - 2021-11-19 )" as media controller for cell.
 */

// Helper Functions

const lazyInit = (element, fn) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some(({ isIntersecting }) => isIntersecting)) {
        observer.disconnect();
        fn();
      }
    },
    {
      root: null,
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
  );
  observer.observe(element);
};

const asyncStyle = (url, callback) => {
  // Adding the script tag to the head as suggested before
  var head = document.head;
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = url;

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  style.onreadystatechange = callback;
  style.onload = callback;

  // Fire the loading
  head.appendChild(style);
}

const asyncScript = (url, callback) => {
  // Adding the script tag to the head as suggested before
  var head = document.head;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  script.onreadystatechange = callback;
  script.onload = callback;

  // console.log(script);
  // Fire the loading
  head.appendChild(script);
}

// Logic Functions

const IntersectionTogglePlayback = (element, player) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some(({ isIntersecting }) => isIntersecting)) {
        if (!player.playing) player.play();
      } else {
        if (player.playing) player.pause();
      }
    },
    {
      root: null,
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }
  );
  observer.observe(element);
};

let players = [];

let cellMedia = {
  videoCell: [],
  audioCell: [],
  embedCell: []
};

let defaultConfig = {
  controls: [
    'play-large', 'play', 'pause', 'progress', 'current-time', 'mute', 'fullscreen'
  ],
  captions: { active: false, language: 'auto', update: false },
  iconUrl: '/public/js/plugins/plyr.svg',
  fullscreen: {
    enabled: true,
    fallback: true,
    iosNative: false,
    container: null
  },
  autopause: true,
  storage: {
    enabled: false,
    key: 'plyr'
  },
  hideControls: (!/Android/.test(navigator.userAgent))
}

const initMedia = (selector, objects) => {
  if (objects.length > 0) {
    [...objects].forEach((mediaElement) => lazyInit(
      mediaElement, function () {
        const initClient = () => setTimeout(() => {
          mediaElement.classList.add('loaded')
        }, 1000);

        const iframe = (selector === 'iframe') && true;

        let configAttr = (mediaElement && mediaElement.dataset.config)
          ? JSON.parse(mediaElement.dataset.config.replace(/'/g, "\""))
          : {};

        const srcAttr = (mediaElement && mediaElement.dataset.src)
          ? JSON.parse(mediaElement.dataset.src.replace(/'/g, "\""))
          : null

        const trackAttr = (mediaElement && mediaElement.dataset.track)
          ? JSON.parse(mediaElement.dataset.track.replace(/'/g, "\""))
          : null

        // set up markup for media
        if (srcAttr) {
          [...srcAttr].forEach((source) => {
            let ext = source.substr(source.lastIndexOf('.') + 1);
            let sourceElement = document.createElement("source");
            sourceElement.setAttribute('src', source);
            sourceElement.setAttribute('type', selector + '/' + ext);
            mediaElement.appendChild(sourceElement)
          });
          mediaElement.removeAttribute('data-src');
        }

        // set up markup for media
        if (trackAttr) {
          configAttr.captions = { 'active': true };
          [...trackAttr].forEach((track) => {
            let trackElement = document.createElement("track");
            trackElement.setAttribute('src', track);
            trackElement.setAttribute('kind', 'subtitles');
            mediaElement.appendChild(trackElement)
          });
          mediaElement.removeAttribute('data-track');
        }

        // mutate config:
        // defaultConfig.fullscreen.container = figure;
        if (configAttr.controls) {
          configAttr.controls = [
            'play', 'pause', 'progress', 'current-time', 'mute', 'fullscreen'
          ]
          if (configAttr.captions) configAttr.controls.splice(-1, 0, 'captions');
        }
        mediaElement.removeAttribute('data-config');

        // final config adjustments before init

        if (configAttr.autoplay) {
          configAttr.autoplay = false;
          configAttr.autoplayonscroll = true;
        }

        if (mediaElement) {

          // console.log(mediaElement)

          const newPlayer = new Plyr(
            mediaElement,
            (JSON.stringify(configAttr) !== '{}')
              ? Object.assign(defaultConfig, configAttr)
              : defaultConfig
          );

          players.push(newPlayer);

          // newPlayer.on('play', function () {
          //   const customPlayers = document.querySelectorAll('video.custom, audio.custom');
          //   let cellplayers = Object.assign(players, customPlayers);
          //   cellplayers.forEach(function (other) {
          //     other.pause();
          //   })
          // });

          newPlayer.on('ready', () => {
            // remove placeholders from cell
            initClient();
          });

          // toggle play/pause on enter/leave view
          if (configAttr && configAttr.autoplayonscroll)
            IntersectionTogglePlayback(mediaElement, newPlayer);
        } else {
          // remove placeholders from cell
          initClient();
        }
      }
    ))
  }
}

const initEmbed = (objects) => {
  [...objects].forEach((embed) => lazyInit(
    embed,
    function () {
      const mediaWrapper = embed.querySelector('.media');
      const template = mediaWrapper.querySelector('template');
      if (mediaWrapper && template) {
        const clone = template.content.cloneNode(true);
        mediaWrapper.appendChild(clone);
      }

      // remove placeholders from cell
      setTimeout(() => { embed.classList.add('loaded') }, 1000);
    }
  ))
}

const readyVideos = () => {
  cellMedia.videoCell = document.getElementsByTagName(
    'video'
  );

  cellMedia.audioCell = document.getElementsByTagName(
    'audio'
  );

  cellMedia.embedCell = document.getElementsByClassName(
    'iframe.video'
  );

  if (cellMedia.videoCell.length > 0 || cellMedia.audioCell.length > 0) {
    // console.log(cellMedia.videoCell)
    // load media controller in async way.
    asyncStyle(
      "/public/js/plugins/plyr.css",
      asyncScript("/public/js/plugins/plyr.js", () => {
        if (cellMedia.videoCell.length > 0) initMedia('video', cellMedia.videoCell);
        if (cellMedia.audioCell.length > 0) initMedia('audio', cellMedia.audioCell);
        if (cellMedia.embedCell.length > 0) initMedia('iframe', cellMedia.embedCell);
      })
    );
  }

  if (cellMedia.embedCell.length > 0) initEmbed(cellMedia.embedCell);
}

document.addEventListener('DOMContentLoaded', readyVideos);
