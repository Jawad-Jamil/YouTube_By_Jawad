window.addEventListener('load', ()=>{
    document.querySelector('.preloader_wrapper').classList.add("preloading")
})


let video_details = [

    [
    "শামীম ওসমানের বাবা-মা'র কবরের ওপরে শ্মশানের মাটি! Shamim Osman",
    "somoy tv",
    "83K",
    "1 hour",
    // Not Requared "https://drive.google.com/file/d/1Z4LIiQsux5uu1Dhi3Q3ClbjXilSqOFzL/preview"
    "https://drive.google.com/uc?export=download&id=1Q-4ysJVvJIOYbAlb2Z0WcLVHdjZwy3pn"
    ],


    [
    "শিক্ষণীয় হাসির শর্টফিল্ম কুদে কালা কুদে কালা -০৩ Thikana TV",
    "Thikana Tv.press",
    "131K",
    "3 days",
    // Not Requared "https://drive.google.com/file/d/1OdX05VtfRFyAr-1pDyqgiSUIyMkVOns0/preview"
    "https://drive.google.com/uc?export=download&id=1BwYgkgLKwitmMmNbhnJNZYMnHfxJLCPc"
],


    [
    "Abu Taha Muhammad Adnan Waz Status Video",
    "Abu Taw Haa Muhammad",
    "1.8 lakh",
    "5 months",
    // Not Requared "https://drive.google.com/file/d/1pWeQ--wEYUHdOvwhsnlrCW0RWj_hADDS/preview"
    "https://drive.google.com/uc?export=download&id=1d5nf7cXvN6SWK6FQE_enBcJJElXqI8AR"
],


    [
    "মাহে রমজানের গান রহমের বৃষ্টি জাইমা নূর",
    "Jaima Noor",
    "3.4M",
    "1 years",
    // Not Requared "https://drive.google.com/file/d/1Z2XerGXVELE_IPD-9rRhZwXlCkkYGno3/preview"
    "https://drive.google.com/uc?export=download&id=1bDTrtCDc42y4h6sItlPCBx1N5JrXS-HQ"
],


    [
    "Pobitro Prem পবিত্র প্রেম Akib Ahmed Islamic Natok 2021",
    "akib islamic tv",
    "229K",
    "2 years",
    // Not Requared "https://drive.google.com/file/d/1bbdwLGSKpIHe_CL-HODbQy-MvgNpffHw/preview"
    "https://drive.google.com/uc?export=download&id=1nomXtxmf7AfueLHO41Web1yAZap7UtIa"
],


    [
    "জাইমার কন্ঠে বিবেক জাগ্রত করার গান কেমন মানুষ তুমি Jaima Noor",
    "Jaima Noor",
    "668K",
    "4 hours",
    // Not Requared "https://drive.google.com/file/d/1VL0NPlDgRjADZs0zWrLotFouNE9z5vpn/preview"
    "https://drive.google.com/uc?export=download&id=1tvTZa95PRfL6qFx6TZu7Fb36CEEcsqDt"
],


    [
    "ব্রাজিল vs আর্জেন্টিনা Bangla Islamic Natok 2021 II Akib Islamic Tv",
    "akib islamic tv",
    "39K",
    "4 months",
    // Not Requared "https://drive.google.com/file/d/1D_2402oD4lDQ8-B8SG8M_OgJ_bHYZPsS/preview"
    "https://drive.google.com/uc?export=download&id=1d7zi2kbIBBr3d3MZf_yC3RYOWK2Y3H-Q"
],


    [
    "Seafood Halal or Haram Mizanur Rahman Azhari",
    "mizanur rahman azhari",
    "4M",
    "2 years",
    // Not Requared "https://drive.google.com/file/d/1YrIJfPperAtum5N3em5XnWPDcLSvaxke/preview"
    "https://drive.google.com/uc?export=download&id=1_LKRA0_SsCmGco5dtiifScsIu7irF0rF"
],


    [
    "শহীদ কারা  Who are the martyrs in Islam মিজানুর রহমান আজহারি",
    "mizanur rahman azhari",
    "844K",
    "2 weeks",
    // Not Requared "https://drive.google.com/file/d/1Ck8Sn5zabbYj0GdmWZU4JmFxEGtNE8fl/preview"
    "https://drive.google.com/uc?export=download&id=1B4LHpIwqQGRS-JnDgrr_CkZ5jd_x_Vfl"
],


    [
    "KRIPONNATA-2 কৃপণতা Bangla Islamic Natok 2021 Akib Ahmed",
    "akib islamic tv",
    "79.6K",
    "4 months",
    // Not Requared "https://drive.google.com/file/d/1o2odlDyDBm10-ZZbF6QNc5LguaFjFxSD/preview"
    "https://drive.google.com/uc?export=download&id=1o2odlDyDBm10-ZZbF6QNc5LguaFjFxSD"
],


    [
    "সাইদি সাহেবের ১৯৮০ সালের আগুন ঝরা বক্তব্য। Delwar Hossain Saidi",
    "Madina tv",
    "89.6K",
    "3 months",
    // Not Requared "https://drive.google.com/file/d/1d8YWDOFrXyoUw6estGdvgztopb2AE0qt/preview"
    "https://drive.google.com/uc?export=download&id=1JIKIZ1vTzc74GAR2-6qYtngg2woyf5bP"
],


    [
    "শ্রেষ্ঠ বক্তার শ্রেষ্ঠ বক্তব্য শুনুন জীবন বদলে যাবে Dr.shafiqul Islam masud",
    "Dr. Shafiqul Islam",
    "2.6M",
    "8 months",
    // Not Requared "https://drive.google.com/file/d/18OrsRLLGUiP3FP8-H7LTrplcm3arpLnk/preview"
    "https://drive.google.com/uc?export=download&id=1ZPDpq36lpsUOIEOdSiPImSbm_g5uYkli"
],


    [
    "জাইমা নূরের কণ্ঠে নতুন গান Machranga Dekhecho ki মাছরাঙ্গ Muchki Hasir",
    "saimum shilpogosthi",
    "359K",
    "6 months",
    // Not Requared "https://drive.google.com/file/d/1FzC5_FmEGY_TfwdzxKKM2LLX_DDSvCB_/preview"
    "https://drive.google.com/uc?export=download&id=18Yo0mOSr2qHDog4badNRX07_hU1oRV1H"
],


    [
    "গেম আসক্তি PUBG FREE FIRE Islamic Natok Akib Ahmed",
    "akib islamic tv",
    "173K",
    "22 hours",
    // Not Requared "https://drive.google.com/file/d/1cFMHkox0ZRKF10xVmoDiASuIJQ1yOjtI/preview"
    "https://drive.google.com/uc?export=download&id=1tNIXbeVv7prDUXBOazYYvCGmapN4Ocut"
],


    [
    "২০ থেকে ২৫ হাজারে সেরা ৫ টি স্মার্টফোন - Best Phones in 20k-25k",
    "Sohag360",
    "582K",
    "9 months",
    // Not Requared "https://drive.google.com/file/d/1ef9xNHsNPzrb3lhoBc5QG1fJrw4o9zQi/preview"
    "https://drive.google.com/uc?export=download&id=1TjD4fUWkNGzVmN7g9ecsRyDwoRhjebdn"
],


    [
    "শিশুদের কুরবানী ঈদের নতুন নাশীদ ইসমাঈলের কুরবানী Ismailer Kurbani Jaima",
    "Panvision tv",
    "3.7M",
    "7 days",
    // Not Requared "https://drive.google.com/file/d/1Z4LIiQsux5uu1Dhi3Q3ClbjXilSqOFzL/preview"
    "https://drive.google.com/uc?export=download&id=1eIYQ_GcpR2Uwj_9-yWw7wzt_8ttSyVTV"
],
    

    [
    "মতিউর রহমান মল্লিকের জনপ্রিয় নাশীদ আশাহত হয়ো নাকো তুমি | Jaima Noor",
    "Panvision tv",
    "37K",
    "12 days",
    // Not Requared "https://drive.google.com/file/d/1qdOdoHM2l133TlrIGbdxr0BuseQ8pzhn/preview"
    "https://drive.google.com/uc?export=download&id=1pefLTgA0WfY8H9zCX0DQJt6gdFHGSPrN"
    ],
    
        
    [
    "বাইয়াত নিয়ে জাগরণী গান Bayat Song বায়াত Saimum 2021 সাইমুম",
    "saimum shilpogosthi",
    "473K",
    "8 months",
    // Not Requared "https://drive.google.com/file/d/1zAvQhkHeRqZwi4O7qSUTqH1J2c3h6XNh/preview"
    "https://drive.google.com/uc?export=download&id=1-npkwoo-7sqDfAuWfQorZtPStenoDFKE"
    ],
    

    [
    "Mobile Network Booster - এখন সব জায়গায় নেটওয়ার্ক থাকবে!",
    "Sohag360",
    "142K",
    "5 weeks",
    // Not Requared "https://drive.google.com/file/d/17grbro1SgG3pBBfvP8N-f9-vG6_UE__f/preview"
    "https://drive.google.com/uc?export=download&id=1ud7pDatJnanNdbnGhxBlDMAS4nYdfDMB"
    ],
    
    
    [
    "How smartphones are made in Bangladesh? - A Factory Tour",
    "Sohag360",
    "441K",
    "1 month",
    // Not Requared "https://drive.google.com/file/d/1aKgaf1WeireF8X-ZGr25VdHlNWkMRQkM/preview"
    "https://drive.google.com/uc?export=download&id=11_4_IqcqzIuqyH7j8t1hOdpLi0WCtUBg"
    ]
    
    
]


