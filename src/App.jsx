import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Clock, Star, Instagram, Award, ChevronDown, Menu, X, Scissors, Sparkles } from 'lucide-react'
import './App.css'

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Locations', href: '#locations' },
    { name: 'Gallery', href: '#gallery' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}
    >
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <img src="/logo.png" alt="Back Alive" />
        </a>

        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="https://www.fresha.com/providers/back-alive-barbershop-bv8n64z5"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Book Now
        </a>

        <button className="nav-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.fresha.com/providers/back-alive-barbershop-bv8n64z5"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-cta"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section
function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="hero">
      <div className="hero-bg">
        {/* Video Background */}
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/citywalk/interior1.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />

        <div className="hero-gradient" />
        <div className="hero-grid" />
        <motion.div
          className="hero-glow hero-glow-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="hero-glow hero-glow-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <motion.div className="hero-content" style={{ y, opacity }}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
          className="hero-logo-wrapper"
        >
          <img src="/logo.png" alt="Back Alive" className="hero-logo" />
          <div className="hero-logo-glow" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hero-subtitle"
        >
          The Home of Dubai Barbers
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="hero-title"
        >
          Back <span className="neon-text">Alive</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="hero-tagline"
        >
          Do it with passion or not at all
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="hero-awards"
        >
          <Award size={20} className="gold-text" />
          <span>Fact Magazine Award Winner</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="hero-cta"
        >
          <a
            href="https://www.fresha.com/providers/back-alive-barbershop-bv8n64z5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Scissors size={20} />
            Book Your Cut
          </a>
          <a href="#services" className="btn-outline">
            View Services
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hero-scroll"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// About Section
function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-content"
          >
            <p className="section-label">Our Story</p>
            <h2 className="section-title">
              Inspired by the <span className="neon-text">Fear</span> of Being Average
            </h2>
            <p className="about-text">
              As a collective, we noticed that the art of barbering had been lost throughout the city
              along with its passion. Back Alive is here to bring it back.
            </p>
            <p className="about-text">
              It's not simply about getting a cut—it's about being part of a movement and a community.
              As you step through our doors, you'll be greeted by the sounds of hip hop and welcomed
              into our family.
            </p>
            <p className="about-text highlight">
              We respect you and your hustle, and we make sure you look your best by the end of your visit.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number neon-text">4.9</span>
                <span className="stat-label">Average Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number neon-text">4,200+</span>
                <span className="stat-label">Reviews</span>
              </div>
              <div className="stat">
                <span className="stat-number gold-text">1x</span>
                <span className="stat-label">Award Winner</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image"
          >
            <div className="about-image-wrapper">
              <img src="/images/citywalk/interior2.jpg" alt="Back Alive Barbershop Interior - Premium grooming space in Dubai City Walk" loading="lazy" />
              <div className="about-image-overlay" />
            </div>
            <div className="about-image-accent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    { name: 'Classic Cut', price: 130, desc: 'Precision cut tailored to your style' },
    { name: 'Taper Fade', price: 130, desc: 'Clean gradient from skin to length' },
    { name: 'Skin Fade', price: 150, desc: 'Sharp fade down to the skin' },
    { name: 'Major Transformation', price: 250, desc: 'Complete style overhaul' },
    { name: 'Classic Beard Trim', price: 75, desc: 'Expert beard shaping' },
    { name: 'Luxury Beard Treatment', price: 200, desc: 'Full beard care experience' },
    { name: 'Skin Fade + Beard', price: 225, desc: 'Our most popular combo' },
    { name: 'Full Back Alive Experience', price: 680, desc: '2hr 5min of premium grooming', featured: true },
  ]

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-bg" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Services & <span className="neon-text">Pricing</span></h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`service-card ${service.featured ? 'featured' : ''}`}
            >
              {service.featured && (
                <div className="service-badge">
                  <Sparkles size={14} />
                  Premium
                </div>
              )}
              <div className="service-info">
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </div>
              <div className="service-price">
                <span className="currency">AED</span>
                <span className="amount">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="services-cta"
        >
          <a
            href="https://www.fresha.com/providers/back-alive-barbershop-bv8n64z5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Locations Section
