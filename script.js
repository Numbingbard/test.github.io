document.getElementById('addCharacterBtn').addEventListener('click', function() {
    const characterName = document.getElementById('characterName').value;
    if (characterName.trim() === '') {
        alert('Please enter a character name.');
        return;
    }

    const table = document.getElementById('characterTable');
    const headerRow = table.rows[0];
    const subHead   = table.rows[1];
    const newHeaderCell = document.createElement('th');
    newHeaderCell.innerText = characterName;
    newHeaderCell.colSpan=2
    
    headerRow.appendChild(newHeaderCell);

    const lables = document.createElement('th');
    lables.innerText = 'Can Clear';
    subHead.appendChild(lables);

    const lable2 = document.createElement('th');
    lable2.innerText = 'Cleared';
    subHead.appendChild(lable2);

    for (let i = 2; i < table.rows.length; i++) {
            const newRowCell = document.createElement('th');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.arialabel = 'Can Clear';
            newRowCell.appendChild(checkbox);
            table.rows[i].appendChild(newRowCell);

            const newRowCell2 = document.createElement('th');
            const checkbox2 = document.createElement('input');
            checkbox2.type = 'checkbox';
            checkbox2.arialabel = 'Cleared';
            newRowCell2.appendChild(checkbox2);
            table.rows[i].appendChild(newRowCell2);
    }

    document.getElementById('characterName').value = '';
});


