function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Nu6uZp2rdS":
        Script1();
        break;
      case "6ZPLBYJd73l":
        Script2();
        break;
      case "5pkX7ggXFu0":
        Script3();
        break;
      case "5a8oaY8B6v1":
        Script4();
        break;
      case "5XIiPHeGPDL":
        Script5();
        break;
      case "64ZgtbB3Zkv":
        Script6();
        break;
      case "5bUnFka9Ebb":
        Script7();
        break;
      case "6LXsR39Vsl6":
        Script8();
        break;
      case "67Xd9QnWhaE":
        Script9();
        break;
      case "60ocCMtR1oX":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6m2jD6rM5nK');
const duration = 2000;
const easing = 'ease-out';
const id = '6H3O8YDwa32';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5gimrbM7xY2');
const duration = 750;
const easing = 'ease-out';
const id = '6NZ79r8TNSc';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5zMq2bVYCvg');
const duration = 750;
const easing = 'ease-out';
const id = '6BAX8A7XphK';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5s2x5jwbR8O');
const duration = 750;
const easing = 'ease-out';
const id = '6bgWEG3FM7x';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5luFCjmiwTr');
const duration = 750;
const easing = 'ease-out';
const id = '6D99hA8IeEX';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5VivIFFSDXu');
const duration = 750;
const easing = 'ease-out';
const id = '5hRYakcGQT5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5bhAEz7FnbP');
const duration = 750;
const easing = 'ease-out';
const id = '6aZtgzLzuyJ';
const pulseAmount = 0.07;
const delay = 1300;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('67HFihf3MWz');
const duration = 500;
const easing = 'ease-out';
const id = '6O2koUxhFlN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6onto7Eq6aN');
const duration = 500;
const easing = 'ease-out';
const id = '5qVJizavhX7';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5ybuAqMIShI');
const duration = 500;
const easing = 'ease-out';
const id = '6Jm6NxN4AgN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
