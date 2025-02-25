document.addEventListener('DOMContentLoaded', (event) => {
    const checklistItems = [
        'Water (one gallon per person per day for at least three days, for drinking and sanitation)',
        'Food (at least a three-day supply of non-perishable food)',
        'Battery-powered or hand crank radio and a NOAA Weather Radio with tone alert',
        'Flashlight',
        'First aid kit',
        'Extra batteries',
        'Whistle (to signal for help)',
        'Dust mask (to help filter contaminated air)',
        'Plastic sheeting and duct tape (to shelter in place)',
        'Moist towelettes, garbage bags, and plastic ties (for personal sanitation)',
        'Wrench or pliers (to turn off utilities)',
        'Manual can opener (for food)',
        'Local maps',
        'Cell phone with chargers and a backup battery'
    ];

    const checklistContainer = document.getElementById('checklist');

    checklistItems.forEach(item => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = item;
        checkbox.name = 'checklist';
        checkbox.value = item;

        const label = document.createElement('label');
        label.htmlFor = item;
        label.appendChild(document.createTextNode(item));

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        checklistContainer.appendChild(listItem);
    });
});