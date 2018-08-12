import React, { Component } from 'react';
import logo from './bayview.jpg';
import './aboutcomponent.css';


export class About extends Component {
  render() {
    return (
  <div> <h1 class="App">ABOUT ME</h1>
      <div className="logo">
           <img src={logo} width="300" />
           <div class="Left">
           <p>My background is in banking, which I fell into after majoring in economics instead of mgmt information systems (long story involving financial aid and such). </p>

<p>Anyway, a retrenchment gave me a chance to reset priorities and revisit the proverbial "what should I do with the rest of my life" question. At this stage in life, the perspective is more about pursuing /exploring interests and ultimately contributing to society. As a case in point, I spent a year in China learning Chinese from scratch, and am now an organizing member of a local Mandarin Meetup.</p>

<p>The other thing I've always wanted to try out is computer programming. In the course of my work, I have been an active (but self-taught) user of VBA in building Excel macros. To this day, I still think it's a  form of magic that you can press a button and tasks that would take hours are done in the blink of an eye. In banking at least, the opportunities for improvement are huge.</p>

<p>I have taken some online (Coursera) courses in Python and R as well.
Based on experience though, the best way to learn is by doing something 'real-world', and that is what I find so appealing about this project. Whatever it is I end up doing in future (my other interests include photography and travel), I firmly believe that a hands-on understanding of tech will play a very useful part, as just about everything we do nowadays involves servers, databases and UIs!</p>
<p>For what its worth, here is a <a href="https://www.dropbox.com/s/rfjagjpvv3qe1dm/ppt%20bond%20screener.pdf?dl=0">preso</a> I did sometime back describing an excel model I created for work that was actually used by the whole firm. By being able to properly program, I think I can take projects like these to the next level.</p>
</div></div></div>
    );
  }
}
