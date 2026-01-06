export const localStorageService = {
  // Save notes to localStorage
  saveNotes: (notesData) => {
    try {
      const existingNotes = JSON.parse(localStorage.getItem('supportNotes') || '[]');
      const newNote = {
        id: Date.now(),
        ...notesData,
        createdAt: new Date().toISOString(),
      };
      existingNotes.push(newNote);
      localStorage.setItem('supportNotes', JSON.stringify(existingNotes));
      return newNote;
    } catch (error) {
      console.error('Failed to save notes:', error);
      throw error;
    }
  },

  // Get all notes
  getAllNotes: () => {
    try {
      return JSON.parse(localStorage.getItem('supportNotes') || '[]');
    } catch (error) {
      console.error('Failed to get notes:', error);
      return [];
    }
  },

  // Get notes by ID
  getNotesById: (id) => {
    try {
      const notes = JSON.parse(localStorage.getItem('supportNotes') || '[]');
      return notes.find(note => note.id === id);
    } catch (error) {
      console.error('Failed to get note:', error);
      return null;
    }
  },

  // Delete notes
  deleteNotes: (id) => {
    try {
      const notes = JSON.parse(localStorage.getItem('supportNotes') || '[]');
      const filtered = notes.filter(note => note.id !== id);
      localStorage.setItem('supportNotes', JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('Failed to delete note:', error);
      return false;
    }
  },

  // Clear all notes
  clearAll: () => {
    try {
      localStorage.removeItem('supportNotes');
      return true;
    } catch (error) {
      console.error('Failed to clear notes:', error);
      return false;
    }
  }
};