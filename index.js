const reels = [
  {
    ismuted:true,
    username: "travelwithria",
    likeCount: 12450,
    isLiked: false,
    commentCount: 320,
    caption: "Sunset views from the mountains 🌄",
    video: "./video/video1.mp4",
    userProfile: "./image/image1.avif",
    shareCount: 150,
    isFollowed: false
  },
  {
        ismuted:true,

    username: "fitwithraj",
    likeCount: 8450,
    isLiked: false,
    commentCount: 210,
    caption: "Morning workout routine 💪",
    video: "./video/video2.mp4",
    userProfile: "./image/image2.avif",
    shareCount: 95,
    isFollowed: false
  },
  {
        ismuted:true,

    username: "foodie_anu",
    likeCount: 15600,
    isLiked: true,
    commentCount: 410,
    caption: "Best street food in town 🍜",
    video: "./video/video3.mp4",
    userProfile: "./image/image3.avif",
    shareCount: 260,
    isFollowed: true
  },
  {
    
        ismuted:true,

    username: "techwithsam",
    likeCount: 6700,
    isLiked: false,
    commentCount: 140,
    caption: "Top 3 coding tips for beginners 👨‍💻",
    video: "./video/video4.mp4",
    userProfile: "./image/image4.avif",
    shareCount: 75,
    isFollowed: false
  },
  {
            ismuted:true,

    username: "dancewithmaya",
    likeCount: 19800,
    isLiked: true,
    commentCount: 520,
    caption: "Trending dance challenge 🔥",
    video: "./video/video5.mp4",
    userProfile: "./image/image5.avif",
    shareCount: 340,
    isFollowed: true
  },
  {
            ismuted:true,

    username: "naturevibes",
    likeCount: 9100,
    isLiked: false,
    commentCount: 180,
    caption: "Relaxing waterfall sounds 🌊",
    video: "./video/video6.mp4",
    userProfile: "./image/image6.avif",
    shareCount: 120,
    isFollowed: false
  },
  {
            ismuted:true,

    username: "gamingwithalex",
    likeCount: 14300,
    isLiked: true,
    commentCount: 350,
    caption: "Epic gaming clutch moment 🎮",
    video: "./video/video7.mp4",
    userProfile: "./image/image7.avif",
    shareCount: 220,
    isFollowed: true
  },
  {
            ismuted:true,

    username: "makeupbylisa",
    likeCount: 11200,
    isLiked: false,
    commentCount: 290,
    caption: "5 minute makeup look 💄",
    video: "./video/video8.mp4",
    userProfile: "./image/image8.avif",
    shareCount: 160,
    isFollowed: false
  },
  {
            ismuted:true,

    username: "carloverjay",
    likeCount: 7600,
    isLiked: true,
    commentCount: 130,
    caption: "Dream car reveal 🚗",
    video: "./video/video9.mp4",
    userProfile: "./image/image9.avif",
    shareCount: 80,
    isFollowed: false
  },
  {
            ismuted:true,

    username: "artwithneha",
    likeCount: 13400,
    isLiked: false,
    commentCount: 270,
    caption: "Speed painting a sunset 🎨",
    video: "./video/video10.mp4",
    userProfile: "./image/image10.avif",
    shareCount: 190,
    isFollowed: true
  }
];

var allreels=document.querySelector('.all-reels')

var isMuted=true


function addData(){
  var sum=''
reels.forEach(function(elem,idx){
    sum=sum+`<div class="reel">
                <video autoplay loop ${elem.ismuted?'muted':''} src="${elem.video}"></video>
                  <div id="${idx}" class="mute">
                  ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
                   </div>

                 <div class="bottom">
                    <div class="user">
                        <img src="${elem.userProfile}">
                        <h3>${elem.username}</h3>
                        <button id="${idx}" class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
                    </div>
                    <h4>${elem.caption}</h4>
                 </div>
              <div class="right">
                <div id=${idx} class="like">
                    <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                    <h6>${elem.likeCount}</h6>
                    </div>
                    <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                    <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="share">
                         <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                    <h6>${elem.shareCount}</h6>
                    </div>
                   <div class="menu">
                   <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>

                   </div>
        
                </div>
              </div>`
})
allreels.innerHTML=sum

}


addData()

allreels.addEventListener('click',function(dets){
  
   if(dets.target.className=='like'){
        if(!reels[dets.target.id].isLiked){
          reels[dets.target.id].likeCount++
          reels[dets.target.id].isLiked=true
        }
        else{
          reels[dets.target.id].likeCount--
          reels[dets.target.id].isLiked=false
        }
   }   
      addData()  

    if(dets.target.className=='follow'){
       if(!reels[dets.target.id].isFollowed){
          reels[dets.target.id].isFollowed=true
        }
        else{
         reels[dets.target.id].isFollowed=false

        }
   } 

   addData()  

     if(dets.target.className=='mute'){
       if(!reels[dets.target.id].ismuted){
          reels[dets.target.id].ismuted=true
        }
        else{
         reels[dets.target.id].ismuted=false

        }
   } 

   addData() 
})
