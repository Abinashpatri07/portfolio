import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Pipette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemePicker({ isMobile = false }) {
  const { themes, currentTheme, selectTheme, selectCustomColor, customBgColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleCustomColorChange = (e) => {
    selectCustomColor(e.target.value);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] hover:shadow-sm transition-all duration-200 text-xs font-semibold ${
          isMobile ? 'w-full justify-between py-2.5 px-4' : ''
        }`}
        aria-label="Choose background color theme"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <Palette size={15} className="text-[var(--accent)]" />
          <span>Color Theme</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-inner shrink-0"
            style={{ backgroundColor: currentTheme.colorDot || currentTheme.bg }}
          />
          <span className="text-[10px] text-[var(--muted)] capitalize hidden sm:inline">
            {currentTheme.name}
          </span>
        </div>
      </button>

      {/* Popover / Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute z-50 mt-2 p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[0_12px_40px_rgba(0,0,0,0.14)] backdrop-blur-lg animate-in fade-in zoom-in-95 duration-150 ${
            isMobile
              ? 'left-0 right-0 w-full'
              : 'right-0 w-[270px]'
          }`}
        >
          <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] mb-2.5 px-1">
            Choose Background Theme
          </div>

          {/* Preset Swatches List */}
          <div className="grid grid-cols-1 gap-1.5 max-h-60 overflow-y-auto pr-1">
            {themes.map((theme) => {
              const isActive = currentTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    selectTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[var(--surface-soft)] text-[var(--dark)] font-bold shadow-sm'
                      : 'hover:bg-[var(--surface-soft)]/60 text-[var(--text)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Visual Preview Swatch */}
                    <div
                      className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center shadow-inner"
                      style={{ backgroundColor: theme.bg }}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: theme.colorDot }}
                      />
                    </div>
                    <span>{theme.name}</span>
                  </div>

                  {isActive && (
                    <Check size={14} className="text-[var(--accent)] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-2.5 border-t border-[var(--border)]" />

          {/* Custom Color Input */}
          <div className="px-1 pt-0.5">
            <div className="flex items-center justify-between text-xs text-[var(--text)] font-semibold mb-1.5">
              <span className="flex items-center gap-1.5">
                <Pipette size={13} className="text-[var(--accent)]" />
                Custom Color
              </span>
              <span className="text-[10px] font-mono text-[var(--muted)] uppercase">
                {customBgColor || currentTheme.bg}
              </span>
            </div>

            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)]/50 hover:border-[var(--accent)] cursor-pointer transition-colors">
              <input
                type="color"
                value={customBgColor || (currentTheme.bg.startsWith('#') ? currentTheme.bg : '#f7f8f4')}
                onChange={handleCustomColorChange}
                className="w-7 h-7 rounded-lg border-0 p-0 cursor-pointer bg-transparent"
              />
              <span className="text-[11px] text-[var(--muted)] font-normal">
                Click color box to pick any background
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

