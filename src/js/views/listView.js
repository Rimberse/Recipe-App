import { elements } from './base';

export const renderItem = item => {
    const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" min="0" value="${item.count}" step="${item.count}" class="shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};

/* Fallback function for clearing input fields, if the "enter" wasn't pressed */
// export const resetValue = (id, list) => {
//     const form = document.querySelector(`[data-itemid="${id}"] > .shopping__count > input`);
//     const listValue = list.items.find(el => el.id === id).count;
//     console.log('List value: ' + listValue + ' , Form value: ' + form.value);
//     if (listValue !== form.value) {
//         form.value = listValue;
//     }
// };