'use client';

import { motion } from 'framer-motion';
import { IslamicBorder, IslamicSeal } from '../islamic';
import { FiCode, FiShield, FiUsers, FiHeart, FiBook, FiStar } from 'react-icons/fi';

const values = [
    {
        icon: FiHeart,
        title: 'Ikhlas (Sincerity)',
        arabic: 'إخلاص',
        description: 'Writing code with pure intention, seeking Allah\'s pleasure rather than recognition. Every feature is crafted to genuinely benefit users.',
        verse: 'Say, "Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds."'
    },
    {
        icon: FiShield,
        title: 'Amanah (Trust)',
        arabic: 'أمانة',
        description: 'Building secure, reliable systems that protect user data. Taking responsibility for every line of code as a sacred trust.',
        verse: 'Indeed, Allah commands you to render trusts to whom they are due.'
    },
    {
        icon: FiUsers,
        title: 'Ukhuwah (Brotherhood)',
        arabic: 'أخوة',
        description: 'Creating inclusive technology that serves the ummah. Building tools that bring communities together and facilitate good.',
        verse: 'The believers are but brothers, so make settlement between your brothers.'
    },
    {
        icon: FiBook,
        title: 'Ilm (Knowledge)',
        arabic: 'علم',
        description: 'Continuously learning and growing in technical expertise, knowing that seeking knowledge is an act of worship.',
        verse: 'Allah will raise those who have believed among you and those who were given knowledge, by degrees.'
    },
    {
        icon: FiStar,
        title: 'Ihsan (Excellence)',
        arabic: 'إحسان',
        description: 'Striving for perfection in every project, as if seeing Allah in our work. Beautiful code as a form of worship.',
        verse: 'Indeed, Allah is with those who fear Him and those who are doers of good.'
    },
    {
        icon: FiCode,
        title: 'Adl (Justice)',
        arabic: 'عدل',
        description: 'Creating fair, unbiased algorithms and accessible interfaces. Technology that treats all users with equity and respect.',
        verse: 'Indeed, Allah commands you to be just.'
    }
];

export default function Values() {
    return (
        <section id="values" className="folio-section folio-layer z-15 bg-bg-secondary/20">
            <div className="absolute inset-0 girih-dot-bg opacity-10 pointer-events-none" />
            <div className="absolute inset-0 geometric-grid opacity-[0.02] pointer-events-none" />

            <div className="section-container relative z-10">
                {/* Header Folio */}
                <div className="mb-16 md:mb-20 text-center">
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gold-accent font-bold mb-4 block">
                        Chapter I.V — The Foundations
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading mb-4 md:mb-6 italic text-emerald-primary">
                        Islamic <span className="gradient-text">Values</span> in Code
                    </h2>
                    <div className="h-[0.5px] w-20 md:w-24 bg-emerald-primary/10 mx-auto mb-6" />
                    <p className="text-sm md:text-base text-text-secondary italic max-w-2xl mx-auto leading-relaxed px-4">
                        Integrating timeless principles into modern technology — where <span className="text-emerald-primary font-medium">Deen</span> meets <span className="text-gold-accent font-medium">digital innovation</span>.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="relative h-full bg-bg-primary/40 backdrop-blur-sm border border-emerald-primary/10 p-8 rounded-sm deckle-edge deckle-top deckle-bottom hover:border-gold-accent/30 transition-all duration-500">
                                {/* Arabic Title */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="absolute top-4 right-4 text-4xl font-bold text-emerald-primary/5 group-hover:text-emerald-primary/10 transition-opacity"
                                    style={{ fontFamily: 'Times New Roman, serif' }}
                                >
                                    {value.arabic}
                                </motion.div>

                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                    className="w-16 h-16 bg-bg-secondary rounded-lg flex items-center justify-center mb-6 border border-emerald-primary/10 group-hover:border-gold-accent/30 group-hover:scale-110 transition-all duration-500"
                                >
                                    <value.icon className="text-2xl text-emerald-primary group-hover:text-gold-accent transition-colors duration-500" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-heading mb-2 text-emerald-primary group-hover:text-gold-accent transition-colors duration-500">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                                    {value.description}
                                </p>

                                {/* Verse */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                    className="pt-4 border-t border-emerald-primary/5"
                                >
                                    <p className="text-xs text-gold-accent/70 italic leading-relaxed">
                                        "{value.verse}"
                                    </p>
                                </motion.div>

                                {/* Decorative Corner */}
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-primary/10 group-hover:border-gold-accent/30 transition-colors duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Central Seal */}
                <div className="flex flex-col items-center gap-8 py-12">
                    <IslamicBorder variant="ornate" className="w-full max-w-2xl" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <IslamicSeal
                            text="CODE W/ IMAN"
                            subtitle="FAITH & TECH"
                            variant="star"
                            size="lg"
                            className="mx-auto"
                        />
                    </motion.div>
                    <IslamicBorder variant="ornate" className="w-full max-w-2xl" />
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-center max-w-3xl mx-auto mt-12 px-4"
                >
                    <p className="text-lg md:text-xl font-heading italic text-text-secondary leading-relaxed">
                        "Technology without <span className="text-emerald-primary font-medium">guidance</span> can lead astray, but technology <br className="hidden md:block" />
                        rooted in <span className="text-gold-accent font-medium">Islamic principles</span> becomes a means of <span className="text-emerald-primary font-medium">khayr</span> (goodness) for all humanity."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
