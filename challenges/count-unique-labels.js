/*
    Find out how many labels are unique to a demographic.
*/

// sample

const input1 = {
    children: ['car', 'tree', 'playground', 'car', 'desk'],
    adults: ['desk', 'car'],
    seniors: ['tree', 'kitchen', 'car', 'smile']
};

const output1 = {
    children: 1,
    adults: 0,
    seniors: 2
};

const input2 = {
    children: ['car', 'desk'],
    adults: ['desk', 'car', 'smile'],
    seniors: ['tree', 'kitchen', 'car', 'desk', 'desk', 'tv']
};

const output2 = {
    children: 0,
    adults: 1,
    seniors: 3
};

// tests

console.log(
    JSON.stringify(countUniqueLabels(input1)) === JSON.stringify(output1)
        ? 'PASS'
        : 'FAIL'
);

console.log(
    JSON.stringify(countUniqueLabels(input2)) === JSON.stringify(output2)
        ? 'PASS'
        : 'FAIL'
);

// code

function countUniqueLabels(input) {
    const labelsToGroups = new Map();

    Object.keys(input).map(groupName => {
        const labels = input[groupName];
        labels.map(labelName => {
            const labelToGroups = labelsToGroups.get(labelName);
            if (!labelToGroups) {
                labelsToGroups.set(labelName, [groupName]);
            } else if (!labelToGroups.includes(groupName)) {
                labelsToGroups.set(labelName, [...labelToGroups, groupName]);
            }
        });
    });

    const groupsToUniqueLabels = {};

    Object.keys(input).forEach(groupName => {
        groupsToUniqueLabels[groupName] = 0;
    });

    labelsToGroups.forEach(groups => {
        if (groups.length === 1) {
            const group = groups[0];
            groupsToUniqueLabels[group] = groupsToUniqueLabels[group] + 1;
        }
    });

    return groupsToUniqueLabels;
}
