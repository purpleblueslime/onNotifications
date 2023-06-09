import callGraphql from './callGraphql.js';
import query from './query/notifications.js';

export default class {

  func = () => console.log('Ready! uwu');

  onReady (func=()=>{}) { 
    this.func = func;
  }
  
  onNotification (func=()=>{}, timeOut=4000) { // 4 secs by default
    if (timeOut <= 1000) 
      console.warn('SLIME: Woah! Thats really fast..');
  
    this.notifFunc = func;
    this.timeOut = timeOut;
    
    this.func();
  }

  async run (token) {
    if (!token) console.error('SLIME: token is not optional!');
    this.token = token;

    try {
      var {notifs} = (
        await callGraphql(this.token, query)).uwu;
      
      if (!notifs) return;

      var [uwu] = notifs;
    
      this.loop = setInterval(async () => {
        var {notifs} = (
          await callGraphql(this.token, query)).uwu;
    
        if (!notifs) return;
    
        notifs.forEach(notif => {
          if (uwu.id >= notif.id) return;
          this.notifFunc(notif);
        });
    
        [uwu] = notifs;
    
      }, this.timeOut);
    }
    catch (err) {
      console.error(err);
    }
  }

}