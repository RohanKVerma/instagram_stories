const videoArray = [
     {
            "title": "Video 1",
            "url": "Assets/fiverrcom-video-editing-gig-sample-2022.mp4"
      },
      {
            "title": "Video 2",
            "url": "Assets/3997798-uhd_2160_4096_25fps.mp4"
      },
      {
            "title": "Video 3",
            "url": "Assets/fiverrcom-video-editing-gig-sample-2022.mp4"
      },
      {
            "title": "Video 4",
            "url": "Assets/3997798-uhd_2160_4096_25fps.mp4"
      },
      {
            "title": "Video 5",
            "url": "Assets/fiverrcom-video-editing-gig-sample-2022.mp4"
      },
      {
            "title": "Video 6",
            "url": "Assets/3997798-uhd_2160_4096_25fps.mp4"
      },
      {
            "title": "Video 7",
            "url": "Assets/fiverrcom-video-editing-gig-sample-2022.mp4"
      },
      {
            "title": "Video 8",
            "url": "Assets/3997798-uhd_2160_4096_25fps.mp4"
      },
      {
            "title": "Video 9",
            "url": "Assets/fiverrcom-video-editing-gig-sample-2022.mp4"
      },
      {
            "title": "Video 10",
            "url": "Assets/3997798-uhd_2160_4096_25fps.mp4"
      },
      {
            "title": "Video 11",
            "url": "Assets/fiverrcom-video-editing-gig-sample-2022.mp4"
      },
      {
            "title": "Video 12",
            "url": "Assets/3997798-uhd_2160_4096_25fps.mp4"
      },
      {
            "title": "Video 13",
            "url": "Assets/fiverrcom-video-editing-gig-sample-2022.mp4"
      }
]

var userId;

const storyContainer = document.querySelector('.storyContainer');
storyContainer.addEventListener('click', function(e){
      const viewPage = document.querySelector('.viewPage');
      viewPage.style.display = 'flex';
      e.target.parentNode.classList.add('seen');
      
      // console.log(e.target.parentNode.parentNode.id);
      userId = e.target.parentNode.parentNode.id;
      showVideo(userId);

})

function showVideo(userId){      
      const video1 = document.querySelector('.view1 video')
      const video2 = document.querySelector('.view2 video')
      const video3 = document.querySelector('.view3 video')
      const video4 = document.querySelector('.view4 video')
      const video5 = document.querySelector('.view5 video')
      
      if(userId-3<0){
            video1.src = '';
      }else{
            video1.src = videoArray[userId-3].url;
      }

      if(userId-2<0){
            video2.src = '';
      }else{
            video2.src = videoArray[userId-2].url;
      }

      video3.src = videoArray[userId-1].url;

      if(userId>videoArray.length){
            video4.src = '';
      }else{
            video4.src = videoArray[userId].url;
      }

      if(userId+1>videoArray.length){
            video5.src = '';
      }else{
            video5.src = videoArray[userId+1].url;
      }
      console.log(video1)
      console.log(video2)
      console.log(video3)
      console.log(video4)
      console.log(video5)

}


// scroll button for viewPage
const previousBtn = document.querySelector('.previousBtn');
const nextBtn = document.querySelector('.nextBtn');
previousBtn.addEventListener('click', function(){
      userId+=1;
      showVideo(userId);
})
nextBtn.addEventListener('click', function(){
userId-=1
showVideo(userId);
})


const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', function(){
      const viewPage = document.querySelector('.viewPage');
      viewPage.style.display = 'none';
})

// scroll buttons for mainPage
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
leftBtn.addEventListener('click', function(){
      const storyContainer = document.querySelector('.storyContainer');
      storyContainer.scrollBy(-400, 0);
})
rightBtn.addEventListener('click', function(){
      const storyContainer = document.querySelector('.storyContainer');
      storyContainer.scrollBy(400, 0);
})


// control button for story video 
const playPauseBtn = document.querySelector('.playPause');
const muteBtn = document.querySelector('.mute');
playPauseBtn.addEventListener('click', function(){
      const video = document.querySelector('.view3 video');
      if(video.paused){
            video.play();
            playPauseBtn.src = "Assets/play_arrow_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
            // console.log(playPauseBtn.src)
      }else{
            video.pause();
            playPauseBtn.src = "Assets/pause_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
            // console.log(playPauseBtn.src)
      }
})
muteBtn.addEventListener('click', function(){
      const video = document.querySelector('.view3 video');
      if(video.muted){
            video.muted=false;
      }else{
            video.muted = true;

      }
})