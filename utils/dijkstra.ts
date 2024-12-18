

class minHeap {
    heapArray = [];

    constructor() {
        this.heapArray.push(null);
    }


    push(data) {
        if (this.heapArray === null) {
            this.heapArray = [];
            this.heapArray.push(null);
            this.heapArray.push(data);
        }
        else {
            this.heapArray.push(data);
            let inserted_idx = this.heapArray.length - 1;
            let parent_idx = parseInt(inserted_idx / 2);

            while (inserted_idx > 1) {
                if (this.heapArray[inserted_idx][1] < this.heapArray[parent_idx][1]) {
                    const tmp = this.heapArray[inserted_idx];
                    this.heapArray[inserted_idx] = this.heapArray[parent_idx];
                    this.heapArray[parent_idx] = tmp;
                    inserted_idx = parent_idx;
                    parent_idx = parseInt(parent_idx / 2);
                }
                else {
                    break;
                }
            }
        }
    }
}