import { motion } from 'framer-motion';

const HABITS = [
    {
        id: 1,
        icon: '🧘',
        name: 'Meditate',
        desc: '10 minutes of mindfulness',
        progress: '0 of 1',
        completed: false
    },
    {
        id: 2,
        icon: '🏃',
        name: 'Running',
        desc: '5km morning run',
        progress: '0 of 1',
        completed: false
    },
    {
        id: 3,
        icon: '💧',
        name: 'Hydration',
        desc: 'Drink 2L of water',
        progress: '0 of 1',
        completed: false
    }
];

export function InteractiveMockup() {
    return (
        <div className="relative mx-auto max-w-[320px] sm:max-w-[340px]">
            {/* Device Frame */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 bg-white dark:bg-stone-950 rounded-[2.5rem] shadow-2xl border-[8px] border-stone-200 dark:border-stone-800 overflow-hidden aspect-[9/19] ring-1 ring-stone-900/5 select-none"
            >
                {/* Status Bar Mock */}
                <div className="h-8 w-full flex justify-between items-center px-6 pt-2 select-none">
                    <span className="text-[10px] font-medium text-stone-500">9:41</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 bg-stone-300 rounded-full" />
                        <div className="w-3 h-3 bg-stone-300 rounded-full" />
                    </div>
                </div>

                {/* App Content */}
                <div className="flex flex-col h-full bg-[#fafafa] dark:bg-stone-950 text-stone-900 dark:text-stone-50 relative">

                    {/* Header */}
                    <div className="px-5 py-4 flex items-center justify-between">
                        <h1 className="font-bold text-xl tracking-tight text-stone-800 dark:text-stone-100">
                            Today
                        </h1>
                        <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-600 dark:text-stone-300">
                            AN
                        </div>
                    </div>

                    {/* Calendar Strip */}
                    <div className="px-5 pb-6">
                        <div className="flex justify-between items-center bg-white dark:bg-stone-900 p-2 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800">
                            {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                                <div key={i} className={`flex flex-col items-center justify-center w-8 h-10 rounded-xl text-[10px] font-medium ${i === 2 ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30' : 'text-stone-400'}`}>
                                    <span>{day}</span>
                                    <span className="font-bold">{12 + i}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Habits List */}
                    <div className="px-5 space-y-3 flex-1 overflow-y-auto">
                        <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">My Habits</div>
                        {HABITS.map((habit, i) => (
                            <motion.div
                                key={habit.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                            >
                                <div className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 shadow-sm flex items-center gap-4 hover:border-brand-200 transition-colors cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400 flex items-center justify-center text-lg">
                                        {habit.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-sm text-stone-800 dark:text-stone-100">
                                            {habit.name}
                                        </div>
                                        <div className="text-[10px] text-stone-500 font-medium">
                                            {habit.desc}
                                        </div>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-stone-200 dark:border-stone-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Bar Spacing */}
                    <div className="h-16 w-full absolute bottom-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-stone-950 dark:via-stone-950/80 pointer-events-none" />

                    {/* FAB */}
                    <div className="absolute bottom-6 right-6 z-20">
                        <div className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-xl shadow-brand-500/40 text-2xl font-light">
                            +
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
