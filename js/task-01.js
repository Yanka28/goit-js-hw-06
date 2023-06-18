
const list = document.querySelector('#categories');
const items = Array.from(list.children);

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const childList = item.querySelector('ul').children;
    console.log('');
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${childList.length}`);
});