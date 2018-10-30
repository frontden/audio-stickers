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

  image = 'https://psv4.userapi.com/c848032/u16154083/docs/d15/c3e09051369d/bananStatic.jpg?extra=mOiVzaJEa6Y0L1d8k5JdE3_RlvJeavzBjPsJb763uPIlYCzkCozvuuVpcP-Un0_9lHUlr-EDY81Kgn2oMDL99ItaACi94s9O18tDwocvlF-feY_dLGP51BxYhdakhhl1FskDYyqhzH0bMkXBRvZ8rvw';

  sound = new Howl({
        src: ['https://psv4.vkuseraudio.net/c815622/u16154083/audios/1142b3d7395c.mp3?extra=KjfPwtIknUR2aEA3bWlb3fvQ8CGRWfqiDynVsuKYlFkKNQaGY0DaRsi6SqSzL_A0cIUoT-0LhvbPlYt9EM1M-RlzcRpXWuw3FPvID9qNjnU9YqbMdNmOwtIUuu9Cyzfdnn7GzzYWPEW2LM4A4H6O5UU']
    });

    test() {
        this.disabled = true;
        this.image = 'https://psv4.userapi.com/c848132/u16154083/docs/d13/93e8e427dcee/banan.gif?extra=OdGGqNt3immUN4ycv0w2exzb9O-FL5acrT0Q87EGsAS1Ow3FRBxB--FJCaP9UlfP3nhgBXBIu2RgGTTVHRofrjyEbOc2LQL6man2I_YwcJbLCGIaumBeRl5XwHlqG7WcFDKhfKPAMq0Z7BUksxKfGIY';
        this.sound.play();

        setTimeout(() => {this.disabled = false; this.image = 'https://psv4.userapi.com/c848032/u16154083/docs/d15/c3e09051369d/bananStatic.jpg?extra=mOiVzaJEa6Y0L1d8k5JdE3_RlvJeavzBjPsJb763uPIlYCzkCozvuuVpcP-Un0_9lHUlr-EDY81Kgn2oMDL99ItaACi94s9O18tDwocvlF-feY_dLGP51BxYhdakhhl1FskDYyqhzH0bMkXBRvZ8rvw'; }, 5000);
    }



}
