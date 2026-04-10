//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const myName = 'Manuel Guerrero Jr.';
  const myAge = 44;
  const myHobbies = [
    'Drawing',
    'Reading',
    'Writing',
    'Exercise',
    'Video Games',
  ];
  return (
    <div>
      <h2>
        I&#39;m {myName} and I am {myAge} years old.
      </h2>
      <p>
        I have extensive experience in the hospitality industry and am now
        learning to code.
      </p>
      <ul>
        {myHobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <p> Student output will go here </p>
    </div>
  );
}
