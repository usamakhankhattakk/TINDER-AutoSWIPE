var count = 1;
var k = 0;

const likes = prompt('How many likes do you want?(in digits not more than 99 and in multiple of 3)');
if (likes <= 0 || likes > 100 || likes % 3 === 1) {
  console.log('invalid number');
} else {

  var confirmBox = confirm('Start swiping right?');
  //intialiation function to run swiping
  check();
}




//checking to like users 
function check() {
  const likebutton = document.querySelector("button.button.Lts\\(\\$ls\\-s\\).Z\\(0\\).CenterAlign.Mx\\(a\\).Cur\\(p\\).Tt\\(u\\).Bdrs\\(50\\%\\).P\\(0\\).Fw\\(\\$semibold\\).focus\\-button\\-style.Bxsh\\(\\$bxsh\\-btn\\).Expand.Trstf\\(e\\).Trsdu\\(\\$normal\\).Wc\\(\\$transform\\).Pe\\(a\\).Scale\\(1\\.1\\)\\:h.Scale\\(\\.9\\)\\:a.Bgi\\(\\$g\\-ds\\-background\\-like\\)\\:a");
  if (!confirmBox) {
    console.log('Swiping cancelled.');
  } else if (!likebutton) {
    console.error('Like button not found.');
  } else {
    if (k < likes) {
      like(likebutton);
      //checking after every 5 sec
      setTimeout(check, 5000);
    }
  };
};

//like 3 users with every 1 sec difference between them
function like(likebutton) {
  let i;
  for (i = 0; i < 3; i++) {
    task(i, likebutton);
  };
};

function task(i, likebutton) {
  setTimeout(() => liked(likebutton), 1000 * i);
};

function liked(likebutton) {
  likebutton.click();
  console.log('Liked ' + count);
  count++;
  k++;
};


// 1000 millisec=1sec

