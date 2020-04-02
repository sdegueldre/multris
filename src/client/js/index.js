import { helloMessage } from '../../common/greeting.js';

(async () => {
  const helloWorld = document.createElement('h1');
  helloWorld.textContent = helloMessage;
  document.body.appendChild(helloWorld);

  const serverMessage = await (await fetch('/message')).text(); 
  const helloServer = document.createElement('h1');
  helloServer.textContent = `Server says: ${serverMessage}`;
  document.body.appendChild(helloServer);
})();
