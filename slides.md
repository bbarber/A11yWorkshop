---
theme: default
background: https://cover.sli.dev
title: Web Accessibility (A11y) 101
info: |
  ## Web Accessibility 101
  Making the Web Work for Everyone
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Web Accessibility (A11y) 101

Making the Web Work for Everyone

<div class="pt-12">
  <span class="px-2 py-1">
    A Developer's Guide to Inclusive Web Development
  </span>
</div>

<!--
Welcome everyone! Today we're going to talk about web accessibility, why it matters, and how to build more inclusive web applications.
-->

---
layout: center
class: text-center
---

# About Us

<div class="flex justify-center gap-16 items-start">
  <div class="flex flex-col items-center">
    <img src="https://avatars.githubusercontent.com/u/613184?v=4" class="rounded-full w-40 h-40 mb-4 object-cover" alt="Branden Barber" />
    <h2 class="text-xl font-bold">Branden Barber</h2>
    <p class="text-sm mt-1">Senior Software Engineer</p>
  </div>
  <div class="flex flex-col items-center">
    <img src="https://dontpaniclabs.com/wp-content/uploads/2023/07/cmichel.webp" class="rounded-full w-40 h-40 mb-4 object-cover" alt="Chad Michel" />
    <h2 class="text-xl font-bold">Chad Michel</h2>
    <p class="text-sm mt-1">Chief Technology Officer</p>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center">
  <img src="https://dontpaniclabs.com/wp-content/uploads/2023/06/DPL-full-color-2-o.svg" class="w-96 mb-8" alt="Don't Panic Labs" />
  <p class="text-xl max-w-2xl">
    Since 2010, partnering with organizations to engineer software products and grow development teams
  </p>
</div>

---
layout: default
---

# What is A11y?

<v-clicks>

- **A11y** = Accessibility (a + 11 letters + y)
- Making web content usable by everyone, regardless of ability
- About **15% of the global population** has some form of disability
- Required by law in many countries


</v-clicks>


<!--
Accessibility is often abbreviated as A11y. It's about making sure everyone can use your website or app, including people with visual, auditory, motor, or cognitive disabilities. But it also helps everyone else too.
-->

---
layout: default
---

# WCAG 2.1 AA Standards

**Web Content Accessibility Guidelines (WCAG)**

- Three conformance levels: **A** (minimum), **AA** (standard), **AAA** (enhanced)
- **AA is the legal requirement** in most jurisdictions

<!--
WCAG is the international standard. AA level is what most laws require. The POUR principles are the foundation of all accessibility work.
-->

---
layout: default
---

# A11y Maturity Levels

Where does your project stand?

<div class="mt-8 space-y-4">

<div>
<h3 class="text-red-600 font-bold text-xl">None</h3>
<p>No accessibility considerations</p>
</div>

<div>
<h3 class="text-yellow-600 font-bold text-xl">Good</h3>
<p>Basic coding best practices - Semantic HTML, form labels, alt text on images</p>
</div>

<div>
<h3 class="text-blue-600 font-bold text-xl">Better</h3>
<p>Using scanning tools - Lighthouse audits, axe DevTools, manual testing</p>
</div>

<div>
<h3 class="text-green-600 font-bold text-xl">Best</h3>
<p>Fully automated testing - CI/CD integration, axe-core in tests, prevents regressions</p>
</div>

</div>

<!--
Start where you are. Even moving from None to Good makes a huge difference. Better adds tooling to catch issues during development. Best prevents accessibility bugs from reaching production.
-->

---
layout: center
class: text-center
---

# Common A11y Issues

---
layout: two-cols
---

# Issue #1: Form Labels

Every form input needs a label for screen readers

::right::

<div class="pl-4">

**Bad:**
```html
<input type="text" placeholder="Enter name" />
```

**Good:**
```html
<label for="name">Name:</label>
<input
  id="name"
  type="text"
  placeholder="Enter name"
/>
```

**Also Good:**
```html
<label>
  Name:
  <input type="text" />
</label>
```

</div>

<!--
Unlabeled inputs are invisible to screen readers. Always associate labels with inputs using for/id or wrapping. Placeholders are NOT labels.
-->

---
layout: two-cols
---

# Issue #2: Missing Alt Text

Images need alternative text for screen readers

::right::

<div class="pl-4">

**Meaningful Images:**
```html
<img
  src="chart.png"
  alt="Sales increased 45% in Q4"
/>
```

**Decorative Images:**
```html
<img
  src="divider.png"
  alt=""
/>
```

**Icon Buttons:**
```html
<button aria-label="Close dialog">
  <img src="close-icon.svg" alt="" />
</button>
```

</div>

<!--
Alt text should convey the purpose or content of the image. Decorative images should have empty alt. For functional images like icon buttons, use aria-label on the button itself.
-->

---
layout: two-cols
---

# Issue #3: Heading Hierarchy

Don't skip heading levels - it breaks navigation

::right::

<div class="pl-4">

**Bad:**
```html
<h1>Page Title</h1>
<h3>Section Title</h3>
<h5>Subsection</h5>
```

**Good:**
```html
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
```

<div class="mt-4 p-3 bg-yellow-100 rounded text-sm">
Screen reader users navigate by headings. Skipping levels is like jumping from Chapter 1 to Chapter 5.
</div>

</div>

<!--
Headings create an outline of your page. Screen reader users jump between headings to navigate. Don't use headings for styling - use CSS instead.
-->

---
layout: two-cols
---

# Issue #4: Color Contrast

WCAG AA requires sufficient contrast ratios

::right::

<div class="pl-4">

