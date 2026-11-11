import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Clock,
  Copy,
  Check,
  FileText
} from 'lucide-react';
import { publications } from '../data';
import { Publication } from '../types';

export const Publications: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(publications[0]?.id || null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPubs = publications.filter((pub) => {
    const matchesFilter = filterType === 'all' || pub.type === filterType;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const toggleAbstract = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${pub.authors.join(', ')} (${pub.year}). ${pub.title}. ${pub.journal}${pub.doi ? `. https://doi.org/${pub.doi}` : ''}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-24 bg-offwhite dark:bg-navy-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-navy-800 dark:text-gold-300 bg-navy-100 dark:bg-navy-900 border border-navy-200/80 dark:border-navy-700/80 mb-3 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-gold-500" />
            <span>Scholarly Output & Scientific Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white tracking-tight">
            Academic Research & Peer-Reviewed Publications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Multi-cohort epidemiological investigations published in high-impact international journals alongside Master's thesis investigations into explainable computer vision for oncology screening.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Scholarly Works' },
              { id: 'journal', label: 'Published Journal Articles' },
              { id: 'ongoing', label: 'Ongoing MSc Research' },
              { id: 'manuscript', label: 'Manuscripts in Prep' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filterType === tab.id
                    ? 'bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-semibold shadow-xs'
                    : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-800 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, DOI, or author..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-navy-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-600 dark:focus:ring-gold-500"
            />
          </div>

        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPubs.map((pub) => {
            const isExpanded = expandedId === pub.id;
            const isCopied = copiedId === pub.id;
            return (
              <div
                key={pub.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-navy-700/80 shadow-subtle hover:border-gold-500/40 transition-all duration-300"
              >
                {/* Meta row: Journal, Year, Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-navy-800 dark:text-gold-300 bg-navy-50 dark:bg-navy-800 px-3 py-1 rounded-md border border-navy-200/70 dark:border-navy-700/60">
                      {pub.journal}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Year: {pub.year}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      • {pub.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                    pub.status === 'Published'
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                      : 'bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60'
                  }`}>
                    {pub.status === 'Published' ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    )}
                    <span>{pub.status}</span>
                  </span>
                </div>

                {/* Paper Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950 dark:text-white leading-snug">
                  {pub.title}
                </h3>

                {/* Authors List with Dare Aladeokin bolded */}
                <div className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  <span className="font-mono text-slate-400 mr-1.5 font-semibold">Authors:</span>
                  {pub.authors.map((author, idx) => {
                    const isDare = author.toLowerCase().includes('dare aladeokin');
                    return (
                      <span key={idx}>
                        {isDare ? (
                          <strong className="text-navy-950 dark:text-gold-300 font-bold underline decoration-gold-500 decoration-1 underline-offset-2">
                            {author} (Co-Author)
                          </strong>
                        ) : (
                          <span>{author}</span>
                        )}
                        {idx < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </div>

                {/* DOI & Citation Controls */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-navy-800">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                    {pub.doi && (
                      <span className="text-slate-500 dark:text-slate-400">
                        DOI: <code className="text-navy-700 dark:text-slate-300 font-semibold">{pub.doi}</code>
                      </span>
                    )}
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-navy-600 dark:text-gold-400 hover:underline font-semibold"
                      >
                        <span>View at Publisher</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleCopyCitation(pub)}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-xs font-mono text-slate-600 dark:text-slate-300 transition-colors"
                      title="Copy full citation"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Citation Copied' : 'Copy Citation'}</span>
                    </button>
                    
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-mono text-navy-700 dark:text-gold-400 hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Abstract' : 'Read Abstract'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Expandable Abstract Box */}
                {isExpanded && (
                  <div className="mt-4 p-4 rounded-2xl bg-slate-50/80 dark:bg-navy-900/60 border border-slate-100 dark:border-navy-800 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Study Abstract & Methodology Summary</span>
                    </div>
                    <p className="text-justify sm:text-left">{pub.abstract}</p>
                  </div>
                )}

              </div>
            );
          })}

          {filteredPubs.length === 0 && (
            <div className="text-center py-12 glass-panel rounded-2xl p-8">
              <BookOpen className="w-10 h-10 mx-auto text-slate-400 mb-2" />
              <p className="text-base font-semibold text-slate-700 dark:text-slate-200">
                No publications match your filter.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for a different keyword or resetting filters.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
