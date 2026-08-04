const fs = require('fs');
let css = `
.book {
    --color: #0b1c3f;
    --duration: 6.8s;
    width: 32px;
    height: 12px;
    position: relative;
    margin: 32px 0 0 0;
    zoom: 1.5;
}
.book .inner {
    width: 32px;
    height: 12px;
    position: relative;
    transform-origin: 2px 2px;
    transform: rotateZ(-90deg);
    animation: book var(--duration) ease infinite;
}
.book .inner .left,
.book .inner .right {
    width: 60px;
    height: 4px;
    top: 0;
    border-radius: 2px;
    background: var(--color);
    position: absolute;
}
.book .inner .left:before,
.book .inner .right:before {
    content: '';
    width: 48px;
    height: 4px;
    border-radius: 2px;
    background: inherit;
    position: absolute;
    top: -10px;
    left: 6px;
}
.book .inner .left {
    right: 28px;
    transform-origin: 58px 2px;
    transform: rotateZ(90deg);
    animation: left var(--duration) ease infinite;
}
.book .inner .right {
    left: 28px;
    transform-origin: 2px 2px;
    transform: rotateZ(-90deg);
    animation: right var(--duration) ease infinite;
}
.book .inner .middle {
    width: 32px;
    height: 12px;
    border: 4px solid var(--color);
    border-top: 0;
    border-radius: 0 0 9px 9px;
    transform: translateY(2px);
}
.book ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    left: 50%;
    top: 0;
}
.book ul li {
    height: 4px;
    border-radius: 2px;
    transform-origin: 100% 2px;
    width: 48px;
    right: 0;
    top: -10px;
    position: absolute;
    background: var(--color);
    transform: rotateZ(0deg) translateX(-18px);
    animation-duration: var(--duration);
    animation-timing-function: ease;
    animation-iteration-count: infinite;
}

@keyframes left {
    4% { transform: rotateZ(90deg); }
    10%, 40% { transform: rotateZ(0deg); }
    46%, 54% { transform: rotateZ(90deg); }
    60%, 90% { transform: rotateZ(0deg); }
    96% { transform: rotateZ(90deg); }
}

@keyframes right {
    4% { transform: rotateZ(-90deg); }
    10%, 40% { transform: rotateZ(0deg); }
    46%, 54% { transform: rotateZ(-90deg); }
    60%, 90% { transform: rotateZ(0deg); }
    96% { transform: rotateZ(-90deg); }
}

@keyframes book {
    4% { transform: rotateZ(-90deg); }
    10%, 40% { transform: rotateZ(0deg); transform-origin: 2px 2px; }
    40.01%, 59.99% { transform-origin: 30px 2px; }
    46%, 54% { transform: rotateZ(90deg); }
    60%, 90% { transform: rotateZ(0deg); transform-origin: 2px 2px; }
    96% { transform: rotateZ(-90deg); }
}
`;

for(let i=0; i<19; i++) {
  let delay = i * 1.86;
  let delayAfter = i * 1.74;
  css += `
@keyframes page-${i} {
  ${4 + delay}% { transform: rotateZ(0deg) translateX(-18px); }
  ${13 + delayAfter}%, ${54 + delay}% { transform: rotateZ(180deg) translateX(-18px); }
  ${63 + delayAfter}% { transform: rotateZ(0deg) translateX(-18px); }
}
.book ul li:nth-child(${i + 1}) { animation-name: page-${i}; }
`;
}
fs.writeFileSync('src/components/ui/book-loader.css', css);
