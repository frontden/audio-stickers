import { Component } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  disabled = false;

  image = '../assets/bananStatic.jpg';

  sound = new Howl({
        src: ['../assets/test.mp3']
    });

    test() {
        this.disabled = true;
        this.image = '../assets/banan.gif';
        this.sound.play();

        setTimeout(() => {this.disabled = false; this.image = '../assets/bananStatic.jpg'; }, 5000);
    }



}
