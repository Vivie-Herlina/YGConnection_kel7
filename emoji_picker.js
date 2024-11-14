// Initialize the emoji picker
const button = document.querySelector('#emoji-button');
const picker = new EmojiButton();

picker.on('emoji', emoji => {
    // Insert the selected emoji into the textarea
    const textarea = document.querySelector('#post-text');
    textarea.value += emoji;
});

// Toggle the emoji picker when the button is clicked
button.addEventListener('click', () => {
    picker.togglePicker(button);
});
