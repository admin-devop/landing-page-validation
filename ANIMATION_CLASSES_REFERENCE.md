# Animation Classes Reference

## Quick Reference Guide for All Animation Classes

### Entrance Animations

#### For Headings
```html
<h2 class="animate-heading-in opacity-0">
  Your Heading Here
</h2>
```
- **Duration:** 0.6s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Effect:** Fade in + slide up 20px

#### For Description Text
```html
<p class="animate-text-in opacity-0" style="animation-delay: '0.1s'">
  Your description here
</p>
```
- **Duration:** 0.6s
- **Delay:** 0.1s (staggered from heading)
- **Effect:** Fade in + slide up 20px

#### For Buttons & CTAs
```html
<button class="animate-button-in opacity-0" style="animation-delay: '0.2s'">
  Click Me
</button>
```
- **Duration:** 0.6s
- **Delay:** 0.2s
- **Effect:** Fade in + slide up 20px

### Card Animations

#### Basic Card Entrance
```html
<div class="animate-card-entrance opacity-0" style="animation-delay: '0.1s'">
  <div class="bg-card rounded-2xl p-6">
    <!-- Card content -->
  </div>
</div>
```
- **Duration:** 0.6s
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Effect:** Fade in + slide up 20px

#### Slow Card Entrance (for important cards)
```html
<div class="animate-card-entrance-slow opacity-0">
  <!-- Card content -->
</div>
```
- **Duration:** 0.8s
- **Effect:** Slower, more dramatic entrance

### Hover Effects

#### Large Scale (for primary interactive elements)
```html
<button class="hover-scale-105 motion-safe-transition">
  Hover Me
</button>
```
- **Effect:** Scale to 1.05x on hover
- **Transition Duration:** 300ms
- **Easing:** ease-out

#### Subtle Scale (for cards and secondary elements)
```html
<div class="hover-scale-102 motion-safe-transition">
  Hover me for subtle zoom
</div>
```
- **Effect:** Scale to 1.02x on hover
- **Transition Duration:** 300ms
- **Easing:** ease-out

#### Shadow Elevation
```html
<div class="hover-shadow-lg motion-safe-transition">
  Hover for elevated shadow
</div>
```
- **Effect:** Shadow elevation from `shadow-card` to `shadow-lg`
- **Transition Duration:** 300ms

### Transition Utilities

#### Standard Motion Transition
```html
<div class="motion-safe-transition">
  Element with smooth transitions
</div>
```
- **Default Duration:** 300ms
- **Easing:** ease-out
- **Applies to:** All transitionable properties

#### Longer Duration
```html
<div class="motion-safe-duration-longer">
  Slower transitions
</div>
```
- **Duration:** 500ms

### Stagger Utilities

For staggering animations in lists/grids:

```html
<div class="animate-card-entrance animate-stagger-1 opacity-0">Item 1</div>
<div class="animate-card-entrance animate-stagger-2 opacity-0">Item 2</div>
<div class="animate-card-entrance animate-stagger-3 opacity-0">Item 3</div>
<div class="animate-card-entrance animate-stagger-4 opacity-0">Item 4</div>
<div class="animate-card-entrance animate-stagger-5 opacity-0">Item 5</div>
```

**Stagger Delays:**
- `animate-stagger-1`: 0.05s
- `animate-stagger-2`: 0.1s
- `animate-stagger-3`: 0.15s
- `animate-stagger-4`: 0.2s
- `animate-stagger-5`: 0.25s

### Complete Card Example

```html
<div 
  class="animate-card-entrance opacity-0 group"
  style={{ animationDelay: '0.1s' }}
>
  <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover-shadow-lg motion-safe-transition h-full hover-scale-102">
    <!-- Content -->
    <h3 class="group-hover:text-primary transition-colors duration-300">
      Title
    </h3>
    <p>Description</p>
  </div>
</div>
```

### Complete Button Example

```html
<button class="hover-scale-105 motion-safe-transition">
  Click Me
</button>
```

---

## Animation Timing Breakdown

### Fast Animations (300-500ms)
- Hover effects
- Transitions
- Short interactions

### Medium Animations (600-800ms)
- Card entrance
- Heading introduction
- Section reveals

### Staggered Sequence (0.05-0.25s delays)
- Grid/List items
- Sequential reveals
- Cascading effect

---

## Best Practices

1. **Always use `opacity-0`** with entrance animations
   - Prevents content showing before animation
   - Works with `animation-fill-mode: forwards`

2. **Use `animation-delay` inline** for custom timing
   ```html
   style={{ animationDelay: '0.1s' }}
   ```

3. **Combine with hover classes** for complete interactivity
   ```html
   class="animate-card-entrance opacity-0 hover-scale-102 motion-safe-transition"
   ```

4. **Use `group` class** for parent-triggered child animations
   ```html
   <div class="group">
     <div class="group-hover:text-primary">
       Changes color on parent hover
     </div>
   </div>
   ```

5. **Stagger grid items** for professional cascade effect
   ```html
   {items.map((item, index) => (
     <div
       class="animate-card-entrance opacity-0"
       style={{ animationDelay: `${0.1 + index * 0.08}s` }}
     >
       {item}
     </div>
   ))}
   ```

---

## Easing Reference

**Primary Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`
- Used for all entrance animations
- Creates smooth, natural motion
- Feels premium and polished

**Tailwind Easing:** `ease-out`
- Used for hover/transition effects
- Provides quick response with smooth deceleration

---

## Accessibility

All animations respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: prefer-reduced) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Users who prefer reduced motion will still see the changes but without animation durations.

