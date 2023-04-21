import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import emailjs from 'emailjs-com';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {


  @ViewChild('contactForm', { static: false }) contactForm: NgForm;
  @ViewChild('textContainer') textContainer: ElementRef;
  @ViewChild('formContainer') formContainer: ElementRef;


  name: string;
  email: string;
  message: string;  


  constructor(private el: ElementRef) {}

  ngAfterViewInit(){
    const threshold = .3; // how much % of the element is in view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {                 
                  entry.target.classList.add('fly-in');
                }
            });
        },
        { threshold }
    );
    observer.observe(this.textContainer.nativeElement);
    observer.observe(this.formContainer.nativeElement);
   
  }

  submitForm() {
    const message = `My name is ${this.name}, ${this.email}, ${this.message}`;
    emailjs.send("service_vu602xp","template_0rmlaas",{
      name: this.name,
      email: this.email,
      message: message,
      }, 'Ur2YkYPdUzV3UjaAF');

      alert('Nachricht erfolgreich gesendet!');
      this.contactForm.reset();
  }
  
}