function Locations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const locations = [
    {
      name: 'City Walk',
      address: 'Building 10-01, Al Mustaqbal St, Al Wasl',
      phone: '+971 4 568 1417',
      rating: 4.9,
      reviews: '3,140+',
      image: '/images/citywalk.jpg'
    },
    {
      name: 'Dubai Marina',
      address: 'Stella Maris Tower, Floor B1',
      phone: '+971 4 342 3688',
      rating: 4.9,
      reviews: '1,085+',
      image: '/images/marina.jpg'
    }
  ]

  return (
    <section id="locations" className="locations" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <p className="section-label">Find Us</p>
          <h2 className="section-title">Our <span className="neon-text">Locations</span></h2>
        </motion.div>

        <div className="locations-grid">
          {locations.map((location, i) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="location-card"
            >
              <div className="location-image">
                <img src={location.image} alt={`${location.name} - Back Alive Barbershop Dubai location`} loading="lazy" />
                <div className="location-overlay" />
              </div>
              <div className="location-content">
                <h3>{location.name}</h3>
                <div className="location-rating">
                  <Star size={16} fill="#D4AF37" stroke="#D4AF37" />
                  <span>{location.rating}</span>
                  <span className="reviews">({location.reviews} reviews)</span>
                </div>
                <div className="location-details">
                  <div className="location-detail">
                    <MapPin size={16} />
                    <span>{location.address}</span>
                  </div>
                  <div className="location-detail">
                    <Phone size={16} />
                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                  </div>
                  <div className="location-detail">
                    <Clock size={16} />
                    <span>10:00 AM - 10:00 PM Daily</span>
                  </div>
                </div>
                <a
                  href="https://www.fresha.com/providers/back-alive-barbershop-bv8n64z5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-btn"
                >
                  Book at {location.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Gallery Section
function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const images = [
    { src: '/images/citywalk/interior1.jpg', alt: 'City Walk Interior' },
    { src: '/images/citywalk/interior2.jpg', alt: 'Lounge Area' },
    { src: '/images/marina/interior2.jpg', alt: 'Marina Location' },
    { src: '/images/citywalk/logo-wall.jpg', alt: 'Logo Wall' },
    { src: '/images/barber-action.jpg', alt: 'Barber at Work' },
    { src: '/images/marina/interior1.jpg', alt: 'Marina Interior' },
  ]

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <p className="section-label">The Vibe</p>
          <h2 className="section-title">Our <span className="neon-text">Space</span></h2>
        </motion.div>

        <div className="gallery-grid">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="gallery-item"
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// WhatsApp Floating Button
function WhatsAppButton() {
  const phoneNumber = '971586611529' // Back Alive WhatsApp
  const message = 'Hi! I would like to book an appointment at Back Alive Barbershop.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.128-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.594c-.39 1.1-1.932 2.014-3.182 2.28-.856.182-1.974.326-5.738-1.234-4.818-1.996-7.92-6.9-8.16-7.22-.232-.32-1.95-2.6-1.95-4.96s1.234-3.52 1.672-4.002c.39-.43 1.026-.624 1.634-.624.196 0 .374.01.532.018.44.02.66.046.95.736.364.866 1.25 3.048 1.358 3.27.11.22.22.518.072.818-.14.31-.264.448-.484.7-.22.252-.43.446-.65.718-.202.238-.428.494-.184.968.244.466 1.086 1.79 2.332 2.9 1.602 1.428 2.95 1.87 3.368 2.078.32.16.702.126.958-.144.324-.344.724-.914 1.13-1.476.29-.4.656-.45.998-.306.348.136 2.198 1.036 2.574 1.224.376.19.628.284.72.442.09.158.09.914-.3 2.014z"/>
      </svg>
      <span className="whatsapp-tooltip">Chat with us!</span>
    </a>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.png" alt="Back Alive" className="footer-logo" />
            <p className="footer-tagline">The Home of Dubai Barbers</p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/backalivebarbershop/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@backalivebarbershop?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#locations">Locations</a>
              <a href="#gallery">Gallery</a>
            </div>
            <div className="footer-col">
              <h4>Locations</h4>
              <p>City Walk</p>
              <p>+971 4 568 1417</p>
              <p style={{ marginTop: '1rem' }}>Dubai Marina</p>
              <p>+971 4 342 3688</p>
            </div>
            <div className="footer-col">
              <h4>Hours</h4>
              <p>Monday - Sunday</p>
              <p>10:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Back Alive Barbershop. All rights reserved.</p>
          <a
            href="https://www.fresha.com/providers/back-alive-barbershop-bv8n64z5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary footer-cta"
          >
            Book Now
          </a>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Locations />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
