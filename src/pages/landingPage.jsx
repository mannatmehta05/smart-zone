import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

const LandingPage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -100]);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is FanFliks?",
            answer: "FanFliks is a student engagement app that rewards you for going to school sports and arts events, taking pics, and showing school spirit."
        },
        {
            question: "How do I earn points?",
            answer: "You earn points by uploading photos and videos from events and unlocking streaks to boost your rewards!"
        },
        {
            question: "What can I redeem points for?",
            answer: "Points can be redeemed for school-branded merch like shirts, sweatpants, shorts, and other gear - all free or discounted, just by showing up and participating."
        },
        {
            question: "Who can use FanFliks?",
            answer: "Currently, it's for high school students at participating schools. If your school isn't involved yet, let us know and we will work to bring this transformative experience to your campus."
        },
        {
            question: "What kind of photos should I upload?",
            answer: "Anything fun and appropriate from the event - action shots, crowd hype, halftime moments, team support, etc. Just keep it respectful and school-friendly."
        },
        {
            question: "How is content moderated?",
            answer: "All uploads are reviewed by your school's admin team or event moderators. Inappropriate or off-topic content may be removed and is subject to disciplinary action by the terms of your administration."
        },
        {
            question: "Can I see other students' posts?",
            answer: "Yes! There's a media feed where you can scroll through pics and videos from schools across your city and like your favorites."
        },
        {
            question: "Does it cost anything to use?",
            answer: "Nope, FanFliks is totally free to use. Just show up, participate, and start racking up points."
        },
        {
            question: "Do I need an account to use the app?",
            answer: "Yes, you'll need to sign up with your school email to track your points and redeem rewards."
        },
        {
            question: "How do I redeem rewards?",
            answer: "Once you've earned enough points, just head to the \"Store\" page and unlock your reward. You'll get instructions on how and when to pick it up at school."
        },
        {
            question: "What if I forget to check in at an event?",
            answer: "No worries, you will still receive points, but remember, marking your attendance boosts engagement for everyone."
        },
        {
            question: "Can I report something inappropriate?",
            answer: "Yep, you can flag any post you think breaks the guidelines, and our team or your school admins will review it."
        }
    ];

    const howItWorksSteps = [
        {
            title: "Capture",
            description: "Show out at events and capture the moments that matter.",
            icon: "📸"
        },
        {
            title: "Upload",
            description: "Post your clips and Fliks to climb the leaderboard.",
            icon: "⬆️"
        },
        {
            title: "Engage",
            description: "Interact and view content from fans and schools across your city.",
            icon: "💬"
        },
        {
            title: "Earn Rewards",
            description: "Rack up points and unlock limited time clothing drops.",
            icon: "🏆"
        },
        {
            title: "Redeem",
            description: "Use your points to claim exclusive merchandise and sportswear.",
            icon: "🎁"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const blobVariants = {
        animate: {
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
            transition: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-x-hidden">
            <Header />
            
            {/* Floating Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    variants={blobVariants}
                    animate="animate"
                />
                <motion.div 
                    className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    variants={blobVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                />
                <motion.div 
                    className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    variants={blobVariants}
                    animate="animate"
                    transition={{ delay: 4 }}
                />
            </div>
            
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div 
                    className="relative z-10 text-center text-white max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div 
                        className="mb-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 
                            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                            variants={itemVariants}
                        >
                            Your Moments<br />
                            <motion.span 
                                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Live Here
                            </motion.span>
                        </motion.h1>
                        <motion.p 
                            className="text-xl sm:text-2xl mb-8 text-gray-300"
                            variants={itemVariants}
                        >
                            To access shady side events and sports
                        </motion.p>
                    </motion.div>
                    
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1 }}
                    >
                        {/* Apple App Store Button */}
                        <motion.button 
                            className="group bg-white/90 backdrop-blur-sm text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/95 transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl border border-white/20"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div 
                                    className="text-3xl"
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                    🍎
                                </motion.div>
                                <div className="text-left">
                                    <div className="text-xs opacity-70">Download on the</div>
                                    <div className="text-sm font-bold">App Store</div>
                                </div>
                            </div>
                        </motion.button>

                        {/* Google Play Store Button */}
                        <motion.button 
                            className="group bg-white/90 backdrop-blur-sm text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/95 transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-xl border border-white/20"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div 
                                    className="text-3xl"
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                    🤖
                                </motion.div>
                                <div className="text-left">
                                    <div className="text-xs opacity-70">GET IT ON</div>
                                    <div className="text-sm font-bold">Google Play</div>
                                </div>
                            </div>
                        </motion.button>
                    </motion.div>
                    
                    {/* Scroll Indicator */}
                    {/* <motion.div 
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <motion.div 
                                className="w-1 h-3 bg-white rounded-full mt-2"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div> */}
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section id="introduction" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Introduction to FanFliks
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Where Every Game is a Story.
                        </p>
                    </motion.div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Every Moment<br />
                                <motion.span 
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    Earns You More.
                                </motion.span>
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                FanFliks is your all-access pass to the most exciting moments in high school sports and arts. 
                                Snap pics, share highlights, and earn points for showing off your school spirit. Connect and 
                                compete with friends, support your school, and unlock exclusive gear throughout the year.
                            </p>
                            <motion.button 
                                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="flex items-center gap-2">
                                    Interact with FanFliks
                                    <motion.svg 
                                        className="w-5 h-5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </motion.svg>
                                </span>
                            </motion.button>
                        </motion.div>
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <motion.div 
                                className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-8 transform shadow-2xl"
                                whileHover={{ rotate: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-xl">
                                    <div className="space-y-4">
                                        {[
                                            { icon: "📱", title: "Capture Moments", desc: "Share your school spirit" },
                                            { icon: "🏆", title: "Earn Points", desc: "Rack up rewards" },
                                            { icon: "🎁", title: "Redeem Rewards", desc: "Get exclusive merch" }
                                        ].map((item, index) => (
                                            <motion.div 
                                                key={index}
                                                className="flex items-center gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300"
                                                whileHover={{ x: 10 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <motion.div 
                                                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                                                    whileHover={{ scale: 1.1, rotate: 12 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <span className="text-2xl">{item.icon}</span>
                                                </motion.div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            How It Works
                        </h2>
                    </motion.div>
                    
                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {howItWorksSteps.map((step, index) => (
                            <motion.div 
                                key={index} 
                                className="group bg-white rounded-2xl p-8 shadow-lg"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div className="text-center">
                                    <motion.div 
                                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                        whileHover={{ scale: 1.1, rotate: 12 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="text-3xl">{step.icon}</span>
                                    </motion.div>
                                    <motion.h3 
                                        className="text-2xl font-bold text-gray-900 mb-4"
                                        whileHover={{ color: "#9333ea" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {step.title}
                                    </motion.h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            FAQs
                        </h2>
                    </motion.div>
                    
                    <motion.div 
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {faqs.map((faq, index) => (
  <motion.div
    key={index}
    className="border border-gray-200 rounded-lg overflow-hidden"
    variants={itemVariants}
    whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
  >
    <motion.button
      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center group"
      onClick={() => toggleFaq(index)}
      whileHover={{ backgroundColor: "#f3f4f6" }}
    >
      <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
        {faq.question}
      </span>
      <motion.span
        className="text-2xl text-gray-600 group-hover:text-purple-600 transition-colors duration-300 inline-block"
        animate={{ rotate: activeFaq === index ? 45 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }} // Slow rotation
      >
        +
      </motion.span>
    </motion.button>

    <AnimatePresence>
      {activeFaq === index && (
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="px-6 py-4 bg-white border-t border-gray-200">
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
))}


                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default LandingPage