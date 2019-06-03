const registerKey = () => {
  AFRAME.registerPrimitive('a-key', {
    defaultComponents: {
      // Link to a key image
      collectable: { thumbnail: 'https://firebasestorage.googleapis.com/v0/b/questify-d4c5a.appspot.com/o/key.png?alt=media&token=87a35d51-fec4-43fb-b723-1aca3f388fdd', name: 'A key', description: 'This must unlock something...' },
      unlocks: {},
    },
    
    mappings: {
      thumbnail: 'collectable.thumbnail',
      unlocksentity: 'unlocks.unlocksentity',
      name: 'collectable.name',
      description: 'collectable.description'
    },
  });
};

export default registerKey;
