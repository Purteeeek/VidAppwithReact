import { computed, observable } from 'mobx';

export class Search {
	@observable videos = [];
	@observable selectedVideo = {}
}

const search = new Search();
export default search;