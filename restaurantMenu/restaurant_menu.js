const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHtml = breakfastMenu.map((items,index)=>`<p>item ${index+1} : ${items}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHtml;

let mainCourseItems='';
mainCourseMenu.forEach((items,index)=>{
mainCourseItems += `<p>item ${index+1} : ${items}</p>`;
})
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItems;

let dessertItems = '';
for(let i = 0;i<dessertMenu.length;i++){
    dessertItems += `<p>item ${i+1} : ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItems;