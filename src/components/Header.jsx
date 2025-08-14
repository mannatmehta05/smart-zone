import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.header 
            className={`fixed top-0 left-0 right-0 z-50 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
                    : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <motion.h1 
                                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                FanFliks
                            </motion.h1>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {[
                            { href: "#introduction", label: "Introduction" },
                            { href: "#how-it-works", label: "How It Works" },
                            { href: "#faqs", label: "FAQs" }
                        ].map((item, index) => (
                            <motion.a 
                                key={index}
                                href={item.href} 
                                className="relative text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {item.label}
                                <motion.span 
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <motion.button 
                            className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: ["0 0 0 rgba(147, 51, 234, 0)", "0 0 20px rgba(147, 51, 234, 0.3)", "0 0 0 rgba(147, 51, 234, 0)"]
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <span className="flex items-center gap-2">
                                Get Started
                                <motion.svg 
                                    className="w-4 h-4" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    whileHover={{ x: 3 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </motion.svg>
                            </span>
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={toggleMenu}
                            className="relative text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600 transition-colors duration-300"
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <motion.span 
                                    className="block w-6 h-0.5 bg-current"
                                    animate={{ 
                                        rotate: isMenuOpen ? 45 : 0,
                                        y: isMenuOpen ? 6 : -2
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span 
                                    className="block w-6 h-0.5 bg-current"
                                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span 
                                    className="block w-6 h-0.5 bg-current"
                                    animate={{ 
                                        rotate: isMenuOpen ? -45 : 0,
                                        y: isMenuOpen ? -6 : 2
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="md:hidden overflow-hidden"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
                                {[
                                    { href: "#introduction", label: "Introduction" },
                                    { href: "#how-it-works", label: "How It Works" },
                                    { href: "#faqs", label: "FAQs" }
                                ].map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        className="group text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-purple-50 rounded-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                        variants={navItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <span className="flex items-center gap-2">
                                            {item.label}
                                            <motion.svg 
                                                className="w-4 h-4" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                                whileHover={{ x: 3 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </motion.svg>
                                        </span>
                                    </motion.a>
                                ))}
                                <motion.div 
                                    className="pt-4"
                                    variants={navItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.3 }}
                                >
                                    <motion.button 
                                        className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            Get Started
                                            <motion.svg 
                                                className="w-5 h-5" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                                whileHover={{ x: 3 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </motion.svg>
                                        </span>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Header
