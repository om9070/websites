console.log("this is cv project");
//data is array of object which contains information about candidate
const data = [{
        name: 'rohan das',
        age: 18,
        city: 'kolkata',
        langauge: 'pythan',
        framwork: 'django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg',
    },

    {
        name: 'shubham',
        age: 21,
        city: 'patna',
        langauge: 'java',
        framwork: 'nodejs',
        image: 'https://randomuser.me/api/portraits/men/52.jpg',
    },

    {
        name: 'aishwariya',
        age: 45,
        city: 'mumbia',
        langauge: 'flash',
        framwork: 'not',
        image: 'https://randomuser.me/api/portraits/women/51.jpg',
    },

    {
        name: 'anish mahlotra',
        age: 21,
        city: 'kothibigaha',
        langauge: 'html',
        framwork: 'css',
        image: 'https://randomuser.me/api/portraits/men/57.jpg',
    },

]

//cv interator
function cvinterator(profiles) {
    let nextindex = 0;
    return {
        next: function() {
            return nextindex < profiles.length ? { value: profiles[nextindex++], done: false } : { done: true }
        }
    };
}

const candidate = cvinterator(data)
nextcv();

//button lissner
const next = document.getElementById('next');
next.addEventListener('click', nextcv);

function nextcv() {
    const currentcandidate = candidate.next().value;
    console.log(currentcandidate);
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentcandidate != undefined) {
        image.innerHTML = `<img src='${currentcandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentcandidate.name}</li>
    <li class="list-group-item">${currentcandidate.age}</li>
    <li class="list-group-item">lives in${currentcandidate.city}</li>
    <li class="list-group-item">${currentcandidate.langauge}</li>
    <li class="list-group-item">${currentcandidate.framwork}</li>
    `;
    } else {
        alert('end of application');
        window.location.reload();
    }
}