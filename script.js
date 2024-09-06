const videoArray = [
  {
    title: "Video 1",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    title: "Video 2",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    title: "Video 3",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    title: "Video 4",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    title: "Video 5",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    title: "Video 6",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    title: "Video 7",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    title: "Video 8",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    title: "Video 9",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  },
  {
    title: "Video 10",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  {
    title: "Video 11",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  },
  {
    title: "Video 12",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  },
  {
    title: "Video 13",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
];
var userId;

const storyContainer = document.querySelector(".storyContainer");
storyContainer.addEventListener("click", function (e) {
  const viewPage = document.querySelector(".viewPage");
  viewPage.style.display = "flex";
  e.target.parentNode.classList.add("seen");

  userId = e.target.parentNode.parentNode.id;
  showVideo(userId);
});

function showVideo(userId) {
  const video1 = document.querySelector(".view1 video");
  const video2 = document.querySelector(".view2 video");
  const video3 = document.querySelector(".view3 video");
  const video4 = document.querySelector(".view4 video");
  const video5 = document.querySelector(".view5 video");

  const stories = document.querySelectorAll(`.story`);
  stories.forEach((element) => {
    if (element.id == userId) {
      element.children[0].classList.add("seen");
      console.log(element);
    } else {
    }
  });
  if (userId - 3 < 0) {
    video1.style.display = "none";
  } else {
    console.log(videoArray[userId - 3].url);
    video1.src = videoArray[userId - 3].url;
  }

  if (userId - 2 < 0) {
    video2.style.display = "none";
  } else {
    video2.src = videoArray[userId - 2].url;
  }

  if (userId - 1 < 0 || userId > videoArray.length) {
    const viewPage = document.querySelector(".viewPage");
    viewPage.style.display = "none";
    video3.style.display = "none";
    video3.pause();
  } else {
    video3.src = videoArray[userId - 1].url;
    video3.play();
  }

  if (userId > videoArray.length) {
    video4.parentNode.parentNode.style.display = "none";
  } else {
    video4.src = videoArray[userId].url;
  }

  if (userId + 1 > videoArray.length) {
    video5.style.display = "none";
  } else {
    video5.src = videoArray[userId + 1].url;
  }
  setInterval(() => {
    if (video3.ended) {
      userId++;
      if (userId > videoArray.length) {
        const viewPage = document.querySelector(".viewPage");
        viewPage.style.display = "none";
        const video = document.querySelector(".view3 video");
        video.pause();
      } else {
        showVideo(userId);
        video3.play();
      }
    }
  }, 0);
}

// scroll button for viewPage
const previousBtn = document.querySelector(".previousBtn");
const nextBtn = document.querySelector(".nextBtn");
previousBtn.addEventListener("click", function () {
  userId--;
  showVideo(userId);
});
nextBtn.addEventListener("click", function () {
  userId++;
  showVideo(userId);
});

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", function () {
  const viewPage = document.querySelector(".viewPage");
  viewPage.style.display = "none";
  const video = document.querySelector(".view3 video");
  video.pause();
});

// scroll buttons for mainPage
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
leftBtn.addEventListener("click", function () {
  const storyContainer = document.querySelector(".storyContainer");
  storyContainer.scrollBy(-300, 0);
});
rightBtn.addEventListener("click", function () {
  const storyContainer = document.querySelector(".storyContainer");
  storyContainer.scrollBy(300, 0);
});

// control button for story video
const playPauseBtn = document.querySelector(".playPause");
const muteBtn = document.querySelector(".mute");
playPauseBtn.addEventListener("click", function () {
  const video = document.querySelector(".view3 video");
  if (video.paused) {
    video.play();
    playPauseBtn.src =
      "Assets/play_arrow_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    console.log(playPauseBtn.src);
  } else {
    video.pause();
    playPauseBtn.src =
      "Assets/pause_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
    console.log(playPauseBtn.src);
  }
});
muteBtn.addEventListener("click", function () {
  const video = document.querySelector(".view3 video");
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
});

const viewPage = document.querySelector('.viewPage');
viewPage.addEventListener('click', function(){
  viewPage.style.display = "none";
  const video = document.querySelector(".view3 video");
  video.pause();
})