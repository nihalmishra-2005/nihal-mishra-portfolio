'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Moon, Sun, Menu, X, ArrowDown, Mail, Linkedin, Github, 
  ExternalLink, Download, ChevronDown, Send, CheckCircle 
} from 'lucide-react'

// Navigation Component
function Navbar({ isDark, setIsDark, isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="#"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            NM
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-[var(--accent-primary)] transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-[var(--surface)] shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-[var(--surface)] shadow-md"
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 hover:text-[var(--accent-primary)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section Component
function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--accent-primary)] opacity-10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--accent-secondary)] opacity-10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-medium">
            UI/UX Designer & MCA Student
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Nihal Mishra</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-[var(--muted)] max-w-2xl mx-auto mb-10"
        >
          Crafting intuitive digital experiences through the perfect blend of design thinking and technology
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          
          <motion.a
            href="/resume.pdf"
            download
            className="px-8 py-4 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] font-semibold rounded-xl hover:bg-[var(--accent-primary)]/10 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-[var(--muted)]" size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// About Section Component
function About() {
  const skills = [
    { name: 'Figma', level: 95 },
    { name: 'Power BI', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'React', level: 75 },
    { name: 'UX Research', level: 90 },
    { name: 'Wireframing', level: 88 },
  ]

  const education = [
    {
      year: '2023 - Present',
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Lovely Professional University',
      description: 'Specializing in Human-Computer Interaction and Software Development'
    },
    {
      year: '2020 - 2023',
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University of Calcutta',
      description: 'Foundation in programming, database management, and web technologies'
    }
  ]

  return (
    <section id="about" className="section-padding bg-[var(--surface)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            A passionate UI/UX designer and MCA student bridging the gap between design and development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--background)] p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Hello, I'm Nihal Mishra</h3>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                I am a UI/UX Designer and MCA student dedicated to solving real-world problems through the intersection of design and technology. With a strong foundation in both visual design and technical skills, I create user-centered digital products that are both beautiful and functional.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                My approach combines empathy-driven research with data-informed decisions, ensuring that every product I work on delivers meaningful value to its users. I'm constantly learning and staying updated with the latest design trends and technologies.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] rounded-lg font-medium hover:bg-[var(--accent-primary)] hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--accent-primary)]/30" />
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[var(--accent-primary)] transform -translate-x-1/2" />
                  
                  <div className="bg-[var(--background)] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-medium rounded-full mb-3">
                      {edu.year}
                    </span>
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <p className="text-[var(--accent-secondary)] font-medium mb-2">{edu.institution}</p>
                    <p className="text-[var(--muted)] text-sm">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Projects Section Component
function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sales Analytics Dashboard',
      category: 'Data Visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      problem: 'Sales teams were struggling to visualize their performance data, leading to poor decision-making and missed targets.',
      research: 'Conducted user interviews with 15+ sales representatives, analyzed current workflows, and studied competitor dashboards.',
      solution: 'Designed an intuitive dashboard with real-time metrics, customizable widgets, and AI-powered insights for analysis.',
      tools: ['Figma', 'Power BI', 'SQL', 'React'],
      outcome: 'Improved sales team productivity by 40% and reduced time spent on manual reporting by 60%.'
    },
    {
      id: 2,
      title: 'Hospital Queue Optimization System',
      category: 'Healthcare App',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop',
      problem: 'Patients faced long wait times and hospitals struggled with inefficient patient flow management.',
      research: 'Shadowed hospital staff for 2 weeks, surveyed 200+ patients, and analyzed peak hour patterns.',
      solution: 'Created a smart queue management system with real-time wait time predictions, appointment scheduling, and SMS notifications.',
      tools: ['Figma', 'UX Research', 'Wireframing', 'Prototyping'],
      outcome: 'Reduced average patient wait time by 35% and improved patient satisfaction scores by 50%.'
    },
    {
      id: 3,
      title: 'E-commerce App Redesign',
      category: 'Mobile Design',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      problem: 'Low conversion rates and high cart abandonment due to complex navigation and outdated UI.',
      research: 'Performed heuristic evaluation, A/B testing, and user journey mapping to identify pain points.',
      solution: 'Redesigned the entire app with modern UI, simplified checkout process, and personalized product recommendations.',
      tools: ['Figma', 'User Testing', 'Wireframing', 'Prototyping'],
      outcome: 'Increased conversion rate by 25% and reduced cart abandonment by 40%.'
    }
  ]

  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            Selected case studies showcasing my design process and problem-solving approach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--surface)] rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                <AnimatePresence>
                  {expandedProject === project.id ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 pt-4 border-t">
                        <div>
                          <h4 className="font-semibold text-[var(--accent-primary)] mb-1">Problem</h4>
                          <p className="text-sm text-[var(--muted)]">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--accent-primary)] mb-1">Research</h4>
                          <p className="text-sm text-[var(--muted)]">{project.research}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--accent-primary)] mb-1">Solution</h4>
                          <p className="text-sm text-[var(--muted)]">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--accent-primary)] mb-1">Tools Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map(tool => (
                              <span key={tool} className="text-xs px-2 py-1 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] rounded">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-600 mb-1">Outcome</h4>
                          <p className="text-sm text-[var(--muted)]">{project.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="text-[var(--muted)] text-sm line-clamp-2">{project.problem}</p>
                  )}
                </AnimatePresence>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="mt-4 flex items-center gap-2 text-[var(--accent-primary)] font-medium text-sm hover:underline"
                >
                  {expandedProject === project.id ? 'Show Less' : 'View Case Study'}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills Section Component
