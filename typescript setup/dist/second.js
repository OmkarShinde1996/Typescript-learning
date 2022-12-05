"use strict";
class Instagram {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
}
class YouTube {
    constructor(cameraMode, filter, brust, isVideo = true) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.isVideo = isVideo;
    }
    createStory() {
        console.log('Story created!');
    }
}
