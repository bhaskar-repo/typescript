//Youtube Video class definition
var YouTubeVideo = /** @class */ (function () {
    function YouTubeVideo(id, url, title, thumbnail, size, resolutionTypes, likes, dis_likes, views, uploadedBy, comments, description, subscribers, watchLater) {
        var _this = this;
        //getters and setters
        this.getId = function () {
            return _this.id;
        };
        this.setId = function (id) {
            _this.id = id;
        };
        this.getUrl = function () {
            return _this.url;
        };
        this.setUrl = function (url) {
            _this.url = url;
        };
        this.getTitle = function () {
            return _this.title;
        };
        this.setTitle = function (title) {
            _this.title = title;
        };
        this.getThumbnail = function () {
            return _this.thumbnail;
        };
        this.setThumbnail = function (thumbnail) {
            _this.thumbnail = thumbnail;
        };
        this.getSize = function () {
            return _this.size;
        };
        this.setSize = function (size) {
            _this.size = size;
        };
        this.getResolutionTypes = function () {
            return _this.resolutionTypes;
        };
        this.setResolutionTypes = function (resolutionTypes) {
            _this.resolutionTypes = resolutionTypes;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.setLikes = function (likes) {
            _this.likes = likes;
        };
        this.getDisLikes = function () {
            return _this.dis_likes;
        };
        this.setDisLikes = function (dis_likes) {
            _this.dis_likes = dis_likes;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.setViews = function (views) {
            _this.views = views;
        };
        this.getUploadedBy = function () {
            return _this.uploadedBy;
        };
        this.setUploadedBy = function (uploadedBy) {
            _this.uploadedBy = uploadedBy;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.setComments = function (comments) {
            _this.comments = comments;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.setDescription = function (description) {
            _this.description = description;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.setSubscribers = function (subscibers) {
            _this.subscribers = subscibers;
        };
        this.isWatchLater = function () {
            return _this.watchLater;
        };
        this.setWatchLater = function (watchlater) {
            _this.watchLater = watchlater;
        };
        this.id = id;
        this.url = url;
        this.title = title;
        this.thumbnail = thumbnail;
        this.size = size;
        this.resolutionTypes = resolutionTypes;
        this.likes = likes;
        this.dis_likes = dis_likes;
        this.views = views;
        this.uploadedBy = uploadedBy;
        this.comments = comments;
        this.description = description;
        this.subscribers = subscribers;
        this.watchLater = watchLater;
    }
    return YouTubeVideo;
}());
var getRelatedVideosUrl;
var resolutionTypes = ["1080 HD", "468"];
var comments = ["Hi", "Hello nice one"];
var myVideo = new YouTubeVideo(101, "https://www.youtube.com/xyz", "Best comedy Ever", "Comedy", "1 GB", resolutionTypes, 34, 1, 50000, "Bhaskar", comments, "This video is entitled to make people laugh and be happy", 345623, true);
console.log("Title of the video = " + myVideo.getTitle());
console.log("Thumbnail = " + myVideo.getThumbnail());
console.log("Size = " + myVideo.getSize());
console.log("Resolution Types = " + myVideo.getResolutionTypes());
console.log("likes = " + myVideo.getLikes());
console.log("Dis Likes = " + myVideo.getDisLikes());
console.log("Views = " + myVideo.getViews());
console.log("Uploaded By = " + myVideo.getUploadedBy());
console.log("Comments = " + myVideo.getComments());
console.log("Description = " + myVideo.getDescription());
console.log("Subscribers = " + myVideo.getSubscribers());
console.log("WatchLater = " + myVideo.isWatchLater());