function Skills() {
  const skillCategories = [
    {
      title: 'Design Tools',
      skills: [
        { name: 'Figma', percentage: 95, icon: '🎨' },
        { name: 'Adobe XD', percentage: 85, icon: '📐' },
        { name: 'Sketch', percentage: 75, icon: '✏️' },
        { name: 'Power BI', percentage: 80, icon: '📊' },
      ]
    },
    {
      title: 'Technical Skills',
      skills: [
        { name: 'React', percentage: 75, icon: '⚛️' },
        { name: 'SQL', percentage: 80, icon: '🗄️' },
        { name: 'HTML/CSS', percentage: 85, icon: '🌐' },
        { name: 'JavaScript', percentage: 70, icon: '📜' },
      ]
    },
    {
      title: 'UX Skills',
      skills: [
        { name: 'UX Research', percentage: 90, icon: '🔍' },
        { name: 'Wireframing', percentage: 88, icon: '📝' },
        { name: 'Prototyping', percentage: 85, icon: '🎯' },
        { name: 'Usability Testing', percentage: 82, icon: '✅' },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-[var(--surface)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            A comprehensive toolkit spanning design, development, and user research
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-[var(--background)] p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-[var(--muted)]">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-[var(--surface)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { name: 'Email', icon: Mail, href: 'mailto:nihalmishra@example.com', color: 'hover:text-red-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/nihalmishra', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/nihalmishra', color: 'hover:text-gray-900 dark:hover:text-white' },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-5" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--surface)] p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                <p className="text-lg font-semibold">Message Sent Successfully!</p>
                <p className="text-[var(--muted)]">I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-gray-200 dark:border-gray-700 focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-gray-200 dark:border-gray-700 focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-gray-200 dark:border-gray-700 focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-[var(--surface)] p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-[var(--muted)] mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background)] hover:bg-[var(--accent-primary)]/10 transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-colors">
                      <link.icon size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">{link.name}</p>
                      <p className="text-sm text-[var(--muted)]">{link.href.replace('mailto:', '').replace('https://', '')}</p>
                    </div>
                    <ExternalLink className="ml-auto text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-[var(--surface)] p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75" />
              </div>
              <div>
                <p className="font-semibold">Available for Freelance</p>
                <p className="text-sm text-[var(--muted)]">Open to new opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[var(--surface)] py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold gradient-text">NM</span>
            <div>
              <p className="font-semibold">Nihal Mishra</p>
              <p className="text-sm text-[var(--muted)]">© 2024 All rights reserved</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:nihalmishra@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[var(--background)] hover:bg-[var(--accent-primary)]/10 text-[var(--muted)] hover:text-[var(--accent-primary)] transition-colors"
              whileHover={{ y: -3 }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/nihalmishra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[var(--background)] hover:bg-[var(--accent-primary)]/10 text-[var(--muted)] hover:text-[var(--accent-primary)] transition-colors"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/nihalmishra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[var(--background)] hover:bg-[var(--accent-primary)]/10 text-[var(--muted)] hover:text-[var(--accent-primary)] transition-colors"
              whileHover={{ y: -3 }}
            >
              <Github size={20} />
            </motion.a>
          </div>

          {/* Back to top */}
          <motion.a
            href="#"
            className="p-3 rounded-full bg-[var(--accent-primary)] text-white shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDown className="rotate-180" size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle dark mode
  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true)
    }
  }, [])

  // Apply dark mode class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
    }
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar 
        isDark={isDark} 
        setIsDark={setIsDark}
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
