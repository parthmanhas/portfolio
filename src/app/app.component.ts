import { Component, HostBinding, ElementRef, ViewChild } from '@angular/core';
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = 'QuKsI7P8KUIiXCqvo';
const TEMPLATE_ID = 'template_kvzyje8';
const SERVICE_ID = 'service_dzlgedv';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolio';

  @HostBinding() class = 'flex flex-col items-center justify-center md:p-5 bg-black max-w-[1000px] text-gray-300 scroll-pb-5';

  name: string = '';
  email: string = '';
  message: string = '';

  messageSendStatus: 'SUCCESS' | 'FAILED' | 'SENDING' | 'NONE' = 'NONE';

  nameValid: boolean = true;
  emailValid: boolean = true;
  messageValid: boolean = true;

  @ViewChild('logo')
  public logo!: ElementRef;

  @ViewChild('headingOne')
  public headingOne!: ElementRef;

  @ViewChild('headingTwo')
  public headingTwo!: ElementRef;

  constructor(private elementRef: ElementRef) {

  }

  async ngAfterViewInit() {
    this.scrambleLetters('parthmanhas', this.logo.nativeElement.textContent, this.logo.nativeElement, 20);
    this.scrambleLetters('Nice to meet you!', this.headingOne.nativeElement.textContent, this.headingOne.nativeElement, 5);
    this.scrambleLetters('I am Parth Manhas.', this.headingTwo.nativeElement.textContent, this.headingTwo.nativeElement, 5, true);
  }

  public async scrambleLetters(
    correctOrder: string,
    currentText: string,
    element: HTMLElement,
    time: number,
    underline = false,
    wordRotationCount = 3) {
    const perInterationWidth = Math.ceil(element.clientWidth / correctOrder.length);
    let currentWidth = 0;
    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
    for (let i = 0; i < correctOrder.length; i++) {
      let j = 0;
      while (j < wordRotationCount) {
        const index = Math.floor(Math.random() * 100) % correctOrder.length;
        currentText = currentText.substring(0, i) + correctOrder[index] + currentText.substring(i + 1);
        element.textContent = currentText;
        await timer(time);
        j++;
      }
      currentText = currentText.substring(0, i) + correctOrder[i] + currentText.substring(i + 1);
      element.textContent = currentText;
      // if (underline && this.underline) {
      //     currentWidth += perInterationWidth;
      //     if (currentWidth > element.clientWidth) {
      //         currentWidth = element.clientWidth;
      //     }
      //     this.underline.nativeElement.style.width = `${currentWidth}px`;
      // }
    }
  }

  scrollToBottom() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  submit(event: Event) {
    event.preventDefault();
    //regex to check name
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    //regex to check email
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    // validate name
    if (this.name === '' || !nameRegex.test(this.name)) {
      this.nameValid = false;
      return;
    } else {
      this.nameValid = true;
    }

    // validate email
    if (this.email === '' || !emailRegex.test(this.email)) {
      this.emailValid = false;
      return;
    } else {
      this.emailValid = true;
    }

    // validate message
    if (this.message === '') {
      this.messageValid = false;
      return;
    } else {
      this.messageValid = true;
    }

    this.messageSendStatus = 'SENDING';

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message
    }

    // send email to my account
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        this.messageSendStatus = 'SUCCESS';
      })
      .catch(() => {
        () => {
          this.messageSendStatus = 'FAILED';
        }
      })
      .finally(() => {
        this.scrollToBottom();
      })
  }
}
