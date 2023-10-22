const { create } = require("zustand");

export const useGenerationStore = create((set) => ({
  isQuoteOpen: false,
  toggleQuote: () => set((state) => ({ isQuoteOpen: !state.isQuoteOpen })),
  // quoteClose: () => set({isQuoteOpen: false}) 
}))