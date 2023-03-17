import { Component, OnInit, ViewChild } from '@angular/core';
import emailjs from 'emailjs-com';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  @ViewChild('contactForm', { static: false }) contactForm: NgForm;

  name: string;
  email: string;
  message: string;  

  ngOnInit(): void {
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
