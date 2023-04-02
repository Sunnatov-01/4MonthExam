import React, { Component } from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import data from './components/signs'

export default class App extends Component {
  state={
    firstTime: false,
    secondTime: false,
    thirdTime: false,
    minute: 0,
    second: 0,
    modalVisible: true,
    randomNumber: parseInt(Math.random()*100),
    data: data,
    count: 0,
    check: false,
  }
  firstTime=()=>{
    this.setState({
      firstTime: true,
      secondTime: false,
      thirdTime: false,
      minute: 1,
      second: 59,
    })
  }
  secondTime=()=>{
    this.setState({
      firstTime: false,
      secondTime: true,
      thirdTime: false,
      minute: 4,
      second: 59,
    })
  }
  thirdTime=()=>{
    this.setState({
      firstTime: false,
      secondTime: false,
      thirdTime: true,
      minute: 7,
      second: 59,
    })
  }
  startGame=()=>{
    const {second,minute,hour} = this.state;
    const {signs} = this.props
    if(second!==0 && minute!==0){
      let a =  setInterval(() => {
        const {second,minute,hour,up} = this.state;
        if(second === 0){
          if(minute === 0){
          }else{
           this.setState({
             minute: minute-1,
             second: 59
           })
          }
         }else{
           this.setState({
             second: second-1
           })
         }
         if(second===0,minute===0,hour===0){
          this.setState({
            up: "Time is up"
          })
         }
       
       }, 1000);
    }
    this.setState({
      modalVisible: !this.state.modalVisible
    })
    }
    toggleModal=()=>{
      this.setState({
        modalVisible: !this.state.modalVisible
      })
    }
    isTrue=()=>{
      if(this.state.data[this.state.randomNumber].symbol_title === this.state.data[this.randomNumber]){
        console.log('its true');
      }
    }
  render() {
    const {modalVisible,randomNumber}=this.state
    return (
      <div>
        <header className="header">
            <h1><span>Time:</span>{this.state.minute}:{this.state.second}</h1>
            <h2>{this.state.data[randomNumber].symbol_title}</h2>
            <h3>Count:{this.state.count}</h3>
        </header>
      <div className='body'>
        <Modal isOpen={modalVisible} toggle={this.toggleModal}>
        <div className="card card1">
          <h1>Traffic Game</h1>
          <span>
            <p className="p1">Set time !</p>
            <article>
              <button onClick={this.firstTime} className=' btn-minute'>2-Minute</button>
              <button onClick={this.secondTime} className=' btn-minute'>5-Minute</button>
              <button onClick={this.thirdTime} className=' btn-minute'>8-Minute</button>
            </article>
          </span>
          <div>
            </div> 
          <button className="btn butn" onClick={this.startGame}>Play</button>
        </div>
        </Modal>
        <div className="cards">
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[1].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[2].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[3].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[4].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[5].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[6].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[7].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[8].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[9].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[10].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[11].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[12].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[13].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[14].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[15].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[16].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[17].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[18].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[19].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[20].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[21].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[22].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[23].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[24].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[25].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[26].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[27].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[28].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[29].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[30].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[31].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[32].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[33].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[34].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[35].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[36].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[37].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[38].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[39].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[40].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[41].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[42].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[43].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[44].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[45].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[46].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[47].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[48].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[49].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[50].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[51].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[52].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[53].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[54].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[55].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[56].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[57].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[58].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[59].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[60].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[61].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[62].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[63].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[64].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[65].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[66].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[67].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[68].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[69].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[70].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[71].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[72].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[73].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[74].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[75].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[76].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[77].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[78].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[79].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[80].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[81].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[82].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[83].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[84].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[85].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[86].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[87].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[88].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[89].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[90].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[91].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[92].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[93].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[94].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[95].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[96].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[97].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[98].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[99].symbol_img} alt="" /></div>
          <div className="card cardd" onClick={this.isTrue}><img className='imgs' src={this.state.data[100].symbol_img} alt="" /></div>
        </div>
      </div>
    </div>
    )
  }
}
// { elBody : document.querySelector("body"),
//     elForm : document.querySelector(".form"), 
//     elSelect : document.querySelector(".select"), 
//     elSelectTime : document.querySelector(".select-time"),
//     elTitle : document.querySelector(".title"),
//     elList : document.querySelector(".list"),
//     elCount : document.querySelector(".count"),
//     elTime : document.querySelector(".timer"),
//     elModal : document.querySelector(".modal"),
//     elModalList : document.querySelector(".modal-list"),
//     elModalBtn : document.querySelector(".modal-btn"),
//     elModalCloseBtn : document.querySelector(".modal-close"),
//     elHeader : document.querySelector("header"),
//     elMain : document.querySelector("main"),
//     elStart : document.querySelector(".game-start"),
//     easyArray : roadSymbol.slice(0, 20),
//     mediumArray : roadSymbol.slice(0, 40),
//     hardArray : roadSymbol.slice(0, 70),
//     errorArray : [],
//     countError : 0,
//     count : 0,}