const communityData = {
    name: "Banyu",
    bio: "Official Community.",
    links: [
        { name: "Support me", url: "https://saweria.co/Bnyu", type: "featured" },
        { name: "Bot DC", url: "https://discord.com/oauth2/authorize?client_id=1468682246969102606", type: "normal" },
        { name: "Join Server", url: "https://discord.gg/8d47n2m2", type: "normal" }
    ]
};

const badgeSvg = `<svg class="verified-badge" viewBox="0 0 24 24" style="fill: #0084ff; width: 20px; height: 20px; margin-left: 5px;"><path d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.66.54-1.27.4-2.76-.45-3.92-1.16-1.16-2.65-1.3-3.92-.45-.71-1.3-2.08-2.18-3.66-2.18-1.58 0-2.95.88-3.66 2.18-1.27-.54-2.76-.4-3.92.45-1.16 1.16-1.3 2.65-.45 3.92-1.3.71-2.18 2.08-2.18 3.66 0 1.58.88 2.95 2.18 3.66-.54 1.27-.4 2.76.45 3.92 1.16 1.16 2.65 1.3 3.92.45.71 1.3 2.08 2.18 3.66 2.18 1.58 0 2.95-.88 3.66-2.18 1.27.54 2.76.4 3.92-.45 1.16-1.16 1.3-2.65.45-3.92.71-1.31 2.08-2.19 3.66-2.19zM10 17l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>`;

function render() {
    document.getElementById('community-name').innerHTML = `${communityData.name} ${badgeSvg}`;
    document.getElementById('community-bio').innerText = communityData.bio;
    
    const display = document.getElementById('links-display');
    display.innerHTML = '';
    
    communityData.links.forEach((link) => {
        const styleClass = link.type === 'featured' ? 'featured' : '';
        display.innerHTML += `<a href="${link.url}" target="_blank" class="link-item ${styleClass}">${link.name}</a>`;
    });
}

// Anti-Inspect tetap dipertahankan untuk keamanan
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) { 
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0)))) {
        return false; 
    }
};

render();