for (let index = 0; index < video_details.length; index++) {
    let element = document.querySelector(".content_part")

    element.innerHTML += `
    
    <div class='thumb_vid_wrapper'>
    <div class='thumb_wrapper'>
        <img class="thumbnail" src="thumbs_and_videos/Video-${index+1}/Thumb.jpg">
    </div>

    <div class='title_wrapper'>
        <div class='left_channel'><img class='profile_pic' src='Channels/${video_details[index][1]}.jpg'></div>

        <div class='right_title'>
            <div class='right_top_title'> ${video_details[index][0]}</div>

            <div class='right_chnl_title'>
                <div class='chnl_name'>
                    <h6> ${video_details[index][1]}</h6>
                    <i class='fas fa-check-circle'></i>
                </div>

                <div class='right_time_title'><span>${video_details[index][2]} views</span> <span class="point" style ="font-size: 4px !important; padding: 0px 5px;"><i class='fas fa-circle'></i></span> <span>${video_details[index][3]} ago</span></div>
            </div>

        </div>
    </div>
</div>

    `
}

for (let i = 0; i < 9; i++) {
    let braille= document.querySelector(".braille")

    braille.innerHTML += `
        <div class="squre_braille"></div>
    `
}


let content_part = document.querySelector(".content_part")
let yt_home_logo = document.getElementById("youtube_home_logo")
let video_thumb = document.querySelectorAll(".thumb_vid_wrapper")
let left_menu_wrapper = document.querySelector(".left_menu_wrapper")
let tab_title = document.querySelector("#tab_title")
let play_part = document.querySelector(".play_part")
let main_part = document.querySelector(".main_part")
let back_btn = document.querySelector(".back_btn")
let header_bar = document.querySelector(".header_bar")
let bars_div = document.querySelector(".bars_div")


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


