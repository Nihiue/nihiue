const fs = require('fs');

const headContent = fs.readFileSync('./head.md', 'utf-8');

function repoRender(name) {
  return `
<p><a href="https://github.com/Nihiue/${name}">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://www.nihi.me/github-stats/pin?repo=${name}&theme=dracula">
  <img alt="Repo: ${name}" src="https://www.nihi.me/github-stats/pin?repo=${name}&theme=default">
</picture>
</a></p>
`;
}

const repoList = {
  '🚣 Application': [ 'Thori-dal', 'open-ip-kvm', 'spa-renderer'],
  '🚀 Library': [ 'little-byte', 'nbconvert' ],
  '🎮 Fun & Hack': [ 'gesture-gamepad', 'JumpHelper', 'LetMeRaid', 'perfect-loop' ],
  '⛏️ Tools': [ 'loki-enhance-middleware', 'pageshot', 'libreoffice-portal', 's3-sync' ],
  '💡 Demo': [ 'proxy-reactive-demo', 'node-perf-demo' ]
};

let output = headContent;

Object.keys(repoList).forEach((cateName) => {
  output += `## ${cateName}\n\n`;
  output += repoList[cateName].map(repoRender).join('');
});

fs.writeFileSync('./README.md', output, 'utf-8');
