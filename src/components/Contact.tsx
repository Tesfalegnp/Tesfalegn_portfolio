// Portfolio/Tesfalegn_portfolio/src/components/Contact.tsx
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Zap, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tesfalegn@example.com',
      href: 'mailto:tesfalegn@example.com',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251-916-225-842',
      href: 'tel:+251916225842',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: '#',
      color: 'from-green-500 to-teal-600',
      subtext: 'Remote-First'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/tesfalegnp',
      label: 'GitHub',
      color: 'hover:bg-cyan-500/10'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/tesfalegn-petros',
      label: 'LinkedIn',
      color: 'hover:bg-blue-500/10'
    },
    {
      icon: Mail,
      href: 'mailto:tesfalegn@example.com',
      label: 'Email',
      color: 'hover:bg-purple-500/10'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-24 h-24 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-4 shimmer-text"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Let's collaborate on cutting-edge AI projects or discuss opportunities in AGI research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="gradient-border rounded-2xl p-2 hover-lift">
              <div className="bg-slate-800/50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                </div>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-start space-x-4 group p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <method.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-400 text-sm mb-1">{method.label}</div>
                        <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                          {method.value}
                        </div>
                        {method.subtext && (
                          <div className="text-cyan-400 text-sm mt-1">{method.subtext}</div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-cyan-500/20">
                  <h4 className="text-white font-semibold mb-6 text-lg">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 glass-effect rounded-xl flex items-center justify-center hover-lift border border-cyan-500/30 ${social.color} transition-all group`}
                      >
                        <social.icon className="text-cyan-400 group-hover:scale-110 transition-transform" size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-effect rounded-2xl p-8 hover-lift">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <div className="space-y-4">
                {[
                  { language: 'English', level: 'Fluent', proficiency: '90%' },
                  { language: 'Amharic', level: 'Native', proficiency: '100%' }
                ].map((lang, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div>
                      <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {lang.language}
                      </div>
                      <div className="text-cyan-400 text-sm">{lang.level}</div>
                    </div>
                    <div className="text-cyan-400 font-bold">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="gradient-border rounded-2xl p-2 hover-lift">
            <div className="bg-slate-800/50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Send className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-3 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 glass-effect border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-3 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 glass-effect border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-3 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 glass-effect border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Project collaboration"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-3 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 glass-effect border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover-lift glow-on-hover transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <Zap size={20} className="group-hover:animate-pulse" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto hover-lift">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-gray-400 mb-6">
              Let's work together to bring your AI and AGI ideas to life
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:tesfalegn@example.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover-lift glow-on-hover flex items-center space-x-3"
              >
                <Mail size={20} />
                <span>Contact Me Now</span>
              </a>
              <a
                href="https://github.com/tesfalegnp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-effect text-white rounded-xl font-semibold hover-lift border border-cyan-500/30 flex items-center space-x-3"
              >
                <Github size={20} />
                <span>View GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}