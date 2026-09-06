const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const title = document.getElementById('page-title');
const titles = {dashboard:'Operations Dashboard',investigations:'Investigations',vulnerabilities:'Vulnerability Scanner',phishing:'Phishing Analyzer',network:'Network / GIS',evidence:'Evidence & Forensics',reports:'Reports',projects:'Projects',settings:'Settings'};
navItems.forEach(item => item.addEventListener('click', () => {
  const view = item.dataset.view;
  navItems.forEach(n => n.classList.toggle('active', n === item));
  views.forEach(v => v.classList.toggle('active-view', v.id === view));
  title.textContent = titles[view] || 'CyberOps-X';
}));

document.getElementById('scan-btn')?.addEventListener('click', () => {
  const target = document.getElementById('target').value.trim();
  document.getElementById('scan-result').textContent = target
    ? `Target ${target} recorded locally. Scanner API is not connected, so no scan was executed.`
    : 'Enter an authorized lab target. Scanner API is not connected, so no scan was executed.';
});

document.getElementById('analyze-btn')?.addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  document.getElementById('phishing-result').textContent = email
    ? 'Email content is ready for the isolated ML service. No prediction was made because the service is not connected.'
    : 'Paste email content first. No prediction was made.';
});
