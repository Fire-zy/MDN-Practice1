document.getElementById('cn').onclick = () => {
  document.title = '笑话生成器';
  document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
  document.getElementById('lbl-cn').textContent = '中国';
  document.getElementById('lbl-us').textContent = '美国';
  document.getElementById('lbl-uk').textContent = '英国';
  document.getElementById('customname').placeholder = '李雷';
  document.querySelector('.randomize').textContent = '随机生成笑话';
};

document.getElementById('us').onclick =
document.getElementById('uk').onclick = () => {
  document.title = 'Silly story generator';
  document.getElementById('lbl-customname').textContent = 'Enter custom name:';
  document.getElementById('lbl-cn').textContent = 'CN';
  document.getElementById('lbl-us').textContent = 'US';
  document.getElementById('lbl-uk').textContent = 'UK';
  document.getElementById('customname').placeholder = 'Bob';
  document.querySelector('.randomize').textContent = 'Generate random story';
};


//定义变量和函数
//customName是对"输入自定义的名字"文本框的引用
//randomize是对"随机生成笑话"按钮的作用
//story是对html底部的.准备存放笑话的<p>元素的引用
//函数（randomValueFromArray() 取一个数组作参数，随机返回数组中的一个元素）
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

//将字符串保存在变量中
let storyText='It was 94 fahrenheit outside,so :insertx: went for a walk. When they got to :inserty:,they stared in horror for a few moments,then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

let insertX=['Willy the Goblin',
			 'Big Daddy',
			 'Father Christmas'];

let insertY=['the soup kitchen',
	         'Disneyland',
	         'the White House'];

let insertZ=['spontaneously combusted',
			 'melted into a puddle on the sidewalk',
			' turned into a slug and crawled away'];

//事件监听器和未完成的函数定义

//为randomize变量增加一个点击事件的监听器（点击时，result函数运行）
randomize.addEventListener('click', result);

//补全函数
function result() {
	let newStory,xItem,yItem,zItem,name;
	//每次按下按钮后，在函数运行时生成一个新的随机的笑话
	newStory=storyText;
	
	xItem=randomValueFromArray(insertX);
	yItem=randomValueFromArray(insertY);
	zItem=randomValueFromArray(insertZ);
	
	newStory=newStory.replace(':insertx:',xItem);
	newStory=newStory.replace(':insertx:',xItem);
	newStory=newStory.replace(':inserty:',yItem);
	newStory=newStory.replace(':insertz:',zItem);
	
  if(customName.value !== '') {
    let name = customName.value;
	newStory = newStory.replace('Bob', name);
  }
  
  if(document.getElementById("uk").checked) {
   const weight = Math.round(300 * 0.0714286) + ' stone';
      const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
      newStory = newStory.replace('94 fahrenheit', temperature);
      newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}