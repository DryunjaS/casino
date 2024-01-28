import { observable } from 'mobx';

const store = observable({
    balans: 0,
    isAuth:false,

   StraightUp(stake:number) {
    this.balans = stake*35+stake;
  },

   Split(stake:number) {
    this.balans = stake*17+stake;
  },

   Street(stake:number) {
    this.balans = stake*11+stake;
  },

   Corner(stake:number) {
    this.balans = stake*8+stake;
  },
 
   Dozen(stake:number) {
    this.balans = stake*2+stake;
  },

   EVENHANCES(stake:number) {
    this.balans = stake*2;
  },

   loss(stake:number) {
    this.balans -= stake;
  }
})
export default store;

