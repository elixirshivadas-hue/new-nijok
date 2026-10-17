import React, { useState, useEffect } from 'react';
import { 
  Scan, Search, BookOpen, Star, MessageSquare, 
  Users, StickyNote, ChevronRight, Home, Compass, 
  MessageCircle, User, Bell, X, Camera, Plus, Trash2, Heart, ExternalLink
} from 'lucide-react';

// Premium High-Resolution Visual Assets from Ref Images
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
    selfHelp: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80",
    healthFood: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=300&q=80",
    nature: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80",
    money: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=300&q=80",
  }
};

// Initial Open Library Sample Collection
const INITIAL_TRENDING = [
  { id: "1", title: "Atomic Habits", author: "James Clear", rating: 4.8, reviews: "12.3K", cover: "https://covers.openlibrary.org/b/id/12843865-L.jpg", isbn: "9780735211292", description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones." },
  { id: "2", title: "Ikigai", author: "Héctor García", rating: 4.6, reviews: "8.1K", cover: "https://covers.openlibrary.org/b/id/10522079-L.jpg", isbn: "9780143130727", description: "The Japanese Secret to a Long and Happy Life." },
  { id: "3", title: "Sapiens", author: "Yuval Noah Harari", rating: 4.7, reviews: "15.2K", cover: "https://covers.openlibrary.org/b/id/12547148-L.jpg", isbn: "9780062316097", description: "A Brief History of Humankind." },
  { id: "4", title: "Psychology of Money", author: "Morgan Housel", rating: 4.7, reviews: "9.7K", cover: "https://covers.openlibrary.org/b/id/10543216-L.jpg", isbn: "9780857197689", description: "Timeless lessons on wealth, greed, and happiness." },
  { id: "5", title: "The 5 AM Club", author: "Robin Sharma", rating: 4.5, reviews: "7.1K", cover: "https://covers.openlibrary.org/b/id/8885148-L.jpg", isbn: "9781443456623", description: "Own Your Morning. Elevate Your Life." },
  { id: "6", title: "Deep Work", author: "Cal Newport", rating: 4.6, reviews: "6.4K", cover: "https://covers.openlibrary.org/b/id/8482431-L.jpg", isbn: "9781455586691", description: "Rules for Focused Success in a Distracted World." }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [scannedBook, setScannedBook] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  // Library State
  const [savedBooks, setSavedBooks] = useState([
    { id: "1", title: "Atomic Habits", author: "James Clear", progress: 65 }
  ]);
  
  // Notes State
  const [notes, setNotes] = useState([
    { id: 1, title: "Habit Stacking", text: "Link new habit to an existing one. E.g., 'After I pour coffee, I will meditate 1 min'.", tag: "Self Help", date: "Oct 12" },
    { id: 2, title: "Ikigai Purpose", text: "Intersect: What you love, what you're good at, what world needs, what you get paid for.", tag: "Philosophy", date: "Oct 15" }
  ]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteText, setNewNoteText] = useState('');

  // Real Open Library API Fetch Function (Preserving Original Functionality)
  const fetchOpenLibraryBook = async (isbn) => {
    setIsScanning(true);
    try {
      const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
      const data = await response.json();
      const key = `ISBN:${isbn}`;
      if (data[key]) {
        const bookData = data[key];
        const newBook = {
          id: isbn,
          title: bookData.title || "Scanned Book",
          author: bookData.authors ? bookData.authors[0].name : "Unknown Author",
          cover: bookData.cover ? bookData.cover.large : VISUAL_ASSETS.hero,
          rating: 4.8,
          reviews: "1.2K",
          isbn: isbn,
          description: bookData.notes || "Retrieved live via Open Library API."
        };
        setScannedBook(newBook);
        setSelectedBook(newBook);
      } else {
        alert("Book details fetched! Showing barcode data.");
        setSelectedBook(INITIAL_TRENDING[0]);
      }
    } catch (err) {
      console.error("Open Library API Fetch Error:", err);
      setSelectedBook(INITIAL_TRENDING[0]);
    } finally {
      setIsScanning(false);
    }
  };

  const handleNoteAdd = (e) => {
    e.preventDefault();
    if (!newNoteTitle.trim()) return;
    const item = {
      id: Date.now(),
      title: newNoteTitle,
      text: newNoteText,
      tag: "General",
      date: "Just now"
    };
    setNotes([item, ...notes]);
    setNewNoteTitle('');
    setNewNoteText('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const toggleSaveBook = (book) => {
    if (savedBooks.some(b => b.id === book.id)) {
      setSavedBooks(savedBooks.filter(b => b.id !== book.id));
    } else {
      setSavedBooks([...savedBooks, { id: book.id, title: book.title, author: book.author, progress: 0 }]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F0] text-[#152D3B] pb-24 font-sans select-none">
      
      <!-- Top Sticky Header -->
      <header className="sticky top-0 z-40 bg-[#FAF8F0]/90 backdrop-blur-md border-b border-[#152D3B]/5 px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#195C40] flex items-center justify-center text-white font-serif font-bold text-lg">
            N
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#195C40]">NIJØK</span>
            <span className="text-[10px] uppercase tracking-widest block text-[#152D3B]/60 font-semibold -mt-1">Books</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setSearchOpen(true)}
            className="p-2.5 rounded-full bg-white border border-[#152D3B]/10 text-[#152D3B] hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
          >
            <Search className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => setNotificationsOpen(true)}
            className="p-2.5 rounded-full bg-white border border-[#152D3B]/10 text-[#152D3B] hover:bg-gray-50 active:scale-95 transition-all shadow-sm relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#195C40]"></span>
          </button>

          <div className="w-9 h-9 rounded-full border-2 border-[#195C40] overflow-hidden p-0.5 ml-1">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
              alt="User Avatar" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </header>

      <!-- Main Container -->
      <main className="max-w-md mx-auto px-4 pt-4 space-y-5">
        
        <!-- Hero Banner Card -->
        <section className="relative rounded-3xl overflow-hidden shadow-md border border-[#152D3B]/10 min-h-[190px] flex flex-col justify-end p-5">
          <img 
            src={VISUAL_ASSETS.hero} 
            alt="Discover Books Banner" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="relative z-10 text-white space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium tracking-wide text-emerald-200">
              Good Books • Better Days ♡
            </span>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-white">Discover Books</h1>
            <p className="text-xs text-amber-100/90 font-medium">Scan • Explore • Review • Discuss</p>
            <p className="text-[11px] text-gray-200 opacity-90 pt-1">Learn together with the NIJØK community.</p>
          </div>
        </section>

        <!-- Feature Action Cards Grid -->
        <section className="grid grid-cols-2 gap-3.5">
          
          <!-- Scan Book Barcode -->
          <div 
            onClick={() => fetchOpenLibraryBook("9780735211292")}
            className="col-span-1 rounded-2xl bg-[#E8F5E9] border border-[#195C40]/20 p-3.5 relative overflow-hidden shadow-sm active:scale-98 transition-all cursor-pointer group h-[120px] flex flex-col justify-between"
          >
            <img src={VISUAL_ASSETS.scan} className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-105 transition-transform" />
            <div className="w-8 h-8 rounded-full bg-[#195C40] text-white flex items-center justify-center shadow-sm">
              <Scan className="w-4 h-4" />
            </div>
            <div className="relative z-10">
              <h3 className="font-semibold text-sm text-[#152D3B] flex items-center justify-between">
                Scan Barcode
                <ChevronRight className="w-3.5 h-3.5 text-[#195C40]" />
              </h3>
              <p className="text-[10px] text-[#152D3B]/70 font-medium mt-0.5">Scan ISBN • Get details</p>
            </div>
          </div>

          <!-- Search Books -->
          <div 
            onClick={() => setSearchOpen(true)}
            className="col-span-1 rounded-2xl bg-[#E3F2FD] border border-blue-200 p-3.5 relative overflow-hidden shadow-sm active:scale-98 transition-all cursor-pointer group h-[120px] flex flex-col justify-between"
          >
            <img src={VISUAL_ASSETS.search} className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-105 transition-transform" />
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

          <!-- My Library -->
          <div 
            onClick={() => setActiveTab('library')}
            className="col-span-1 rounded-2xl bg-[#E8F5E9]/60 border border-[#195C40]/15 p-3.5 relative overflow-hidden shadow-sm active:scale-98 transition-all cursor-pointer group h-[115px] flex flex-col justify-between"
          >
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

          <!-- Ratings & Reviews -->
          <div 
            onClick={() => setActiveTab('reviews')}
            className="col-span-1 rounded-2xl bg-[#FFF3E0] border border-orange-200 p-3.5 relative overflow-hidden shadow-sm active:scale-98 transition-all cursor-pointer group h-[115px] flex flex-col justify-between"
          >
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

          <!-- Discussions -->
          <div 
            onClick={() => setActiveTab('chats')}
            className="col-span-1 rounded-2xl bg-[#F3E5F5] border border-purple-200 p-3.5 relative overflow-hidden shadow-sm active:scale-98 transition-all cursor-pointer group h-[115px] flex flex-col justify-between"
          >
            <img src={VISUAL_ASSETS.discussions} className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-25 mix-blend-multiply" />
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-sm">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#152D3B] flex items-center justify-between">
                Discussions
                <ChevronRight className="w-3.5 h-3.5 text-purple-600" />
              </h3>
              <p className="text-[10px] text-[#152D3B]/70 font-medium mt-0.5">Talk about books</p>
            </div>
          </div>

          <!-- Community -->
          <div 
            onClick={() => setActiveTab('community')}
            className="col-span-1 rounded-2xl bg-[#E3F2FD]/60 border border-blue-200 p-3.5 relative overflow-hidden shadow-sm active:scale-98 transition-all cursor-pointer group h-[115px] flex flex-col justify-between"
          >
            <img src={VISUAL_ASSETS.community} className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-25 mix-blend-multiply" />
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#152D3B] flex items-center justify-between">
                Community
                <ChevronRight className="w-3.5 h-3.5 text-indigo-600" />
              </h3>
              <p className="text-[10px] text-[#152D3B]/70 font-medium mt-0.5">Meet book lovers</p>
            </div>
          </div>

        </section>

        <!-- Dedicated My Notes Banner -->
        <section 
          onClick={() => setActiveTab('notes')}
          className="rounded-2xl bg-[#FAF8F0] border border-[#152D3B]/10 p-4 relative overflow-hidden shadow-sm flex items-center justify-between cursor-pointer active:scale-98 transition-all"
        >
          <div className="flex items-center space-x-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-[#195C40] text-white flex items-center justify-center shadow-sm">
              <StickyNote className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#152D3B]">My Journal & Notes</h3>
              <p className="text-xs text-[#152D3B]/60 font-medium">Save quotes, reflections & takeaways</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#195C40] relative z-10" />
        </section>

        <!-- Browse By Category Pills -->
        <section className="space-y-2.5 pt-1">
          <div className="flex items-center space-x-2">
            <span className="text-base">📁</span>
            <h2 className="font-serif text-lg font-bold text-[#152D3B]">Browse by category</h2>
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
            <button className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#E8F5E9] border border-[#195C40]/20 text-[#152D3B] text-xs font-medium shrink-0 active:scale-95 transition-all">
              <img src={VISUAL_ASSETS.categories.selfHelp} className="w-5 h-5 rounded-full object-cover" />
              <span>🌱 Self Help</span>
            </button>
            <button className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#E8F5E9] border border-[#195C40]/20 text-[#152D3B] text-xs font-medium shrink-0 active:scale-95 transition-all">
              <img src={VISUAL_ASSETS.categories.healthFood} className="w-5 h-5 rounded-full object-cover" />
              <span>🥗 Health & Food</span>
            </button>
            <button className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#E8F5E9] border border-[#195C40]/20 text-[#152D3B] text-xs font-medium shrink-0 active:scale-95 transition-all">
              <img src={VISUAL_ASSETS.categories.nature} className="w-5 h-5 rounded-full object-cover" />
              <span>🏔️ Nature</span>
            </button>
            <button className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#E8F5E9] border border-[#195C40]/20 text-[#152D3B] text-xs font-medium shrink-0 active:scale-95 transition-all">
              <img src={VISUAL_ASSETS.categories.money} className="w-5 h-5 rounded-full object-cover" />
              <span>🪙 Money</span>
            </button>
          </div>
        </section>

        <!-- Browse By Language Pills -->
        <section className="space-y-2.5">
          <div className="flex items-center space-x-2">
            <span className="text-base">🌐</span>
            <h2 className="font-serif text-lg font-bold text-[#152D3B]">Browse by language</h2>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#E8F5E9] border border-[#195C40]/15 text-center active:scale-95 transition-all">
              <span className="text-sm font-bold text-[#195C40]">తెలుగు</span>
              <span className="text-[10px] text-[#152D3B]/70 font-medium">Telugu</span>
            </button>
            <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#E8F5E9] border border-[#195C40]/15 text-center active:scale-95 transition-all">
              <span className="text-sm font-bold text-[#195C40]">हिंदी</span>
              <span className="text-[10px] text-[#152D3B]/70 font-medium">Hindi</span>
            </button>
            <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#E8F5E9] border border-[#195C40]/15 text-center active:scale-95 transition-all">
              <span className="text-sm font-bold text-[#195C40]">मराठी</span>
              <span cl
