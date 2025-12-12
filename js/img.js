const backgrounds = [
"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1450849608880-6f787542c88a?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1920&q=80",
"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80"
];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const image = backgrounds[randomIndex];

document.body.style.backgroundImage = `url('${image}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.transition = "background-image 2s ease-in-out";
}

changeBackground();
setInterval(changeBackground, 20000);

