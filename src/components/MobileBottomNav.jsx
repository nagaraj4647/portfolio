import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Layers, Cpu, LayoutGrid, Send } from 'lucide-react';
import './MobileBottomNav.css';

const navIcons = {
  home: <Home size={22} />,
  about: <User size={22} />,
  techstack: <Layers size={22} />,
  skills: <Cpu size={22} />,
  projects: <LayoutGrid size={22} />,
  contact: <Send size={22} />
};

export default function MobileBottomNav({ activeSection, navLinks }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // If href is '/', sectionId will be 'home' (from activeSection map), but we'll use activeSection instead of slicing href
    const index = navLinks.findIndex(link => 
      (link.href === '/' && activeSection === 'home') || 
      (link.href.slice(1) === activeSection)
    );
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [activeSection, navLinks]);

  return (
    <div className="mobile-bottom-nav">
      <ul>
        {navLinks.map((link, index) => {
          const isActive = activeIndex === index;
          const sectionId = link.href === '/' ? 'home' : link.href.slice(1);
          return (
            <li 
              key={link.href} 
              className={`list ${isActive ? 'active' : ''}`}
            >
              <Link to={link.href}>
                <span className="icon">
                  {navIcons[sectionId] || <Home size={22} />}
                </span>
                <span className="text">{link.label}</span>
              </Link>
            </li>
          );
        })}
        <div 
          className="indicator" 
          style={{ transform: `translateX(calc(${activeIndex} * 100%))` }}
        ></div>
      </ul>
    </div>
  );
}
