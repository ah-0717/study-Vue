export const tokyoNumber = {
  data() {
    return {
      home: 'Home',
      title: 'title',
      number: 0,
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
}