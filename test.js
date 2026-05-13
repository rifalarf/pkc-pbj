const s1 = document.createElement('details');
s1.innerHTML = '<summary>S1</summary><div>C1</div>';
const s2 = document.createElement('details');
s2.innerHTML = '<summary>S2</summary><div>C2</div>';
document.body.appendChild(s1);
document.body.appendChild(s2);
s1.addEventListener('toggle', () => s2.open = s1.open);
