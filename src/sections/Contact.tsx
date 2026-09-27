import type { FormEvent } from 'react';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/portfolio';
import { Magnetic } from '../components/Magnetic';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry: ${formData.get('subject')}`);
    const body = encodeURIComponent(`From: ${formData.get('name')} (${formData.get('email')})\n\n${formData.get('message')}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section section-shell" id="contact">
      <div className="page-width">
        <SectionHeading eyebrow="GET IN TOUCH" title="Let's make quality visible." description="Have a project, a tricky testing problem, or a role in mind? I'd love to hear about it." />
        <div className="contact-layout">
          <Reveal className="contact-details">
            <p className="contact-lead">Good work starts with a good conversation.</p>
            <a href={`mailto:${profile.email}`} className="contact-method"><span><FaEnvelope aria-hidden="true" /></span><small>Email</small><b>{profile.email}</b><i>↗</i></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-method"><span><FaLinkedin aria-hidden="true" /></span><small>LinkedIn</small><b>{profile.linkedin.replace(/^https?:\/\//, '')}</b><i>↗</i></a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-method"><span><FaGithub aria-hidden="true" /></span><small>GitHub</small><b>{profile.github.replace(/^https?:\/\//, '')}</b><i>↗</i></a>
            <p className="contact-response"><span className="status-pulse" /> Usually responds within 2 business days</p>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={0.1}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="floating-field"><input name="name" type="text" autoComplete="name" placeholder=" " required /><span>Your name</span></label>
                <label className="floating-field"><input name="email" type="email" autoComplete="email" placeholder=" " required /><span>Email address</span></label>
              </div>
              <label className="floating-field"><input name="subject" type="text" placeholder=" " required /><span>What would you like to discuss?</span></label>
              <label className="floating-field floating-field-message"><textarea name="message" rows={4} placeholder=" " required /><span>Message</span></label>
              <Magnetic><button className="button button-primary form-submit" type="submit">Send a message <FaArrowRight aria-hidden="true" /></button></Magnetic>
              <p className="form-note">Your email app will open with the message details ready to send.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
