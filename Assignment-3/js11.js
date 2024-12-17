const students={
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

const averages=Object.entries(students).map(([students, subjects])=>{
    const scores=Object.values(subjects);
    const average=scores.reduce((total,score)=>total+score,0)/scores.length;
    return{ [students]: { average: Math.round(average)}};
});

console.log(averages);
