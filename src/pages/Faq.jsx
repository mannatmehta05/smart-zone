const Faq = () => {
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24">
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
                            <span className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                                {faq.question}
                            </span>
                            <motion.span
                                className="text-2xl text-gray-600 group-hover:text-indigo-600 transition-colors duration-300 inline-block"
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
}
export default Faq