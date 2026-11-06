import React, { createContext, useContext, useState, useEffect } from 'react';

export const presetThemes = [
  {
    id: 'sage',
    name: 'Sage Forest',
    colorDot: '#568b6d',
    bg: '#f7f8f4',
    surface: '#ffffff',
    surfaceSoft: '#eaf0e8',
    dark: '#203a2d',
    text: '#1d2725',
    muted: '#64706a',
    accent: '#568b6d',
    accentLight: '#70ab82',
    border: '#e3e8e0',
    borderStrong: '#cbdccc',
  },
  {
    id: 'ocean',
    name: 'Ocean Navy',
    colorDot: '#2563eb',
    bg: '#f3f7fb',
    surface: '#ffffff',
    surfaceSoft: '#e1ecf8',
    dark: '#172a3a',
    text: '#142230',
    muted: '#566b7e',
    accent: '#2563eb',
    accentLight: '#3b82f6',
    border: '#d8e3ef',
    borderStrong: '#c1d2e2',
  },
  {
    id: 'terracotta',
    name: 'Warm Sand',
    colorDot: '#c2410c',
    bg: '#faf6f0',
    surface: '#ffffff',
    surfaceSoft: '#f5ece1',
    dark: '#3d2616',
    text: '#2b1d14',
    muted: '#7c6a5d',
    accent: '#c2410c',
    accentLight: '#ea580c',
    border: '#ecded3',
    borderStrong: '#dec9b8',
  },
  {
    id: 'amethyst',
    name: 'Purple Dusk',
    colorDot: '#7c3aed',
    bg: '#f8f5fc',
    surface: '#ffffff',
    surfaceSoft: '#eee5f8',
    dark: '#2a1745',
    text: '#221636',
    muted: '#6f5d85',
    accent: '#7c3aed',
    accentLight: '#9333ea',
    border: '#e6daf2',
    borderStrong: '#d4c2e6',
  },
  {
    id: 'rose',
    name: 'Rose Quartz',
    colorDot: '#db2777',
    bg: '#faf4f6',
    surface: '#ffffff',
    surfaceSoft: '#f7e5eb',
    dark: '#3f1323',
    text: '#2d131d',
    muted: '#7a5965',
    accent: '#db2777',
    accentLight: '#ec4899',
    border: '#ebd8df',
    borderStrong: '#dec0cc',
  },
  {
    id: 'slate',
    name: 'Nordic Slate',
    colorDot: '#475569',
    bg: '#f8fafc',
    surface: '#ffffff',
    surfaceSoft: '#f1f5f9',
    dark: '#1e293b',
    text: '#0f172a',
    muted: '#64748b',
    accent: '#334155',
    accentLight: '#475569',
    border: '#e2e8f0',
    borderStrong: '#cbd5e1',
  },
  {
    id: 'midnight',
    name: 'Midnight Dark',
    colorDot: '#10b981',
    bg: '#0f1412',
    surface: '#18221f',
    surfaceSoft: '#212f2b',
    dark: '#080c0a',
    text: '#eef4f0',
    muted: '#9cb0a5',
    accent: '#10b981',
    accentLight: '#34d399',
    border: '#273a33',
    borderStrong: '#344e45',
  },
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    return localStorage.getItem('portfolio-theme-id') || 'sage';
  });
  const [customBgColor, setCustomBgColor] = useState(() => {
    return localStorage.getItem('portfolio-custom-bg') || '';
  });

  const applyCssVariables = (theme) => {
    const root = document.documentElement;
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--surface', theme.surface);
    root.style.setProperty('--surface-soft', theme.surfaceSoft);
    root.style.setProperty('--dark', theme.dark);
    root.style.setProperty('--text', theme.text);
    root.style.setProperty('--muted', theme.muted);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-light', theme.accentLight);
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--border-strong', theme.borderStrong);
  };

  const selectTheme = (themeId) => {
    const found = presetThemes.find((t) => t.id === themeId);
    if (found) {
      setCurrentThemeId(themeId);
      setCustomBgColor('');
      localStorage.setItem('portfolio-theme-id', themeId);
      localStorage.removeItem('portfolio-custom-bg');
      applyCssVariables(found);
    }
  };

  // Helper to adjust hex luminance
  const adjustColor = (hex, percent) => {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;
    return (
      '#' +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  };

  const selectCustomColor = (hex) => {
    if (!hex || !/^#[0-9A-Fa-f]{6}$/.test(hex)) return;
    setCustomBgColor(hex);
    setCurrentThemeId('custom');
    localStorage.setItem('portfolio-theme-id', 'custom');
    localStorage.setItem('portfolio-custom-bg', hex);

    // Calculate perceived brightness
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const isDark = brightness < 128;

    const dynamicTheme = {
      id: 'custom',
      name: 'Custom',
      colorDot: hex,
      bg: hex,
      surface: isDark ? adjustColor(hex, 15) : '#ffffff',
      surfaceSoft: isDark ? adjustColor(hex, 25) : adjustColor(hex, -8),
      dark: isDark ? '#080c0a' : adjustColor(hex, -70),
      text: isDark ? '#f0f5f2' : '#1a221f',
      muted: isDark ? '#98aaa0' : '#5a6861',
      accent: isDark ? '#4ade80' : adjustColor(hex, -45),
      accentLight: isDark ? '#86efac' : adjustColor(hex, -30),
      border: isDark ? adjustColor(hex, 30) : adjustColor(hex, -15),
      borderStrong: isDark ? adjustColor(hex, 45) : adjustColor(hex, -25),
    };

    applyCssVariables(dynamicTheme);
  };

  useEffect(() => {
    if (currentThemeId === 'custom' && customBgColor) {
      selectCustomColor(customBgColor);
    } else {
      const active = presetThemes.find((t) => t.id === currentThemeId) || presetThemes[0];
      applyCssVariables(active);
    }
  }, []);

  const activeTheme =
    currentThemeId === 'custom'
      ? {
          id: 'custom',
          name: 'Custom Color',
          colorDot: customBgColor || '#568b6d',
          bg: customBgColor || '#f7f8f4',
        }
      : presetThemes.find((t) => t.id === currentThemeId) || presetThemes[0];

  return (
    <ThemeContext.Provider
      value={{
        themes: presetThemes,
        currentTheme: activeTheme,
        selectTheme,
        selectCustomColor,
        customBgColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

