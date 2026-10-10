import React from 'react';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50 dark:bg-dark-bg text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
          404 - Page Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          The requested page or resource could not be found. Let's get you back to Ananya's portfolio.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-colors shadow-md shadow-accent/25"
        >
          <Home className="w-4 h-4" /> Return to Homepage
        </a>
      </div>
    </div>
  );
}
