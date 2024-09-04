import Filter from 'bad-words';

class WordFilter {
  private static instance: WordFilter;
  private filter: Filter;

  private constructor() {
    this.filter = new Filter();
    // Optionally add more words to the filter
    // this.filter.addWords(['someotherword', 'anotherword']);
  }

  public static getInstance(): WordFilter {
    if (!WordFilter.instance) {
      WordFilter.instance = new WordFilter();
    }
    return WordFilter.instance;
  }

  public isProfane(text: string): boolean {
    return this.filter.isProfane(text);
  }

  public clean(text: string): string {
    return this.filter.clean(text);
  }
}

export default WordFilter.getInstance();
