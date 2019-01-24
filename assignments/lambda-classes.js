// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const jonathan = new Instructor({
    name: 'Jonathan',
    location: 'Fresno',
    age: 30,
    gender: 'male',
    favLanguage: 'PHP',
    specialty: 'Back-end',
    catchPhrase: `Kick the book`
});

const virginia = new Student({
    name: 'Virginia',
    location: 'San Francisco',
    age: 26,
    gender: 'female',
    previousBackground: 'Medical student',
    className: 'WEB17',
    favSubjects: ['Preprocessing', 'Flexbox']
});
const neil = new Student({
    name: 'Neil',
    location: 'Dublin',
    age: 23,
    gender: 'male',
    previousBackground: 'Auto mechanic',
    className: 'WEB17',
    favSubjects: ['User Interface', 'Responsive Design']
});

const patrick = new ProjectManagers({
    name: 'Patrick',
    location: 'Palm Springs',
    age: 28,
    gender: 'male',
    gradClassName: 'WEB17',
    favInstructor: 'Jonathan'
});
const shawn = new ProjectManagers({
    name: 'Shawn',
    location: 'Las Vegas',
    age: 26,
    gender: 'male',
    gradClassName: 'WEB17',
    favInstructor: 'Fred'
});

fred.demo('Prototype');
jonathan.grade(virginia, 'HTML');
jonathan.speak();
neil.listsSubjects();
neil.speak();
neil.PRAssignment('Advanced CSS');
virginia.sprintChallenge('Responsive Design');
shawn.debugsCode(neil, 'Flexbox');
patrick.standUp('web17_help');