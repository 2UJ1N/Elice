// JS 100제
// https://obsidian-scene-3ac.notion.site/JS-100-94d97d294dd14c9b911a02c840fa9f2d

//문제11
let s = 0;

for (let i = 1; i <= 100; i++) {
    s += i;
}

console.log(s);



//문제12
//다시!
const Wizard = class Wizard {
    constructor (health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();



//문제13
var planet = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

var y = prompt('몇 번째 행성인가요?');
console.log(planet[y + 1]);