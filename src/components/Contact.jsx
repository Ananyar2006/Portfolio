import React, { useState } from 'react';
import { portfolioData } from '../data/content';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const { contact, personal } = portfolioData;
  const [formStatus, setFormStatus] = useState(null); // 'submitting' | 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {contact.title}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Direct Channels Card */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Contact Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-light-border dark:border-dark-border flex items-center gap-3.5 hover:border-accent hover:text-accent transition-colors"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Direct Email</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {contact.email}
                    </p>
                  </div>
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-light-border dark:border-dark-border flex items-center gap-3.5 hover:border-accent hover:text-accent transition-colors"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">LinkedIn Profile</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Ananya R
                    </p>
                  </div>
                </a>

                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg/60 border border-light-border dark:border-dark-border flex items-center gap-3.5 hover:border-accent hover:text-accent transition-colors"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">GitHub Repository</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Ananyar2006
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-accent/5 dark:bg-accent/10 border border-accent/20">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Open for AI/ML Research Collaborations and Software Development opportunities.
              </p>
            </div>
          </div>

          {/* Interactive Formspree Form */}
          <div className="md:col-span-3 p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-light-border dark:border-dark-border shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              Send a Message
            </h3>

            {formStatus === 'success' ? (
              <div className="p-6 text-center space-y-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Thank you for reaching out. Ananya will respond to your message shortly.
                </p>
                <button
                  onClick={() => setFormStatus(null)}
                  className="mt-2 text-xs font-semibold text-accent underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Hi Ananya, I came across your Speech AI research project..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Formspree endpoint placeholder active. You can also send a direct mail via <a href={`mailto:${contact.email}`} className="underline font-bold">mailto link</a>.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3 px-6 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm shadow-md shadow-accent/20 flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {formStatus === 'submitting' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
