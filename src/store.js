/**
 * Created by Administrator on 2017/3/22.
 */
var KEY = 'tudoList';
export default{
  fecth(){
    return JSON.parse(window.localStorage.getItem(KEY)||'[]');
  },
  save(items){
    window.localStorage.setItem(KEY,JSON.stringify(items));
  }
}
