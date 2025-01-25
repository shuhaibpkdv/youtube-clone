import { videos } from '../data/videos.js';


let videoList = '';

videos.forEach((video) => {
  videoList += `
  <div class="video-preview">
      <div class="thumbnail-row">
        <img class="thumbnail" src="images/${video.videoImage}" alt="">
        <div class="video-time">${video.videoTime}</div>
      </div>

      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-picture" src="images/${video.channelImage}" alt="">
        </div>

        <div class="video-info">
          <p class="video-title">
            ${video.videoTitle}
          </p>
          <p class="video-author">
            ${video.authorName}
          </p>
          <p class="video-stats">
            ${video.videoViews} &middot; ${video.oldVideo}
          </p>
        </div>
      </div>
    </div>
    `;
});

document.querySelector('.video-grid')
  .innerHTML = videoList;