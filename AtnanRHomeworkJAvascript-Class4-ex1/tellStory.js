function tellStory([name, mood, activity]) {
    // Create a story using template literals
    const story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
    return story;
}

// Example usage
const userInput = ["Alex", "happy", "playing video games"];
const story = tellStory(userInput);

// Print the story to the console
console.log(story);

// Alternatively, show the story in an alert
alert(story);
