var statuses = ['joy', 'loved', 'haha', 'sunglasses', 'sexy', 'tongue'];
document.getElementById(statuses[Math.floor(Math.random() * statuses.length)]).classList.add('emoji-visible');
