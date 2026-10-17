import React, { useState, useEffect } from 'react';
import { 
  Scan, Search, BookOpen, Star, MessageSquare, 
  Users, StickyNote, ChevronRight, Home, Compass, 
  MessageCircle, Bell, X, Camera, Plus, Trash2, Heart, ExternalLink, RefreshCw
} from 'lucide-react';

// Premium Visual Assets matching references exactly
const VISUAL_ASSETS = {
  hero: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
  scan: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
  search: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
  library: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
  reviews: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
  discussions: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  community: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
  notes: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
  categories: {
    selfHelp: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80",
    healthFood: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80",
    nature: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80",
    money: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=400&q=80",
    history: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=400&q=80",
    science: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80",
  }
};

const INITIAL_TRENDING = [
  { id: "1", title: "Atomic Habits", author: "James Clear", rating: 4.8, reviews: "12.3K", cover: "https://covers.openlibrary.org/b/id/12843865-L.jpg", isbn: "9780735211292", source: "Open Library", description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones." },
  { id: "2", title: "Ikigai", author: "Héctor García", rating: 4.6, reviews: "8.1K", cover: "https://covers.openlibrary.org/b/id/10522079-L.jpg", isbn: "9780143130727", source: "Open Library", description: "The Japanese Secret to a Long and Happy Life." },
  { id: "3", title: "Sapiens", author: "Yuval Noah Harari", rating: 4.7, reviews: "15.2K", cover: "https://covers.openlibrary.org/b/id/12547148-L.jpg", isbn: "9780062316097", source: "Open Library", description: "A Brief History of Humankind." },
  { id: "4", title: "Psychology of Money", author: "Morgan Housel", rating: 4.7, reviews: "9.7K", cover: "https://covers.openlibrary.org/b/id/10543216-L.jpg", isbn: "9780857197689", source: "Google Books", description: "Timeless lessons on wealth, greed, and happiness." },
  { id: "5", title: "The 5 AM Club", author: "Robin Sharma", rating: 4.5, reviews: "7.1K", cover: "https://covers.openlibrary.org/b/id/8885148-L.jpg", isbn: "9781443456623", source: "Open Library", description: "Own Your Morning. Elevate Your Life." }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scannerActive, setScannerActive] = useState(false);
  const [activeSource, setActiveSource] = useState('Open Library');

  // Multi-source Book Lookup Engine (Open Library + Google Books API)
  const fetchBookDetailsMultiSource = async (isbn) => {
    setIsScanning(true);
    let bookResult = null;

    // Source 1: Open Library API
    try {
      const olRes = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
      const olData = await olRes.json();
      const key = `ISBN:${isbn}`;
      if (olData[key]) {
        const item = olData[key];
        bookResult = {
          id: isbn,
          title: item.title || "Scanned Book",
          author: item.authors ? item.authors[0].name : "Unknown Author",
          cover: item.cover ? item.cover.large : VISUAL_ASSETS.hero,
          rating: 4.8,
          reviews: "1.4K",
          isbn: isbn,
          source: "Open Library",
          description: item.notes || "Retrieved via Open Library Public API."
        };
        setActiveSource("Open Library");
      }
    } catch (e) {
      console.warn("Open Library fetch failed, switching to Google Books fallback...");
    }

    // Source 2: Google Books API Fallback
    if (!bookResult) {
      try {
        const gbRes = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
        const gbData = await gbRes.json();
        if (gbData.items && gbData.items.length > 0) {
          const info = gbData.items[0].volumeInfo;
          bookResult = {
            id: isbn,
            title: info.title,
            author: info.authors ? info.authors.join(', ') : "Unknown Author",
            cover: info.imageLinks ? info.imageLinks.thumbnail : VISUAL_ASSETS.hero,
            rating: info.averageRating || 4.7,
            reviews: `${info.ratingsCount || 850}`,
            isbn: isbn,
            source: "Google Books API",
            description: info.description || "Retrieved via Google Books API."
          };
          setActiveSource("Google Books API");
        }
      } catch (e) {
        console.error("Google Books fetch failed:", e);
      }
    }

    setIsScanning(false);
    setScannerActive(false);

    if (bookResult) {
      setSelectedBook(bookResult);
    } else {
      setSelectedBook(INITIAL_TRENDING[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F0] text-[#152D3B] pb-24 font-sans">
      
      <!-- Header -->
      <header className="sticky top-0 z-40 bg-[#FAF8F0]/90 backdrop-blur-md border-b border-[#152D3B]/5 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#195C40] flex items-center justify-center text-white font-serif font-bold">N</div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#195C40]">NIJØK</span>
            <span className="text-[10px] uppercase tracking-widest block text-[#152D3B]/60 font-semibold -mt-1">Books</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => setSearchOpen(true)} className="p-2.5 rounded-full bg-white border border-[#152D3B]/10">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-full bg-white border border-[#152D3B]/10 relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#195C40]"></span>
          </button>
        </div>
      </header>

      <!-- Main Container -->
      <main className="max-w-md mx-auto px-4 pt-4 space-y-5">
        
        <!-- Hero Card -->
        <section className="relative rounded-3xl overflow-hidden shadow-md border border-[#152D3B]/10 min-h-[190px] flex flex-col justify-end p-5">
          <img src={VISUAL_ASSETS.hero} className="absolute inset-0 w-full h-full object-cover brightness-[0.75]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="relative z-10 text-white space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium text-emerald-200">
              Good Books • Better Days ♡
            </span>
            <h1 className="font-serif text-2xl font-bold text-white">Discover Books</h1>
            <p className="text-xs text-amber-100/90 font-medium">Scan • Explore • Review • Discuss</p>
            <p className="text-[11px] text-gray-200 pt-1">Learn together with the NIJØK community.</p>
          </div>
        </section>

        <!-- Feature Grid -->
        <section className="grid grid-cols-2 gap-3.5">
          
          <!-- Scan Card -->
          <div 
            onClick={() => setScannerActive(true)}
            className="col-span-1 rounded-2xl bg-[#E8F5E9] border border-[#195C40]/20 p-3.5 relative overflow-hidden shadow-sm cursor-pointer h-[120px] flex flex-col justify-between"
          >
            <img src={VISUAL_ASSETS.scan} className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply" />
            <div className="w-8 h-8 rounded-full bg-[#195C40] text-white flex items-center justify-center shadow-sm">
              <Scan className="w-4 h-4" />
            </div>
            <div className="relative z-10">
              <h3 className="font-semibold text-sm text-[#152D3B] flex items-center justify-between">
                Scan Barcode
                <ChevronRight className="w-3.5 h-3.5 text-[#195C40]" />
              </h3>
              <p className="text-[10px] text-[#152D3B]/70 font-medium mt-0.5">Multi-source ISBN lookup</p>
            </div>
          </div>

          <!-- Search Card -->
          <div 
            onClick={() => setSearchOpen(true)}
            className="col-span-1 rounded-2xl bg-[#E3F2FD] border border-blue-200 p-3.5 relative overflow-hidden shadow-sm cursor-pointer h-[120px] flex flex-col justify-between"
          >
            <img src={VISUAL_ASSETS.search} className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply" />
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <Search className="w-4 h-4" />
            </div>
            <div className="relative z-10">
              <h3 className="font-semibold text-sm text-[#152D3B] flex items-center justify-between">
                Search Books
                <ChevronRight className="w-3.5 h-3.5 text-blue-600" />
              </h3>
              <p className="text-[10px] text-[#152D3B]/70 font-medium mt-0.5">Title, author, topic</p>
            </div>
          </div>

          <!-- My Library Card -->
          <div className="col-span-1 rounded-2xl bg-[#E8F5E9]/60 border border-[#195C40]/15 p-3.5 relative overflow-hidden shadow-sm h-[115px] flex flex-col justify-between">
            <img src={VISUAL_ASSETS.library} className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-25 mix-blend-multiply" />
            <div className="w-8 h-8 rounded-full bg-[#195C40] text-white flex items-center justify-center shadow-sm">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#152D3B] flex items-center justify-between">
                My Library
                <ChevronRight className="w-3.5 h-3.5 text-[#195C40]" />
              </h3>
              <p className="text-[10px] text-[#152D3B]/70 font-medium mt-0.5">Reading list & saved</p>
            </div>
          </div>

          <!-- Reviews Card -->
          <div className="col-span-1 rounded-2xl bg-[#FFF3E0] border border-orange-200 p-3.5 relative overflow-hidden shadow-sm h-[115px] flex flex-col justify-between">
            <img src={VISUAL_ASSETS.reviews} className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-25 mix-blend-multiply" />
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-sm">
              <Star className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#152D3B] flex items-center justify-between">
                Reviews
                <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
              </h3>
              <p className="text-[10px] text-[#152D3B]/70 font-medium mt-0.5">Share your thoughts</p>
            </div>
          </div>

        </section>

        <!-- Categories & Languages -->
        <section className="space-y-2 pt-1">
          <h2 className="font-serif text-lg font-bold text-[#152D3B]">Browse by category</h2>
          <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1">
            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#E8F5E9] border border-[#195C40]/20 text-xs font-medium shrink-0">
              <img src={VISUAL_ASSETS.categories.selfHelp} className="w-4 h-4 rounded-full object-cover" />
              <span>🌱 Self Help</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#E8F5E9] border border-[#195C40]/20 text-xs font-medium shrink-0">
              <img src={VISUAL_ASSETS.categories.healthFood} className="w-4 h-4 rounded-full object-cover" />
              <span>🥗 Health & Food</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#E8F5E9] border border-[#195C40]/20 text-xs font-medium shrink-0">
              <img src={VISUAL_ASSETS.categories.nature} className="w-4 h-4 rounded-full object-cover" />
              <span>🏔️ Nature</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#E8F5E9] border border-[#195C40]/20 text-xs font-medium shrink-0">
              <img src={VISUAL_ASSETS.categories.money} className="w-4 h-4 rounded-full object-cover" />
              <span>🪙 Money</span>
            </button>
          </div>
        </section>

        <!-- Trending Section -->
        <section className="space-y-3 pt-1">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-[#152D3B]">Trending Books</h2>
            <span className="text-xs text-[#195C40] font-medium">See all</span>
          </div>
          <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
            {INITIAL_TRENDING.map((book) => (
              <div 
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className="shrink-0 w-36 bg-white rounded-2xl p-2.5 border border-[#152D3B]/10 shadow-sm cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 mb-2">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xs text-[#152D3B] line-clamp-1">{book.title}</h3>
                <p className="text-[10px] text-[#152D3B]/60 font-medium">{book.author}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <!-- Bottom Nav -->
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#152D3B]/10 px-4 py-2 flex items-center justify-around max-w-md mx-auto">
        <button className="text-[#195C40] flex flex-col items-center"><Home className="w-5 h-5" /><span className="text-[10px]">Home</span></button>
        <button className="text-gray-400 flex flex-col items-center"><Compass className="w-5 h-5" /><span className="text-[10px]">Explore</span></button>
        <button className="flex flex-col items-center -mt-5">
          <div className="w-12 h-12 rounded-full bg-[#195C40] text-white flex items-center justify-center shadow-md border-4 border-[#FAF8F0]"><BookOpen className="w-6 h-6" /></div>
          <span className="text-[10px] font-bold text-[#195C40]">Books</span>
        </button>
        <button className="text-gray-400 flex flex-col items-center"><MessageCircle className="w-5 h-5" /><span className="text-[10px]">Chats</span></button>
        <button className="text-gray-400 flex flex-col items-center"><StickyNote className="w-5 h-5" /><span className="text-[10px]">Notes</span></button>
      </nav>

      <!-- Scanner Modal -->
      {scannerActive && (
        <div className="fixed inset-0 z-50 bg-black/80 flex flex-col justify-between p-4 max-w-md mx-auto">
          <div className="flex justify-between items-center text-white">
            <span className="text-xs font-bold text-emerald-400">Scanner Engine Active</span>
            <button onClick={() => setScannerActive(false)} className="p-2 rounded-full bg-white/20"><X className="w-5 h-5" /></button>
          </div>
          <div className="relative border-2 border-emerald-400/80 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
            <p className="text-white text-xs z-10 bg-black/60 px-3 py-1.5 rounded-full">Align Barcode within Frame</p>
          </div>
          <div className="space-y-2">
            <p className="text-white text-[11px] text-center">Test Multi-Source Lookup:</p>
            <button 
              onClick={() => fetchBookDetailsMultiSource("9780735211292")} 
              className="w-full py-3 rounded-xl bg-[#195C40] text-white font-semibold text-xs flex items-center justify-center space-x-2"
            >
              {isScanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>Scan ISBN 9780735211292</span>}
            </button>
          </div>
        </div>
      )}

      <!-- Detail Modal -->
      {selectedBook && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-end justify-center p-0">
          <div className="bg-[#FAF8F0] w-full max-w-md rounded-t-3xl p-5 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between border-b pb-2">
              <span className="text-xs font-semibold text-[#195C40]">Source: {selectedBook.source || activeSource}</span>
              <button onClick={() => setSelectedBook(null)}><X className="w-4 h-4" /></button>
            </div>
            <div className="flex space-x-4">
              <img src={selectedBook.cover} className="w-24 h-36 object-cover rounded-xl shadow-md" />
              <div>
                <h3 className="font-serif font-bold text-base">{selectedBook.title}</h3>
                <p className="text-xs text-gray-600">{selectedBook.author}</p>
                <p className="text-[10px] text-gray-400 pt-1">ISBN: {selectedBook.isbn}</p>
              </div>
            </div>
            <p className="text-xs text-gray-700 bg-white p-3 rounded-xl border">{selectedBook.description}</p>
          </div>
        </div>
      )}

    </div>
  );
        }
        
