class Tags {
    constructor() {
      this.adapter = new TagsAdapter();
      this.bindingsAndEventListeners();
      this.fetchAndLoadTags();
    }

    bindingsAndEventListeners(){
      console.log("ya tags")
    }
  }