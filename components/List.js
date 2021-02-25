import React from 'react';

function List({ list }) {
    function renderList() {
        if (!list.length) {
            return 'Список пуст';
        }
        return list.map((item, index) => (
            <li key={index} data-testid="list-item">
                {item}
            </li>
        ));
    }

    return <ul data-testid="list">
        {renderList()}
    </ul>;
}

export { List };