**Requirements:**
- Normal text: **4.5:1** minimum
- Large text (18pt+): **3:1** minimum

**Failing Examples:**
```tsx
// Contrast ratio: 2.93:1 - FAILS
<p className="text-yellow-600">
  Rating: 4.7/5
</p>

// Contrast ratio: 3.29:1 - FAILS
<p className="text-green-600">
  In Stock
</p>
```

**Fixed:**
```tsx
// Use darker shades
<p className="text-yellow-700">Rating: 4.7/5</p>
<p className="text-green-700">In Stock</p>
```

</div>

<!--
Low contrast is one of the most common accessibility issues. Use tools like WebAIM's contrast checker to verify your color choices.
-->

---
layout: two-cols
---

# Issue #5: Keyboard Navigation

Everything must work without a mouse

::right::

<div class="pl-4">

**Bad:**
```tsx
<div onClick={handleClick}>
  Click me
</div>
```

**Good:**
```tsx
<button onClick={handleClick}>
  Click me
</button>
```

**Key Points:**
- Use semantic HTML elements
- Ensure visible focus indicators
- Logical tab order

</div>

<!--
Many users navigate entirely with keyboards. Use proper buttons, links, and form controls. Never remove focus indicators without providing better alternatives.
-->

---
layout: two-cols
---

# Issue #6: ARIA When Needed

First rule of ARIA: Don't use ARIA

::right::

<div class="pl-4">

**Use Semantic HTML First:**
```html
<!-- Instead of this: -->
<div role="button" tabindex="0">
  Click
</div>

<!-- Do this: -->
<button>Click</button>
```

**When ARIA is Actually Needed:**
```tsx
// Icon-only buttons
<button aria-label="Close modal">
  <X />
</button>
```

</div>

<!--
Native HTML elements have built-in accessibility. Only use ARIA when semantic HTML isn't enough. Most developers use too much ARIA when they should use better HTML.
-->

---
layout: default
---

# Testing Tools Overview

Multiple tools to catch accessibility issues

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="p-4 border-2 border-blue-400 rounded-lg">

### Lighthouse
- Built into Chrome DevTools
- Scores from 0-100
- Automated checks + manual checklist
- Great for initial audits

</div>

<div class="p-4 border-2 border-green-400 rounded-lg">

### WAVE
- Browser extension
- Visual feedback on page
- Shows errors inline
- Good for quick checks

</div>

<div class="p-4 border-2 border-purple-400 rounded-lg">

### axe DevTools
- Browser extension
- Most comprehensive
- Detailed issue descriptions
- Best for development

</div>

</div>

<!--
Each tool has strengths. Lighthouse for quick scores, WAVE for visual feedback, axe for detailed debugging. Use multiple tools for best coverage.
-->

---
layout: default
---

# Screen Reader Testing

Essential for validating real user experience

<div class="mt-8 space-y-6">

**Windows:** NVDA (free) or JAWS (paid)

**macOS:** VoiceOver (built-in, `Cmd + F5` to toggle)

</div>

<div class="mt-12">

**Key Things to Test:**
- Can you navigate without seeing the screen?
- Are labels and buttons clear?
- Does the heading structure make sense?

</div>

<!--
Automated tools catch only 30-40% of issues. Screen reader testing is crucial for understanding real user experience. Start with VoiceOver on Mac or NVDA on Windows - both are free.
-->

---
layout: two-cols
---

# Visually Hidden Content

Hide content visually while keeping it accessible to screen readers

::right::

<div class="mt-8">

**Common Use Cases:**
- Adding context to icon buttons
- Skip navigation links
- Additional form instructions
- Status messages for dynamic content
- Color-only information (e.g., "Error:" before red text)

</div>

<!--
Visually hidden content is essential for providing context to screen reader users without cluttering the visual design. Never use display:none or visibility:hidden for this - they hide content from everyone including screen readers.
-->

---
layout: two-cols
---

# Testing with axe-core

Automate accessibility testing in your CI/CD

**Considerations:**

- **Mock APIs** - Remove backend dependencies by mocking api responses
- **Authentication** - Create mock user to bypass login flows. Differs based on auth provider


::right::

<div class="pl-4">

**Playwright + axe-core:**
```ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have a11y violations',
  async ({ page }) => {

  await page.goto('/');

  const results = await new AxeBuilder({ page })
    .analyze();

  expect(results.violations).toEqual([]);
});
```


</div>

<!--
This is from the workshop repo. Automated testing catches common issues but can't replace human testing. Run these tests in your CI pipeline.
-->

---
layout: default
---

# Quick Wins Checklist

Easy fixes you can implement today

<v-clicks>

- Run **Lighthouse** or **axe DevTools** on your pages
- Add **labels** to all form inputs
- Add **alt text** to images
- Fix **color contrast** issues (use WebAIM contrast checker)
- Test **keyboard navigation** (try navigating with Tab only)
- Use **semantic HTML** (button, nav, main, article, etc.)
- Check **heading hierarchy** (h1 → h2 → h3, no skipping)
- Add **focus indicators** to interactive elements
- Test with **screen readers** (NVDA on Windows, VoiceOver on Mac)

</v-clicks>

<!--
Don't try to fix everything at once. Pick one or two items and tackle them systematically. Small improvements add up quickly.
-->

---
layout: default
---

# Repo / Slides

- **GitHub:** [bbarber/A11yWorkshop](https://github.com/bbarber/A11yWorkshop)

<!--
These resources will help you continue learning. The WebAIM site is particularly good for practical guidance.
-->

---
layout: center
class: text-center
---
# Demo