video_thumb.forEach( (number,i) => {

    number.addEventListener('click', ()=> {
        tab_title.innerHTML = video_details[i][0]
        topFunction()
        left_menu_wrapper.style.display = "none"
        main_part.setAttribute("style","padding: 25px 40px;")
        content_part.classList.add("content_when_played")
        header_bar.style.display = "none";
        back_btn.style.display = "inline-block";
        bars_div.style.paddingTop = "7px";
        
        play_part.innerHTML = `
    <div class="play_page_container">

        <div class="play_page_left">
    
            <div class="play_video_wrapper">
                <video onclick="PlayPause()" id="videos" src="${video_details[i][4]}" allowfullscreen autoplay></video>
                <div onclick="PlayPause()" class="overly_poster"><i id="playPause_btn" class="fas fa-pause"></i></div>

            <div class="range_wrapper">
                <div class="inp_range">
                    <input value="0" min="0" max="100" type="range" name="range" id="rangeId" step="1">
                </div>
                
                <div class="dur_play_wrapper">
                    
                <div><i onclick="PlayPause()" id="playPause_btn2" class="fas fa-pause"></i></div>
            
                    <div class="duration_wrapper">
                        <div class="left_duration">
                            <div class="minute">0</div>
                            <div>:</div>
                            <div class="second">0</div>
                        </div>
                        <p>/</p>
                        <div class="right_duration">
                            <div class="minute_duration">0</div>
                            <div>:</div>
                            <div class="second_duration">0</div>
                        </div>
                    </div>
                </div>
            
            </div>


        </div>
    
            <div class="video_title">
                <div class="video_heading"><h3>${video_details[i][0]}</h3></div>
                <div class="video_options_wrapper">
    
                    <div class="right_time_title"><span>${video_details[i][2]} views</span> <span class="point" style ="font-size: 4px !important; padding: 0px 5px;"><i class='fas fa-circle'></i></span> <span>${video_details[i][3]} ago</span></div>
                    <div class="video_react">
    
                        <div class="reactions">
                            <img id="like" src="https://img.icons8.com/material-outlined/24/000000/thumb-up.png"/>
                            <img id="unlike" src="https://img.icons8.com/material-outlined/24/000000/thumbs-down.png"/>
                        </div>
    
                        <div class="share">
                            <i class="fas fa-share"></i>
                            <span class= "share_text">Share</span>
                        </div>
    
                        <div class="save">
                            <i class="fas fa-save"></i>
                            <span class= "save_text">Save</span>
                        </div>
    
                        <div class="vid_menu">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
    
    
                    </div>
    
                </div>
            </div>
    
            <div class="channel_details">
    
                <div class="vid_chnl_wrapper">
                    <div class='left_channel  video-play_chnl_logo'><img class='profile_pic' src='Channels/${video_details[i][1]}.jpg'></div>
                    
                    <div class="chnl_name_video_play_wrapper">
                        <div class='chnl_name chnl_name_video_play'>
                            <h6> ${video_details[i][1]}</h6>
                            <i class='fas fa-check-circle'></i>
                        </div>
    
                        <div class="subscribers_count">2.26 lakh subscribers</div>
                    </div>
    
                </div>
    
                
                <div class="subscribe_wrapper">
                    <img src= "subscribe.png">
                </div>
    
            </div>
    
        </div>
      
    </div>  `


let VideoTag = document.getElementById("videos")
let range = document.querySelector("#rangeId");
let minute = document.querySelector(".minute");
let minute_duration = document.querySelector(".minute_duration");
let second = document.querySelector(".second");
let second_duration = document.querySelector(".second_duration");
let play_btn = document.querySelector("#playPause_btn")
let play_btn2 = document.querySelector("#playPause_btn2")

range.addEventListener("input", VidSeek);
VideoTag.addEventListener("timeupdate", seektimeupdate)


function seektimeupdate() {
    let new_time = VideoTag.currentTime * (100/VideoTag.duration)
    range.value = new_time;

    minute.innerHTML = (VideoTag.currentTime/60);
    minute_duration.innerHTML = (VideoTag.duration/60);

    if ((VideoTag.currentTime%60)<10) {
        second.innerHTML = "0" + (VideoTag.currentTime%60);
    } else{
        second.innerHTML = (VideoTag.currentTime%60);
    }

    if ((VideoTag.duration%60)<10) {
        second_duration.innerHTML = "0" + (VideoTag.duration%60);
    } else{
        second_duration.innerHTML = (VideoTag.duration%60);
    }
        
    if (VideoTag.currentTime == VideoTag.duration) {
        play_btn.classList.add("fa-play");
        play_btn.classList.remove("fa-pause");
        play_btn2.classList.add("fa-play");
        play_btn2.classList.remove("fa-pause");
        play_btn.setAttribute("style", "transform: translateY(0px); transition:.2s; opacity: 1;")
    }

}


function VidSeek() {
    let seekto = VideoTag.duration * (range.value/100)
    VideoTag.currentTime = seekto;
}



        let like = document.querySelector("#like")
        let unlike = document.querySelector("#unlike")

        let liked = false;
        let unliked = false;
        
        let like_link = "https://img.icons8.com/material-sharp/24/000000/thumb-up.png"
        let removed_like_link = "https://img.icons8.com/material-outlined/24/000000/thumb-up.png"
        
        let unlike_link = "https://img.icons8.com/material-sharp/24/000000/thumbs-down.png"
        let removed_unlike_link = "https://img.icons8.com/material-outlined/24/000000/thumbs-down.png"

    
        like.addEventListener("click", function() {

            if (!liked) {
                liked = true
                unliked = false
                like.src = like_link;
                unlike.src = removed_unlike_link;
            } else if (liked) {
                liked = false
                unliked = true
                like.src = removed_like_link;
            }

        });
        

        unlike.addEventListener("click", function() {

            if (!unliked) {
                unliked = true
                liked = false
                unlike.src = unlike_link;
                like.src = removed_like_link;
            } else if (unliked) {
                unliked = false
                liked = true
                unlike.src = removed_unlike_link;
            }

        });
        


    })

})


function PlayPause() {
    let VideoTag = document.querySelector("#videos")
    let play_btn = document.querySelector("#playPause_btn")
    let play_btn2 = document.querySelector("#playPause_btn2")
    let overly_poster = document.querySelector(".overly_poster")
    let range_wrapper = document.querySelector(".range_wrapper")

    overly_poster.classList.toggle('overlys')
    range_wrapper.classList.toggle('overlys')

    if(VideoTag.paused) {
        VideoTag.play()
        play_btn.classList.add("fa-pause");
        play_btn.classList.remove("fa-play");
        play_btn2.classList.add("fa-pause");
        play_btn2.classList.remove("fa-play");
        play_btn.setAttribute("style", "transform: translateY(50px); transition:.2s;opacity:0")

    } else if (VideoTag.played) {
        VideoTag.pause()
        play_btn.classList.add("fa-play");
        play_btn.classList.remove("fa-pause");
        play_btn2.classList.add("fa-play");
        play_btn2.classList.remove("fa-pause");
        play_btn.setAttribute("style", "transform: translateY(50px); transition:.2s; opacity: 0;")

    }

}
