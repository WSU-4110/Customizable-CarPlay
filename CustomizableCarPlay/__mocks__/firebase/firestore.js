// __mocks__/firebase/firestore.js

export const getFirestore = jest.fn(() => {
  return {
    collection: jest.fn(() => ({
      add: jest.fn(),
    })),
    addDoc: jest.fn(),
    // Add other Firestore methods you might use in your code
  };
});
