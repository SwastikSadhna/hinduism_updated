import React from 'react';

const DailyYogaRoutine = () => {
  return (
    <section className="py-12 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8">Daily Yoga Routine</h2>
      <ol className="space-y-6">
        <li className="text-xl">1. Warm-up (5-10 minutes)</li>
        <li className="text-xl">2. Asanas (15-20 minutes)</li>
        <li className="text-xl">3. Relaxation (5 minutes)</li>
      </ol>
      <p className="mt-6 text-lg text-center">Follow this routine for a balanced mind and body.</p>
    </section>
  );
};

export default DailyYogaRoutine;
