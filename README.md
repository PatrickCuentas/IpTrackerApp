# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](https://i.imgur.com/oVBSRNN.png)

### Links

- Solution URL: [Add solution URL here]https://github.com/PatrickCuentas/ip-tracker-app/tree/main)
- Live Site URL: [Add live site URL here](https://ip-tracker-app-tau.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html

```

```css
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

hr {
  min-height: 80px;
  max-height: 100%;
  margin: 0;
  border-left: 1px solid rgb(156 163 175 / 0.5);
}
```

```js
;[
  ['IP ADDRESS', ip],
  ['LOCATION', location],
  ['TIMEZONE', timezone],
  ['ISP', isp],
].map(([title, value], index) => {
  return (
    <>
      <li key={index}>
        <span className="font-bold text-[10px] text-[hsl(0,0%,59%)] text-center md:text-left">
          {title}
        </span>
        <p className="font-bold text-lg md:text-2xl">{value}</p>
      </li>
      {width > 768 ? index < 3 ? <hr /> : null : null}
    </>
  )
})
```

### Continued development

- Deep learning in leaflet library and integrate in NextJS in the future with more functionalities

### Useful resources

- Just the DOCS for ipify and leaflet

## Author

- Website - [Patrick Cuentas](https://www.your-site.com) Coming Soon!!
- Frontend Mentor - [@PatrickCuentas](https://www.frontendmentor.io/profile/PatrickCuentas)

## Acknowledgments

Practice Practice Practice 🎄🎄
