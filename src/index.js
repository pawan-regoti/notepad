const wordCount = (text) => text.length === 0 ? 0 : text.split(/\s+/).length

const updateWordCount = (text) => {
    const trimmedText = text?.trim() ?? ''
    document.getElementById('wordCount').innerHTML = `${trimmedText.length} chracter(s), ${wordCount(trimmedText)} word(s)`
}

const syncNotes = async () => {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const restoredText = localStorage.getItem('note')
        document.getElementById('note').value = restoredText
        updateWordCount(restoredText)
    }
}

window.onload = async () => {
    syncNotes()
    document.getElementById('note').addEventListener('input', (e) => {
        localStorage.setItem('note', e.target.value)
    })
}
