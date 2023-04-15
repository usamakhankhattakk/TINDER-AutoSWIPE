var confirmBox = confirm('Start swiping right?');
var count = 1;
var k = 0;
//input how many likes you want
var likes = 5;

const likebutton = document.querySelector('[aria-label="Like"]');

//intialiation function to run swiping
check();


//checking to like users 
function check() {

  if (!confirmBox) {
    console.log('Swiping cancelled.');
  } else if (!likebutton) {
    console.error('Like button not found.');
  } else {
    if (k < likes) {
      like();
      //checking after every 5 sec
      setTimeout(check, 5000);
    }
  };
};


//like 3 users with every 1 sec difference between them
function like() {
  let i;
  for (i = 0; i < 3; i++) {
    task(i);
  };
};

function task(i) {
  setTimeout(liked, 1000 * i);
};


function liked() {

  likebutton.click();
  console.log('Liked ' + count);
  count++;
  k++;
};


// 1000 millisec=1sec
