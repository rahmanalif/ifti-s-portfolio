# 🎨 Apple-Style Animation Guide with Lenis

## ✅ Installed & Configured
- Lenis smooth scroll library
- SmoothScrollProvider wrapper in layout
- Lenis CSS utilities in globals.css

## 🎯 Animation Principles (Apple-like)

### 1. **Subtle Movement**
- Small translations: 12-24px (not 40-50px)
- Gentle scales: 0.98-1.02 (not 0.9-1.1)
- Hover lifts: 4-8px (not 10-20px)

### 2. **Timing**
- Quick entrances: 0.5-0.6s (not 0.8-1s)
- Short delays: 0.05-0.15s stagger (not 0.2-0.3s)
- Instant hovers: 0.2-0.3s (not 0.5s+)

### 3. **Easing**
- Primary: `[0.25, 0.1, 0.25, 1]` - Apple's default
- Alternative: `[0.4, 0, 0.2, 1]` - Material smooth
- Avoid: `[0.16, 1, 0.3, 1]` - Too bouncy

### 4. **Effects to Avoid**
- ❌ Blur filters on scroll (heavy performance)
- ❌ Large scale changes (looks cheap)
- ❌ Multiple simultaneous effects
- ❌ Long durations (feels sluggish)

## 📝 Updated Components

### ✅ Hero Section
- Heading: 16px fade-up, 0.6s
- Cards: 24px fade-up, rotate preserved
- Hover: 4px lift, 1.02 scale, instant rotate

### Recommended Updates for Other Sections:

```javascript
// For headings
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}

// For cards
initial={{ opacity: 0, scale: 0.98 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}

// For list items
initial={{ opacity: 0, x: -12 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5, delay: index * 0.05 }}
```

## 🎭 Lenis Smooth Scroll Benefits
- Native momentum scrolling feel
- 60fps smooth animations
- Pairs perfectly with scroll-triggered animations
- Auto-handles scroll-jacking prevention

## 🔧 Usage Tips
1. Keep animations under 0.6s
2. Use subtle movements (< 20px)
3. Stagger by 0.05-0.1s max
4. Remove blur filters
5. Test on actual devices (not just dev tools)
